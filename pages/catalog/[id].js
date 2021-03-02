import { useState } from 'react'

import Image from 'next/image'

import MainLayout from '../../layouts/MainLayout'
import CatalogLayout from '../../layouts/CatalogLayout'

import Button from '../../components/Button'

import NotificationHOC from '../../HOCS/NotificationHOC'

import {
    getDataFromLocal,
    setDataToLocal
} from '../../storage'

import classnames from './DetailedProduct.module.scss'

const DetailedProduct = ({ createNotification, product }) => {
    const [productDetailed, setDetailProduct] = useState({ ...product, count: 0 } || {})

    const handleIncrease = () => {
        setDetailProduct({ ...productDetailed, count: productDetailed.count + 1 })
    }

    const handleDecrease = () => {
        setDetailProduct({ ...productDetailed, count: productDetailed.count - 1 })
    }

    const getProductsFromStorage = () => {
        return getDataFromLocal('phylosophyProducts') || [];
    }

    const handleSetProduct = () => {
        const dataFromStorage = getProductsFromStorage()
        const mappedData = [...dataFromStorage, product]
        setDataToLocal('phylosophyProducts', mappedData)
        createNotification('ok', 'Товары успешно добавлены в корзину')
    }

    const { title, cost, count, description, regular_price } = productDetailed
    console.log(productDetailed)
    return (
        <MainLayout>
            <CatalogLayout>
                <section className={classnames['detailed-product']}>
                    <div className={classnames['detailed-product__top']}>
                        <div className={classnames['detailed-product__left']}>
                            <div className={classnames['detailed-product__main-img']}>
                                <Image
                                    width={250}
                                    height={300}
                                    src='/static/content/detailed.png'
                                />
                            </div>
                        </div>
                        <div className={classnames['detailed-product__right']}>
                            <h1>
                                {title}
                            </h1>
                            <span className={classnames['detailed-product__cost']}>
                                {`${regular_price}руб.`}
                            </span>
                            <div className={classnames['detailed-product__operations']}>
                                <div>
                                    <Button className={classnames['detailed-product__op-btn']} onClick={handleDecrease} text='-' disabled={count < 1} />
                                    <span className={classnames['detailed-product__total']}>{count}</span>
                                    <Button className={classnames['detailed-product__op-btn']} onClick={handleIncrease} text='+' />
                                </div>
                                <Button className={classnames['detailed-product__buy-btn']} onClick={handleSetProduct} text='Купить' disabled={count < 1} />
                            </div>
                            <h2 className={classnames['detailed-product__secondary']}>
                                Характеристики:
                            </h2>
                            <p className={classnames['detailed-product__description']} dangerouslySetInnerHTML={{ __html: description }} />
                        </div>
                    </div>
                    <div className={classnames['detailed-product__bottom']}>

                    </div>
                </section>
            </CatalogLayout>
        </MainLayout>
    )
}

export default NotificationHOC(DetailedProduct)

export async function getStaticProps({ params }) {
    const res = await fetch(`http://localhost:3000/getProducts/${params.id}`)
    const data = await res.json()

    if (!data) {
        return {
            notFound: true,
        }
    }

    const { product } = data

    return {
        props: {
            product
        }
    }
}

export async function getStaticPaths() {
    const res = await fetch(`http://localhost:3000/getProducts`);
    const data = await res.json();

    const { products } = data;

    const paths = products.map((product) => ({
        params: { id: product.id.toString() },
    }))

    return { paths, fallback: false }
}