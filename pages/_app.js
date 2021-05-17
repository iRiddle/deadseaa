
import NProgress from 'nprogress';
import Router, { useRouter } from 'next/router';
import Head from 'next/head'

import "nprogress/nprogress.css";
import '../styles/globals.css'

NProgress.configure({
    minimum: 0.4,
    easing: 'ease',
    speed: 800,
    showSpinner: false,
});

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App = ({ Component, pageProps }) => {
    const router = useRouter()
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://kosmetika.sandev.online/wp-includes/css/dist/block-library/style.min.css?ver=5.7.1"></link>
                {/* <link href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" rel="stylesheet"></link> */}
            </Head>
            <Component {...pageProps} key={router.asPath} />
        </>
    )
}

export default App