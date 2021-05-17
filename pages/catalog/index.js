import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import isEmpty from 'lodash.isempty'

import MainLayout from '../../layouts/MainLayout'
import CatalogLayout from '../../layouts/CatalogLayout'

import Product from '../../components/Product'

import NotificationHOC from '../../HOCS/NotificationHOC'

import fabricStorage from '../../helpers/fabricStorage'

import WooCommerceApi from '../../services/WooCommerceService'

const Catalog = ({ products = [], categories = [], hits, pageCount, createNotification }) => {
    const router = useRouter()
    const { setToStorage } = fabricStorage(createNotification);

    const handleSetToStorage = (id) => {
        const product = products.filter((product) => product.id === id)[0];

        if (product.regular_price && product.regular_price !== 0) {
            setToStorage({ ...product, count: product.count ? product.count + 1 : 1 })
        }
    }

    const handlePageClick = (page) => {
        const currentPath = router.pathname;
        const currentQuery = { ...router.query };
        currentQuery.page = page.selected + 1;

        router.push({
            pathname: currentPath,
            query: currentQuery,
        });
    }

    useEffect(() => {
        if (isEmpty(router.query) || isEmpty(router.query.page) || router.query.page < 1) {
            router.push('/catalog?page=1', undefined, { shallow: true })
        }
    }, [])

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <MainLayout>
                <CatalogLayout
                    productCategories={categories}
                    hits={hits}
                    pageCount={pageCount}
                    handlePageClick={handlePageClick}
                >
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

export async function getServerSideProps({ query }) {
    const page = query.page || 1
    const response = await WooCommerceApi.get('products', { page: page }).then(response => response).catch(err => err)
    const { data, headers } = response

    const categories = await WooCommerceApi.get(`products/categories`).then(response => response.data).catch(err => err)
    const hits = await WooCommerceApi.get(`products`, { category: 28 }).then(response => response.data).catch(err => err)

    if (!data && !categories && !hits && !headers) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            products: !isEmpty(data) ? data : [],
            categories,
            hits,
            pageCount: !isEmpty(headers) ? headers['x-wp-totalpages'] : 0,
        }
    }
}

export default NotificationHOC(Catalog)
