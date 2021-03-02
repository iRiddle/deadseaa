import MainLayout from '../../layouts/MainLayout'
import CatalogLayout from '../../layouts/CatalogLayout'

import Product from '../../components/Product'

const Catalog = (props) => {
    const catalog = [
        { id: 1, name: 'Масло для тела для предотвращения старения с зеленым чаем и геранью', cost: 915 },
        { id: 2, name: 'Масло для тела для предотвращения старения с зеленым чаем и геранью', cost: 915 },
        { id: 3, name: 'Масло для тела для предотвращения старения с зеленым чаем и геранью', cost: 915 },
        { id: 4, name: 'Масло для тела для предотвращения старения с зеленым чаем и геранью', cost: 915 },
        { id: 5, name: 'Масло для тела для предотвращения старения с зеленым чаем и геранью', cost: 915 },
        { id: 6, name: 'Масло для тела для предотвращения старения с зеленым чаем и геранью', cost: 915 },
    ];
    return (
        <MainLayout>
            <CatalogLayout>
                {catalog.map(({ id, name, cost }) =>
                    <Product key={id} id={id} name={name} cost={cost} />
                )}
            </CatalogLayout>
        </MainLayout>
    )
}

export default Catalog

// export async function getStaticProps() {
//     const res = await fetch(`http://localhost:3000/getProducts`)
//     console.log(res)

//     // if (!data) {
//     //     return {
//     //         notFound: true,
//     //     }
//     // }

//     return {
//         props: {
//             "data": 'sds'
//         }
//     }
// }
