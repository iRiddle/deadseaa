
import MainLayout from '../../../layouts/MainLayout'
import CatalogLayout from '../../../layouts/CatalogLayout'

import Product from '../../../components/Product'

import NotificationHOC from '../../../HOCS/NotificationHOC'

import fabricStorage from '../../../helpers/fabricStorage'

import WooCommerceApi from '../../../services/WooCommerceService'

const Category = ({ products, categories, createNotification }) => {
    const { setToStorage } = fabricStorage(createNotification)

    const handleSetToStorage = (id) => {
        const product = products.filter((product) => product.id === id)[0]
        setToStorage({ ...product, count: product.count ? product.count + 1 : 1 })
    }

    return (
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
    )
}

export async function getServerSideProps({ params }) {
    const products = await WooCommerceApi.get(`products`, { category: params.id }).then(response => response.data).catch(err => err)
    const categories = await WooCommerceApi.get(`products/categories`).then(response => response.data).catch(err => err)
    console.log('safkasjf')
    console.log('fasjfajsf')
    if (!products) {
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

// export async function getStaticPaths() {
//     const categories = await WooCommerceApi.get(`products/categories`).then(response => response.data).catch(err => err)

//     const paths = categories.map((category) => ({
//         params: { id: category.id.toString() },
//     }))

//     return { paths, fallback: false }
// }

export default NotificationHOC(Category)
