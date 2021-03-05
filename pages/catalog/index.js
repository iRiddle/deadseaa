import MainLayout from '../../layouts/MainLayout'
import CatalogLayout from '../../layouts/CatalogLayout'

import Product from '../../components/Product'

import NotificationHOC from '../../HOCS/NotificationHOC'

import { useSetToStorage } from './hooks/useSetToStorage'

const Catalog = ({ data, createNotification }) => {
    const { products } = data
    const { setToStorage } = useSetToStorage(createNotification)

    const handleSetToStorage = (id) => {
        const product = products.filter((product) => product.id === id)[0]
        setToStorage({ ...product, count: product.count ? product.count + 1 : 1 })
    }

    return (
        <MainLayout>
            <CatalogLayout>
                {products.length ? products.map(({ id, title, featured_src, regular_price }) =>
                    <Product
                        key={id}
                        id={id}
                        title={title}
                        featuredSrc={featured_src}
                        regularPrice={regular_price}
                        handleSetToStorage={handleSetToStorage}
                    />
                ) : 'Нет данных'}
            </CatalogLayout>
        </MainLayout>
    )
}

export async function getStaticProps() {
    const res = await fetch(`http://localhost:3000/getProducts`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            data
        }
    }
}

export default NotificationHOC(Catalog)
