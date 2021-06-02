
import cn from 'classnames'
import isEmpty from 'lodash.isempty'

import classnames from './OrderDataTable.module.scss'

const OrderDataTable = ({ orders, totalDelivery }) => {
    const totalPrice = !isEmpty(orders) && orders.reduce((accumulator, currentValue) => {
        return accumulator + (Number(currentValue.price) * currentValue.count)
    }, 0)

    const orderArray = orders && orders.map((elem, i) => {
        return (
            <tr className={cn(i % 2 === 0 && classnames['order__tr--white'])} key={elem.id}>
                <td className={classnames['order__td']}>
                    {elem.name} <span className={classnames['order__count']}>{elem.count}шт.</span>
                </td>
                <td className={classnames['order__price']}>{elem.price * elem.count} руб</td>
            </tr>
        )
    })

    const ordersLength = !isEmpty(orders) && orders.length
    return (
        <div className={classnames['order']}>
            <h1 className={classnames['order__header']}>Ваш заказ</h1>
            <div className={classnames['order__table-container']}>
                <table className={classnames['order__table']}>
                    <thead className={classnames['order__table-head']}>
                        <tr>
                            <th className={classnames['order__column-left']} scope="col">Товар</th>
                            <th className={classnames['order__column-right']} scope="col">Подытог</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr className={cn(ordersLength % 2 === 0 && classnames['order__tr--white'])}>
                            <td className={classnames['order__subtotal-str']}>Подытог:</td>
                            <td className={classnames['order__price']}>{`${totalPrice} руб.`}</td>
                        </tr>
                        {totalDelivery !== 0 && totalDelivery !== undefined && totalDelivery !== null && (
                            <tr>
                                <td className={classnames['order__subtotal-str']}>Стоимость доставки:</td>
                                <td className={classnames['order__price']}>{`${totalDelivery} руб.`}</td>
                            </tr>
                        )}
                        <tr className={cn(ordersLength % 2 !== 0 && classnames['order__tr--white'])}>
                            <td className={classnames['order__subtotal-str']}>Итого:</td>
                            <td className={classnames['order__price']}>{`${totalPrice} руб.`}</td>
                        </tr>
                    </tfoot>
                    <tbody>
                        {orderArray}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default OrderDataTable;