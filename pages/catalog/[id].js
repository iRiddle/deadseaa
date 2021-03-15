import { useState } from 'react'

import Image from 'next/image'

import MainLayout from '../../layouts/MainLayout'
import CatalogLayout from '../../layouts/CatalogLayout'

import Button from '../../components/Button'

import NotificationHOC from '../../HOCS/NotificationHOC'

import { useSetToStorage } from './hooks/useSetToStorage'

import WooCommerceApi from '../../services/WooCommerceService'

import classnames from './DetailedProduct.module.scss'

const DetailedProduct = ({ createNotification, product, categories }) => {
    const [productDetailed, setDetailProduct] = useState({ ...product, count: 0 } || {})
    const { setToStorage } = useSetToStorage(createNotification)

    const handleIncrease = () => {
        setDetailProduct({ ...productDetailed, count: productDetailed.count + 1 })
    }

    const handleDecrease = () => {
        setDetailProduct({ ...productDetailed, count: productDetailed.count - 1 })
    }

    const handleSetToStorage = () => {
        setToStorage(productDetailed)
    }

    const { name, count, description, regular_price } = productDetailed
    return (
        <MainLayout>
            <CatalogLayout productCategories={categories}>
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
                                {name}
                            </h1>
                            <span className={classnames['detailed-product__cost']}>
                                {regular_price ? `${regular_price}руб.` : 'Нет цены'}
                            </span>
                            <div className={classnames['detailed-product__operations']}>
                                <div>
                                    <Button className={classnames['detailed-product__op-btn']} onClick={handleDecrease} text='-' disabled={count < 1} />
                                    <span className={classnames['detailed-product__total']}>{count}</span>
                                    <Button className={classnames['detailed-product__op-btn']} onClick={handleIncrease} text='+' disabled={!regular_price && regular_price !== 0} />
                                </div>
                                <Button className={classnames['detailed-product__buy-btn']} onClick={handleSetToStorage} text='Купить' disabled={count < 1} />
                            </div>
                            <h2 className={classnames['detailed-product__secondary']}>
                                Характеристики:
                            </h2>
                            <p className={classnames['detailed-product__description']} dangerouslySetInnerHTML={{ __html: description ? description : '<h3>Нет описания</h3>' }} />
                        </div>
                    </div>
                    <div className={classnames['detailed-product__bottom']}>

                    </div>
                </section>
            </CatalogLayout>
        </MainLayout>
    )
}

export async function getStaticProps({ params }) {
    const product = await WooCommerceApi.get(`products/${params.id}`).then(response => response.data).catch(err => err)
    const categories = await WooCommerceApi.get(`products/categories`).then(response => response.data).catch(err => err)

    if (!product) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            product,
            categories
        }
    }
}

export async function getStaticPaths() {
    const products = await WooCommerceApi.get('products').then(response => response.data).catch(err => err)

    const paths = products.map((product) => ({
        params: { id: product.id.toString() },
    }))

    return { paths, fallback: false }
}

export default NotificationHOC(DetailedProduct)
