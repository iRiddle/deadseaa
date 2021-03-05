import { useState } from 'react'

import MainLayout from '../../layouts/MainLayout'
import PaymentProduct from '../../components/PaymentProduct'
import Button from '../../components/Button'

import { setDataToLocal, getDataFromLocal } from '../../storage'

import classnames from './Basket.module.scss'

const Basket = () => {
    const [products, setProducts] = useState(getDataFromLocal('phylosophyProducts') || []);

    const handleRemove = (id) => {
        const filteredProducts = products.filter(product => product.id !== id);
        setProducts(filteredProducts)
        setDataToLocal('phylosophyProducts', filteredProducts)
    }

    const handleIncrease = (id) => {
        const mappedProducts = products.map(product => product.id === id ? { ...product, count: product.count + 1 } : product)
        setProducts(mappedProducts)
        setDataToLocal('phylosophyProducts', mappedProducts)
    }

    const handleDecrease = (id) => {
        const mappedProducts = products.map(product => product.id === id ? { ...product, count: product.count - 1 } : product)
        setProducts(mappedProducts)
        setDataToLocal('phylosophyProducts', mappedProducts)
    }

    const getTotal = () => {
        return products.reduce((accum, product) => accum + (product.regular_price * product.count), 0)
    }

    if (!products.length) {
        return (
            <MainLayout className={classnames['main--basket']}>
                <h1>Корзина пуста</h1>
            </MainLayout>
        )
    }

    return (
        <MainLayout className={classnames['main--basket']} >
            <section className={classnames['basket']}>
                <h1>
                    Корзина
                </h1>
                <table className={classnames['basket__table']}>
                    <thead>
                        <tr>
                            <td className={classnames['basket__table-head']}></td>
                            <td className={classnames['basket__table-head']}>Название</td>
                            <td className={classnames['basket__table-head']}>Стоимость</td>
                            <td className={classnames['basket__table-head']}>Количество</td>
                            <td className={classnames['basket__table-head']}>Сумма</td>
                            <td />
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(({ id, title, regular_price, count }) =>
                            <PaymentProduct
                                key={id}
                                title={title}
                                regularPrice={regular_price}
                                count={count}
                                handleIncrease={() => handleIncrease(id)}
                                handleDecrease={() => handleDecrease(id)}
                                handleRemove={() => handleRemove(id)}
                            />
                        )}
                    </tbody>
                </table>
                <div className={classnames['basket__checkout']}>
                    <Button text='Перейти к оформлению' onClick={() => localStorage.removeItem('phylosophyProduct')} />
                    <span className={classnames['basket__checkout-text']} >{`Итого: ${getTotal()}руб`}</span>
                </div>
            </section>
        </MainLayout >
    )
}

export default Basket