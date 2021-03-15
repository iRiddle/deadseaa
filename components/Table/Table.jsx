import cn from 'classnames'

import Button from '../Button'

import classnames from './Table.module.scss'

const Table = ({ className }) => {
    return (
        <table className={cn(classnames['table'], className)} border="0" cellSpacing="0" cellPadding="0">
            <thead>
                <tr>
                    <th>№ заказа</th>
                    <th>Дата</th>
                    <th>Статус</th>
                    <th>Итого</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        15221
                    </td>
                    <td>
                        20.01.2020
                    </td>
                    <td>
                        Выполнен
                    </td>
                    <td>
                        900 руб.
                    </td>
                    <td>
                        <Button text='Открыть' hasIcon={true} />
                    </td>
                </tr>
                <tr>
                    <td>
                        15222
                    </td>
                    <td>
                        20.01.2020
                    </td>
                    <td>
                        Выполнен
                    </td>
                    <td>
                        900 руб.
                    </td>
                    <td>
                        <Button text='Открыть' hasIcon={true} />
                    </td>
                </tr>
                <tr>
                    <td>
                        15223
                    </td>
                    <td>
                        21.01.2020
                    </td>
                    <td>
                        Выполнен
                    </td>
                    <td>
                        900 руб.
                    </td>
                    <td>
                        <Button text='Открыть' hasIcon={true} />
                    </td>
                </tr>
                <tr>
                    <td>
                        15224
                    </td>
                    <td>
                        23.01.2020
                    </td>
                    <td>
                        Выполнен
                    </td>
                    <td>
                        900 руб.
                    </td>
                    <td>
                        <Button text='Открыть' hasIcon={true} />
                    </td>
                </tr>
                <tr>
                    <td>
                        15225
                    </td>
                    <td>
                        23.01.2020
                    </td>
                    <td>
                        Выполнен
                    </td>
                    <td>
                        900 руб.
                    </td>
                    <td>
                        <Button text='Открыть' hasIcon={true} />
                    </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table