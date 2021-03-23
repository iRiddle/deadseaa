import Head from 'next/head'

import MainLayout from '../layouts/MainLayout'
import Contact from '../components/Contact'
import GiftSet from '../components/GiftSet'

const Index = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <MainLayout>
                <GiftSet />
                <Contact />
            </MainLayout>
        </>
    )
}

export default Index