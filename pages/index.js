import { useState } from 'react'
import Head from 'next/head'
import emailjs from 'emailjs-com';

import WordPressApi from '../services/WordPressService'
import WooCommerceApi from '../services/WooCommerceService'
import AuthHOC from '../HOCS/AuthHOC'
import NotificationHOC from '../HOCS/NotificationHOC'
import MainLayout from '../layouts/MainLayout'
import PageLayout from '../layouts/PageLayout'
import Contact from '../components/Contact'
import Offers from '../components/Offers'
import { apiEmailConfig } from '../config'
import isValidEmail from '../helpers/validateEmail'
import fabricStorage from '../helpers/fabricStorage'

import '../components/GiftSet/GiftSet.module.scss'

import { init } from 'emailjs-com';
init("user_fmW6dnSdyQtVMGGNFKfh4");

const MainPage = ({ page, faceProducts, stockProducts, createNotification }) => {
    const [email, setEmail] = useState('');
    const [loadingEmail, setLoadingEmail] = useState(false);

    const { setToStorage } = fabricStorage(createNotification)

    const handleSetToStorage = (id) => {
        const product = products.filter((product) => product.id === id)[0];

        if (product.regular_price && product.regular_price !== 0) {
            setToStorage({ ...product, count: product.count ? product.count + 1 : 1 })
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
        setLoadingEmail(true)

        if (!isValidEmail(email)) {
            setLoadingEmail(false);
            return createNotification('error', 'Проверьте правильность введенного email-адреса', 'Ошибка')
        }

        emailjs.sendForm(apiEmailConfig.SERVICE_ID, apiEmailConfig.TEMPLATE_ID, e.target, apiEmailConfig.USER_ID)
            .then((result) => {
                if (result.status === 200) {
                    setLoadingEmail(false)
                    createNotification('ok', "Менеджер свяжется с вами в течение нескольких часов")
                } else {
                    setLoadingEmail(false)
                    createNotification('error', 'Письмо не доставлено. Попробуйте позднее', 'Ошибка')
                }
                setEmail('');
            }, (error) => {
                setLoadingEmail(false)
                createNotification('error', error.text, 'Ошибка')
            });
    }

    const handleEmail = (e) => {
        const data = e.target.value
        setEmail(data)
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <MainLayout>
                <PageLayout content={page[0]} isNoneTitle={true} />
                <Offers
                    faceProducts={faceProducts.slice(0, 2)}
                    stockProducts={stockProducts.slice(0, 2)}
                    handleSetToStorage={handleSetToStorage}
                />
                <Contact
                    email={email}
                    loadingEmail={loadingEmail}
                    sendEmail={sendEmail}
                    handleEmail={handleEmail}
                />
            </MainLayout>
        </>
    )
}

export async function getServerSideProps() {
    const page = await WordPressApi.pages().slug('main').then(response => response).catch(err => err)
    const faceProducts = await WooCommerceApi.get(`products`, { category: 18 }).then(response => response.data).catch(err => err)
    const stockProducts = await WooCommerceApi.get(`products`, { category: 25 }).then(response => response.data).catch(err => err)


    if (!page && !faceProducts && !stockProducts) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            page,
            faceProducts,
            stockProducts
        }
    }
}

export default NotificationHOC(AuthHOC(MainPage))