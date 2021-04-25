import Head from 'next/head'

import AuthHOC from '../HOCS/AuthHOC'

import MainLayout from '../layouts/MainLayout'
import Contact from '../components/Contact'
import GiftSet from '../components/GiftSet'
import Offers from '../components/Offers'

const MainPage = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <MainLayout>
                <GiftSet />
                <Offers />
                <Contact />
            </MainLayout>
        </>
    )
}

export default AuthHOC(MainPage)