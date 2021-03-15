
import MainLayout from '../../../layouts/MainLayout'
import CatalogLayout from '../../../layouts/CatalogLayout'

import Product from '../../../components/Product'

import NotificationHOC from '../../../HOCS/NotificationHOC'

import { useSetToStorage } from '../hooks/useSetToStorage'

import { getEnvironment } from '../../../config'

const Category = ({ products, categories, createNotification }) => {
    const { setToStorage } = useSetToStorage(createNotification)

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

export async function getStaticProps({ params }) {
    const environment = getEnvironment()
    const products = await fetch(`${environment}/getProductsByCategory/${params.id}`).then((res) => res.json())
    const categories = await fetch(`${environment}/getCategories`).then((res) => res.json())

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

export async function getStaticPaths() {
    const environment = getEnvironment()
    const categories = await fetch(`${environment}/getCategories`).then((res) => res.json())

    const paths = categories.map((category) => ({
        params: { id: category.id.toString() },
    }))

    return { paths, fallback: false }
}

export default NotificationHOC(Category)
