import Link from 'next/link'
import Image from 'next/image'

import MainLayout from '../../layouts/MainLayout'
import CatalogLayout from '../../layouts/CatalogLayout'

import Button from '../../components/Button'

import classnames from './DetailedProduct.module.scss'

const DetailedProduct = () => {
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
                                Масло для тела для предотвращения старения с зеленым чаем и геранью
                            </h1>
                            <span className={classnames['detailed-product__cost']}>
                                915 руб.
                            </span>
                            <div className={classnames['detailed-product__operations']}>
                                <div>
                                    <Button className={classnames['detailed-product__op-btn']} text='-' />
                                    <span className={classnames['detailed-product__total']}>0</span>
                                    <Button className={classnames['detailed-product__op-btn']} text='+' />
                                </div>
                                <Button className={classnames['detailed-product__buy-btn']} text='Купить' />
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
