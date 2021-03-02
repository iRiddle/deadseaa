import MainLayout from '../../layouts/MainLayout'
import CatalogLayout from '../../layouts/CatalogLayout'

import Product from '../../components/Product'

const Catalog = ({ data }) => {
    const { products } = data
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
                    />
                ) : 'Нет данных'}
            </CatalogLayout>
        </MainLayout>
    )
}

export default Catalog

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
