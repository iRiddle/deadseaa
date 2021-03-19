
import { getDataFromLocal } from '../../storage'
import classnames from './OrderDataTable.module.scss'

const OrderDataTable = () => {
    console.log(getDataFromLocal('phylosophyProducts'))

    const orders = getDataFromLocal('phylosophyProducts');

    const totalPrice = orders && orders.reduce((accumulator, currentValue) => {
        return accumulator + (Number(currentValue.price) * currentValue.count)
    }, 0)

    const orderArray = orders && orders.map((elem, i) => {
        return (
            <tr className={(i !== 0 && i % 2 !== 0) && classnames['order__tr--white']} key={elem.id}>
                <td className={classnames['order__td']}>
                    {elem.name} <span className={classnames['order__count']}>{elem.count}шт.</span>
                </td>
                <td className={classnames['order__price']}>{elem.price * elem.count} руб</td>
            </tr>
        )
    })

    const ordersLength = orders && orders.length

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
                        <tr className={ordersLength % 2 === 0 && classnames['order__tr--white']}>
                            <td className={classnames['order__subtotal-str']}>Подытог:</td>
                            <td className={classnames['order__price']}>{totalPrice} руб</td>
                        </tr>
                        <tr className={ordersLength % 2 !== 0 && classnames['order__tr--white']}>
                            <td className={classnames['order__subtotal-str']}>Итого:</td>
                            <td className={classnames['order__price']}>{totalPrice} руб</td>
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