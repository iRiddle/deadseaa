import { useEffect } from 'react'
import { useRouter } from 'next/router'
import isEmpty from 'lodash.isempty'

import MainLayout from '../../../layouts/MainLayout'
import CatalogLayout from '../../../layouts/CatalogLayout'

import Product from '../../../components/Product'

import NotificationHOC from '../../../HOCS/NotificationHOC'

import fabricStorage from '../../../helpers/fabricStorage'

import WooCommerceApi from '../../../services/WooCommerceService'

const Category = ({ products, categories, hits, pageCount, createNotification }) => {
    const router = useRouter()
    const { setToStorage } = fabricStorage(createNotification)

    const handleSetToStorage = (id) => {
        const product = products.filter((product) => product.id === id)[0]
        setToStorage({ ...product, count: product.count ? product.count + 1 : 1 })
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
            router.push(`/catalog/category/${router.query.id}?page=1`, undefined, { shallow: true })
        }
    }, [])

    return (
        <MainLayout>
            <CatalogLayout
                productCategories={categories}
                pageCount={pageCount}
                handlePageClick={handlePageClick}
                hits={hits}
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
    )
}

export async function getServerSideProps({ query, params }) {
    const page = query.page || 1

    const response = await WooCommerceApi.get(`products`, { category: params.id, page: page }).then(response => response).catch(err => err)
    const categories = await WooCommerceApi.get(`products/categories`).then(response => response.data).catch(err => err)
    const hits = await WooCommerceApi.get(`products`, { category: 28 }).then(response => response.data).catch(err => err)

    const { data, headers } = response

    if (!data && !categories && !hits && !headers) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            products: !isEmpty(data) ? data : [],
            pageCount: !isEmpty(headers) ? headers['x-wp-totalpages'] : 0,
            categories,
            hits
        }
    }
}

export default NotificationHOC(Category)
