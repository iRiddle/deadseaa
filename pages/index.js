import Head from 'next/head'

import MainLayout from '../layouts/MainLayout'
import Contact from '../components/Contact'

const Index = () => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <MainLayout>
                {/* <Contact></Contact> */}
            </MainLayout>
        </>
    )
}

export default Index