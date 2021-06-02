import cn from 'classnames'
import isEmpty from 'lodash.isempty'

// import Button from '../Button'

import { contries } from '../../helpers/translator'

import classnames from './TableAddresses.module.scss'

const TableAddresses = ({ className, orders }) => {
    return (
        <table className={cn(classnames['table'], className)} border="0" cellSpacing="0" cellPadding="0">
            <thead>
                <tr>
                    <th>№ заказа</th>
                    <th>Адрес</th>
                    <th>Город</th>
                    <th>Субъект</th>
                    <th>Почтовый индекс</th>
                    {/* <th>Действия</th> */}
                </tr>
            </thead>
            <tbody>
                {!isEmpty(orders) && orders.map(item =>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.shipping.address_1}</td>
                        <td>{item.shipping.city}</td>
                        <td>{contries[item.shipping.country]}</td>
                        <td>{item.shipping.postcode}</td>
                        {/* <Button text='Действия' hasIcon></Button> */}
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default TableAddresses