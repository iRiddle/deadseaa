import { useState, useEffect } from 'react'
import isEmpty from 'lodash.isempty'

import NotificationHOC from '../../HOCS/NotificationHOC'
import MainLayout from '../../layouts/MainLayout'
import CustomerDataField from '../../components/CustomerDataField'

import WooCommerceApi from '../../services/WooCommerceService'

import { getDataFromLocal, removeDataFromLocal } from '../../storage'

import classnames from './Checkout.module.scss'
import { useRouter } from 'next/router'

const Checkout = ({ createNotification }) => {
	const [fullName, setFullName] = useState('');

	const [locality, setLocality] = useState('');
	const [city, setCity] = useState('');
	const [postCode, setPostCode] = useState('');
	const [state, setState] = useState('');

	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [notes, setNotes] = useState('');

	const [isLoading, setIsLoading] = useState(false)

	const router = useRouter()

	const orders = getDataFromLocal('phylosophyProducts');

	useEffect(() => {
		if (isEmpty(orders)) {
			return router.push('/basket')
		}
	}, [])

	const handleData = (e, field) => {
		const value = e.target.value
		switch (field) {
			case 'fullName': {
				return setFullName(value)
			}
			case 'locality': {
				return setLocality(value)
			}
			case 'city': {
				return setCity(value)
			}
			case 'postCode': {
				return setPostCode(value)
			}
			case 'state': {
				return setState(value)
			}
			case 'phone': {
				return setPhone(value)
			}
			case 'email': {
				return setEmail(value)
			}
			case 'notes': {
				return setNotes(value)
			}
		}
	}

	const checkout = () => {
		setIsLoading(true)
		const isEmptySomeFiled = [fullName, locality, phone, email].some(field => !field.length);
		if (isEmptySomeFiled) {
			setIsLoading(false);
			return createNotification('error', "Одно из обязательных полей не заполнено", "Ошибка")
		}

		const data = {
			payment_method: "cod",
			payment_method_title: "Оплата при доставке",
			status: "processing",
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
				postcode: postCode,
				country: "RU"
			},
			line_items: [...orders.map(order => ({ product_id: order.id, quantity: order.count }))]
		};

		WooCommerceApi.post('orders', data).then(response => {
			if (response.status >= 200 && response.status < 300) {
				resetState();
				removeDataFromLocal('phylosophyProducts');
				setIsLoading(false)
				setTimeout(() => router.push('/catalog'), 500)
				return createNotification('ok', 'Заказ успешно оформлен. Счет на оплату направлен на почту!')
			}

			if (response.status >= 400 && response.status < 500) {
				setIsLoading(false)
				return createNotification('error', response.data.status, 'Ошибка')
			}

		}).catch(error => {
			if (isEmpty(error.response.data)) {
				setIsLoading(false)
				return createNotification('error', "Сервер не отвечает. Попробуйте позднее.", 'Ошибка')
			}
			setIsLoading(false)
			const { data: { params: { billing } } } = error.response.data
			return createNotification('error', billing, 'Ошибка')
		})
	}

	const resetState = () => {
		setFullName('')
		setLocality('')
		setCity('')
		setPostCode('')
		setState('')
		setPhone('')
		setEmail('')
		setNotes('')
	}

	return (
		<MainLayout className={classnames['main--checkout']}>
			<CustomerDataField
				fullName={fullName}
				locality={locality}
				city={city}
				postCode={postCode}
				state={state}
				phone={phone}
				email={email}
				notes={notes}
				orders={orders}
				isLoading={isLoading}
				handleData={handleData}
				checkout={checkout}
				someEmpty={!isEmpty(orders) && orders.some(item => isEmpty(item.price) || item.price === 0)}
			/>
		</MainLayout>
	)
}

export default NotificationHOC(Checkout)