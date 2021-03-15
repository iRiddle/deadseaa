import Head from 'next/head'

import MainLayout from '../../layouts/MainLayout'
import CatalogLayout from '../../layouts/CatalogLayout'

import Product from '../../components/Product'

import NotificationHOC from '../../HOCS/NotificationHOC'

import { useSetToStorage } from './hooks/useSetToStorage'

const Catalog = ({ products, categories, createNotification }) => {
    const { setToStorage } = useSetToStorage(createNotification)

    const handleSetToStorage = (id) => {
        const product = products.filter((product) => product.id === id)[0];

        console.log(product)

        if(product.regular_price && product.regular_price !== 0) {
            setToStorage({ ...product, count: product.count ? product.count + 1 : 1 })
        } 
    }

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <MainLayout>
                <CatalogLayout productCategories={categories}>
                    {products.length ? products.map(({ id, name, images, regular_price }) =>
                        <Product
                            key={id}
                            id={id}
                            name={name}
                            images={images}
                            regularPrice={regular_price}
                            handleSetToStorage={handleSetToStorage}
                        />
                    ) : 'Нет данных'}
                </CatalogLayout>
            </MainLayout>
        </>
    )
}

export async function getStaticProps() {
    const products = await fetch(`http://localhost:3000/getProducts`).then((res) => res.json())
    const categories = await fetch(`http://localhost:3000/getCategories`).then((res) => res.json())

    if (!products && !categories) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            products,
            categories
        }
    }
}

export default NotificationHOC(Catalog)
