import { useState } from 'react'

import Image from 'next/image'

import MainLayout from '../../layouts/MainLayout'
import CatalogLayout from '../../layouts/CatalogLayout'

import Button from '../../components/Button'

import {
    getDataFromLocal,
    setDataToLocal
} from '../../storage'

import classnames from './DetailedProduct.module.scss'

const DetailedProduct = () => {
    const [product, setDetailProduct] = useState({ id: 653, name: ' Масло для тела для предотвращения старения с зеленым чаем и геранью', count: 0, cost: 915 })

    const handleIncrease = () => {
        setDetailProduct({ ...product, count: product.count + 1 })
    }

    const handleDecrease = () => {
        setDetailProduct({ ...product, count: product.count - 1 })
    }

    const getProductsFromStorage = () => {
        return getDataFromLocal('phylosophyProducts') || [];
    }

    const handleSetProduct = () => {
        const dataFromStorage = getProductsFromStorage()
        const mappedData = [...dataFromStorage, product]
        setDataToLocal('phylosophyProducts', mappedData)
    }

    const { name, cost, count } = product

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
                                {name}
                            </h1>
                            <span className={classnames['detailed-product__cost']}>
                                {`${cost}руб.`}
                            </span>
                            <div className={classnames['detailed-product__operations']}>
                                <div>
                                    <Button className={classnames['detailed-product__op-btn']} onClick={handleDecrease} text='-' disabled={count < 1} />
                                    <span className={classnames['detailed-product__total']}>{count}</span>
                                    <Button className={classnames['detailed-product__op-btn']} onClick={handleIncrease} text='+' />
                                </div>
                                <Button className={classnames['detailed-product__buy-btn']} onClick={handleSetProduct} text='Купить' />
                            </div>
                            <h2 className={classnames['detailed-product__secondary']}>
                                Характеристики:
                            </h2>
                            <p className={classnames['detailed-product__description']}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis tempus sem lacinia venenatis. Viverra nec volutpat ultricies in consequat non porttitor sit. Nunc amet scelerisque justo, id quam scelerisque. Fermentum morbi odio lorem non vitae nisl blandit.
                            </p>
                        </div>
                    </div>
                    <div className={classnames['detailed-product__bottom']}>

                    </div>
                </section>
            </CatalogLayout>
        </MainLayout>
    )
}

export default DetailedProduct
