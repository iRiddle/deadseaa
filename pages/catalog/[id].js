import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import isEmpty from 'lodash.isempty'

import MainLayout from '../../layouts/MainLayout'
import CatalogLayout from '../../layouts/CatalogLayout'
import Button from '../../components/Button'
import Product from '../../components/Product'
import NotificationHOC from '../../HOCS/NotificationHOC'
import fabricStorage from '../../helpers/fabricStorage'
import WooCommerceApi from '../../services/WooCommerceService'
import { IMAGE_PLACEHOLDER } from '../../constants'

import classnames from './DetailedProduct.module.scss'

const DetailedProduct = ({ product, categories, extraProducts, hits, pageCount, isError, createNotification }) => {
    const [productDetailed, setDetailProduct] = useState({ ...product, count: 0 } || {})
    const router = useRouter()

    const { setToStorage } = fabricStorage(createNotification)

    const handleIncrease = () => {
        setDetailProduct({ ...productDetailed, count: productDetailed.count + 1 })
    }

    const handleDecrease = () => {
        setDetailProduct({ ...productDetailed, count: productDetailed.count - 1 })
    }

    const handleSetToStorage = () => {
        setToStorage(productDetailed)
    }

    const handleExtraSetToStorage = (id) => {
        const product = extraProducts.filter((product) => product.id === id)[0];

        if (product.regular_price && product.regular_price !== 0) {
            setToStorage({ ...product, count: product.count ? product.count + 1 : 1 })
        }
    }

    const handlePageClick = (page) => {
        const currentPath = router.pathname;
        const currentQuery = { ...router.query };
        currentQuery.page = page.selected + 1;

        router.push({
            pathname: currentPath,
            query: currentQuery,
        });
    }

    useEffect(() => {
        if (isEmpty(router.query) || isEmpty(router.query.page) || router.query.page < 1) {
            router.push(`/catalog/${productDetailed.id}?page=1`, undefined, { shallow: true })
        }
    }, [])

    const { id, name, count, description, regular_price, images } = productDetailed

    if (isError) {
        return (
            <MainLayout>
                <CatalogLayout>
                    <div className={classnames['detailed-product--not-found']}>
                        <h1>Не найдено</h1>
                        <Link href="/catalog?page=1">
                            <a>В каталог</a>
                        </Link>
                    </div>
                </CatalogLayout>
            </MainLayout >
        )
    }

    return (
        <MainLayout>
            <CatalogLayout
                productCategories={categories}
                hits={hits}
                pageCount={pageCount}
                handlePageClick={handlePageClick}
            >
                <section className={classnames['detailed-product']}>
                    <div className={classnames['detailed-product__top']}>
                        <div className={classnames['detailed-product__left']}>
                            <div className={classnames['detailed-product__main-img']}>
                                <Image
                                    width={300}
                                    height={300}
                                    src={isEmpty(images) ? IMAGE_PLACEHOLDER : images[0].src}
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
                            <p className={classnames['detailed-product__description']} dangerouslySetInnerHTML={{ __html: description ? `${description}` : '<h3>Нет описания</h3>' }} />
                        </div>
                    </div>
                    <div className={classnames['detailed-product__bottom']}>
                        <h2>Возможно вам будет интересно</h2>
                        <div className={classnames['detailed-product__extra-container']}>
                            {extraProducts.length ? extraProducts.filter(elem => elem.id !== id).map(({ id, name, images, regular_price }) =>
                                <Product
                                    key={id}
                                    id={id}
                                    name={name}
                                    images={images}
                                    regularPrice={regular_price}
                                    handleSetToStorage={handleExtraSetToStorage}
                                />
                            ) : 'Нет данных'}
                        </div>
                    </div>
                </section>
            </CatalogLayout>
        </MainLayout>
    )
}

export async function getServerSideProps({ query, params }) {
    try {
        const page = query.page || 1
        const product = await WooCommerceApi.get(`products/${params.id}`).then(response => response.data).catch(err => err)
        const categories = await WooCommerceApi.get(`products/categories`).then(response => response.data).catch(err => err)
        const hits = await WooCommerceApi.get(`products`, { category: 28 }).then(response => response.data).catch(err => err)

        const extraProductsIds = product.categories.map(item => item.id).join(',')

        const extraProducts = await WooCommerceApi.get('products', { category: extraProductsIds, page: page }).then(response => response).catch(err => err)

        const { data, headers } = extraProducts

        if (!product && !categories && !hits && !data && !headers) {
            return {
                notFound: true,
            }
        }

        return {
            props: {
                product,
                categories,
                extraProducts: !isEmpty(data) ? data : [],
                pageCount: !isEmpty(headers) ? headers['x-wp-totalpages'] : 0,
                hits
            }
        }
    } catch {
        return {
            props: {
                isError: true
            }
        }
    }
}

export default NotificationHOC(DetailedProduct)
