import MainLayout from '../../layouts/MainLayout'
import CatalogLayout from '../../layouts/CatalogLayout'

import Product from '../../components/Product'

export default function Index(props) {
    console.log(props)
    return (
        <MainLayout>
            <CatalogLayout>
                {[1, 3, 4, 5, 6, 7].map(item =>
                    <Product />
                )}

            </CatalogLayout>
        </MainLayout>
    )
}

export async function getStaticProps() {
    const res = await fetch(`http://localhost:3000/getProducts`)
    console.log(res)

    // if (!data) {
    //     return {
    //         notFound: true,
    //     }
    // }

    return {
        props: {
            "data": 'sds'
        }
    }
}
