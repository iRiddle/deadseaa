
import MainLayout from '../../../layouts/MainLayout'
import CatalogLayout from '../../../layouts/CatalogLayout'

import Product from '../../../components/Product'

import NotificationHOC from '../../../HOCS/NotificationHOC'

import fabricStorage from '../../../helpers/fabricStorage'

import WooCommerceApi from '../../../services/WooCommerceService'

const Category = ({ products, categories, hits, createNotification }) => {
    const { setToStorage } = fabricStorage(createNotification)

    const handleSetToStorage = (id) => {
        const product = products.filter((product) => product.id === id)[0]
        setToStorage({ ...product, count: product.count ? product.count + 1 : 1 })
    }

    return (
        <MainLayout>
            <CatalogLayout productCategories={categories} hits={hits}>
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

export async function getServerSideProps({ params }) {
    const products = await WooCommerceApi.get(`products`, { category: params.id }).then(response => response.data).catch(err => err)
    const categories = await WooCommerceApi.get(`products/categories`).then(response => response.data).catch(err => err)
    const hits = await WooCommerceApi.get(`products`, { category: 28 }).then(response => response.data).catch(err => err)

    if (!products && !categories && !hits) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            products,
            categories,
            hits
        }
    }
}

export default NotificationHOC(Category)
