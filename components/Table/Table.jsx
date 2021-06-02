import cn from 'classnames'
import isEmpty from 'lodash.isempty'
import { format } from "date-fns";

// import Button from '../Button'

import { statuses } from '../../helpers/translator'

import classnames from './Table.module.scss'

const Table = ({ className, orders }) => {
    return (
        <table className={cn(classnames['table'], className)} border="0" cellSpacing="0" cellPadding="0">
            <thead>
                <tr>
                    <th>№ заказа</th>
                    <th>Дата</th>
                    <th>Статус</th>
                    <th>Итого</th>
                    {/* <th>Действия</th> */}
                </tr>
            </thead>
            <tbody>
                {!isEmpty(orders) && orders.map(item =>
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{format(new Date(item.date_created), "dd.MM.yyyy")}</td>
                        <td>{item.status === 'on-hold' ? statuses[item.status] : 'В обработке'}</td>
                        <td>{`${item.total} руб.`}</td>
                        {/* <Button text='Действия' hasIcon></Button> */}
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Table