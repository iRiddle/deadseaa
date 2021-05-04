import Link from 'next/link'

import Button from '../Button'
import OrderDataTable from '../OrderDataTable';
import classnames from './CustomerDataField.module.scss'

const CustomerDataField = ({
    fullName,
    locality,
    city,
    postCode,
    state,
    phone,
    email,
    notes,
    orders,
    isLoading,
    someEmpty,
    handleData,
    checkout
}) => {
    return (
        <div className={classnames['checkout']}>
            <div className={classnames['checkout__customer-data']}>
                <h1 className={classnames['checkout__header']}>
                    Оформление заказа
                </h1>
                <form className={classnames['checkout__form']}>
                    <h2 className={classnames['checkout__span']}>
                        1. Выберите тип оплаты:
                    </h2>
                    <div className={classnames['checkout__radios']}>
                        <div className={classnames['checkout__radio-container']}>
                            <input className={classnames['checkout__radio']} type="radio" name="payment" id="onDelivery" checked readOnly />
                            <label className={classnames['checkout__label']} htmlFor="onDelivery">
                                Оплата при доставке
                            </label>
                        </div>
                        {/* <div className={classnames['checkout__radio-container']}>
                            <input type="radio" name="payment" id="onAccount" disabled className={classnames['checkout__radio']} />
                            <label htmlFor="onAccount" className={classnames['checkout__label']}>
                                Оплата по счету
                            </label>
                        </div>
                        <div className={classnames['checkout__radio-container']}>
                            <input type="radio" name="payment" id="onCard" disabled
                                className={classnames['checkout__radio']} />
                            <label htmlFor="onCard" className={classnames['checkout__label']}>
                                Оплата картой
                            </label>
                        </div> */}
                    </div>
                    <h2 className={classnames['checkout__span']}>
                        2. Введите контактные данные
                    </h2>
                    <label className={classnames['checkout__field']}>
                        Ваше ФИО
                        <input
                            type="text"
                            className={classnames['checkout__input']}
                            value={fullName}
                            onChange={(e) => handleData(e, 'fullName')}
                            placeholder="Введите полное имя"
                        />
                    </label>
                    <label className={classnames['checkout__field']}>
                        Адрес
                        <input
                            type="text"
                            className={classnames['checkout__input']}
                            value={locality}
                            onChange={(e) => handleData(e, 'locality')}
                            placeholder="Введите населенный пункт"
                        />
                    </label>
                    <label className={classnames['checkout__field']}>
                        Город
                        <input
                            type="text"
                            className={classnames['checkout__input']}
                            value={city}
                            onChange={(e) => handleData(e, 'city')}
                            placeholder="Введите город"
                        />
                    </label>
                    <label className={classnames['checkout__field']}>
                        Субъект
                        <input
                            type="text"
                            className={classnames['checkout__input']}
                            value={state}
                            onChange={(e) => handleData(e, 'state')}
                            placeholder="Введите субъект федерации"
                        />
                    </label>
                    <label className={classnames['checkout__field']}>
                        Почтовый индекс
                        <input
                            type="text"
                            className={classnames['checkout__input']}
                            value={postCode}
                            onChange={(e) => handleData(e, 'postCode')}
                            placeholder="Введите почтовый индекс"
                        />
                    </label>
                    <label className={classnames['checkout__field']}>
                        Контактный телефон
                        <input
                            type="tel"
                            className={classnames['checkout__input']}
                            value={phone}
                            onChange={(e) => handleData(e, 'phone')}
                            placeholder="Введите телефон"
                        />
                    </label>
                    <label className={classnames['checkout__field']}>
                        Контактный email
                        <input
                            type="email"
                            className={classnames['checkout__input']}
                            value={email}
                            onChange={(e) => handleData(e, 'email')}
                            placeholder="Введтие email"
                        />
                    </label>
                    <label className={classnames['checkout__field']}>
                        Примечания к заказу
                        <textarea
                            className={classnames['checkout__input']}
                            value={notes}
                            onChange={(e) => handleData(e, 'notes')}
                            placeholder="Введите примечания">
                        </textarea>
                    </label>
                </form>
            </div>
            <OrderDataTable orders={orders} />
            <div className={classnames['checkout__container']}>
                <Button type="submit" type='submit' onClick={checkout} text="Оформить заказ"
                    isLoading={isLoading} className={classnames['checkout__submit']} disabled={someEmpty} />
                <p className={classnames['checkout__agreement']}>
                    Нажимая кнопку “Оформить
                    заказ” вы даете согласие на использование ваших персональных данных для обработки
                    ваших заказов, упрощения вашей работы с сайтом и для других целей, описанных
                    в нашей
                <Link href="/privacy-policy">
                        <a className={classnames['checkout__link']}>
                            политике конфиденциальности
                        </a>
                    </Link>
                </p>
            </div>
        </div>
    )
}

export default CustomerDataField;