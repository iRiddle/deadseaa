import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import * as yup from "yup";
import { yupResolver } from '@hookform/resolvers/yup';

import isEmpty from 'lodash.isempty';

import NotificationHOC from '../../HOCS/NotificationHOC';
import MainLayout from '../../layouts/MainLayout';
import CustomerDataField from '../../components/CustomerDataField';

import WooCommerceApi from '../../services/WooCommerceService';
import YouKassaService from '../../services/YoukassaSerivce';
import SdekService from '../../services/SdekService'

import { getDataFromLocal, removeDataFromLocal } from '../../storage';
import { phoneRegExp, emailRegExp } from '../../helpers/validation';

import classnames from './Checkout.module.scss';

const CheckoutSchema = yup.object().shape({
	payment: yup.string().required(''),
	fullName: yup.string().required('Поле обязательно для заполнения'),
	locality: yup.string().required('Поле обязательно для заполнения'),
	city: yup.string().required('Поле обязательно для заполнения'),
	postCode: yup.number()
		.required('Поле обязательно для заполнения')
		.typeError('Почтовый индекс должен быть числом')
		.integer('Почтовый индекс должен быть числом')
		.positive()
		.test('len', 'Почтовый индекс состоит из 6 цифр', val => val.toString().length === 6),
	state: yup.string().required('Поле обязательно для заполнения'),
	phone: yup.string()
		.required('Поле обязательно для заполнения')
		.matches(phoneRegExp, 'Номер телефона невалидный'),
	email: yup.string()
		.required('Поле обязательно для заполнения')
		.matches(emailRegExp, 'E-mail невалидный'),
	notes: yup.mixed().notRequired()
});

const Checkout = ({ createNotification }) => {
	const [isLoading, setIsLoading] = useState(false);
	const [totalDelivery, setTotalDelivery] = useState(0)

	const router = useRouter();
	const { register, formState: { errors }, watch, handleSubmit } = useForm({
		resolver: yupResolver(CheckoutSchema)
	});
	const watchPostCode = watch("postCode", '');

	const orders = getDataFromLocal('phylosophyProducts');

	useEffect(() => {
		if (isEmpty(orders)) {
			return router.push('/basket')
		}
	}, [])

	useEffect(async () => {
		if (watchPostCode && watchPostCode.length === 6) {
			const parsedTotalDeliver = await SdekService({ postal_code: watchPostCode }, createNotification);
			return handleTotalDeliver(parsedTotalDeliver);
		} return handleTotalDeliver(0)
	}, [watchPostCode])

	const handleTotalDeliver = (data) => {
		setTotalDelivery(data)
	}

	const onSubmit = (data) => {
		const { city, email, fullName, locality, phone, postCode, state } = data
		setIsLoading(true)
		const userId = getDataFromLocal('session-cosmetic-token').userId || 0;
		const approvedData = {
			payment_method: 'yookassa_epl',
			payment_method_title: "yookassa_epl",
			status: "on-hold",
			set_paid: false,
			billing: {
				first_name: fullName,
				email,
				phone
			},
			shipping: {
				address_1: locality,
				city,
				state,
				postcode: postCode.toString(),
				country: "RU"
			},
			customer_id: userId,
			shipping_lines: [
				{
					method_id: "flat_rate",
					method_title: "Flat Rate",
					total: totalDelivery.toString()
				}
			],
			line_items: [...orders.map(order => ({ product_id: order.id, quantity: order.count }))]
		};

		WooCommerceApi.post('orders', approvedData).then(response => {
			if (response.status >= 200 && response.status < 300) {
				removeDataFromLocal('phylosophyProducts');
				const orderKey = response.data.order_key
				const orderId = response.data.id
				return interceptMethodForYoukassa(orderKey, orderId);
			}

			if (response.status >= 400 && response.status < 500) {
				setIsLoading(false)
				return createNotification('error', response.data.status, 'Ошибка')
			}

			if (response.status >= 500) {
				return createNotification('error', 'Внутренняя ошибка сервиса. Попробуйте позднее', 'Ошибка')
			}

		}).catch(error => {
			if (isEmpty(error.response)) {
				setIsLoading(false)
				return createNotification('error', "Сервер не отвечает. Попробуйте позднее.", 'Ошибка')
			}
			setIsLoading(false)
			const { data: { params: { billing } } } = error.response.data
			return createNotification('error', billing, 'Ошибка')
		})
	}

	const interceptMethodForYoukassa = (orderKey, id) => {
		return YouKassaService({ id, order_key: orderKey }, router, setIsLoading, createNotification)
	}

	return (
		<MainLayout className={classnames['main--checkout']}>
			<CustomerDataField
				orders={orders}
				totalDelivery={totalDelivery}
				isLoading={isLoading}
				register={register}
				handleSubmit={handleSubmit}
				errors={errors}
				onSubmit={onSubmit}
			/>
		</MainLayout>
	)
}

export default NotificationHOC(Checkout)