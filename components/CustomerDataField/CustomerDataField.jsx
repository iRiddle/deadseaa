import Link from 'next/link'

import Button from '../Button'
import OrderDataTable from '../OrderDataTable';
import classnames from './CustomerDataField.module.scss'

const CustomerDataField = ({
    orders,
    totalDelivery,
    isLoading,
    register,
    errors,
    handleSubmit,
    onSubmit
}) => (
        <form onSubmit={handleSubmit(onSubmit)} className={classnames['checkout']}>
            <div className={classnames['checkout__customer-data']}>
                <h1 className={classnames['checkout__header']}>
                    Оформление заказа
                </h1>
                <div className={classnames['checkout__form']}>
                    <h2 className={classnames['checkout__span']}>
                        Тип оплаты:
                    </h2>
                    <div className={classnames['checkout__radios']}>
                        <div className={classnames['checkout__radio-container']}>
                            <input
                                type="radio"
                                name='payment'
                                className={classnames['checkout__radio']}
                                placeholder="Введите полное имя"
                                checked
                                {...register('payment')}
                            />
                            <label htmlFor="onCard" className={classnames['checkout__label']}>
                                Оплата картой
                            </label>
                        </div>
                    </div>
                    <h2 className={classnames['checkout__span']}>
                        2. Введите контактные данные
                    </h2>
                    <label className={classnames['checkout__field']}>
                        Ваше ФИО
                        <input
                            type="text"
                            name='fullName'
                            className={classnames['checkout__input']}
                            placeholder="Введите полное имя"
                            {...register('fullName')}
                        />
                    </label>
                    {errors.fullName && <p className={classnames['checkout__error']}>{errors.fullName.message}</p>}
                    <label className={classnames['checkout__field']}>
                        Адрес
                        <input
                            type="text"
                            name='locality'
                            className={classnames['checkout__input']}
                            placeholder="Введите населенный пункт"
                            {...register('locality')}
                        />
                    </label>
                    {errors.locality && <p className={classnames['checkout__error']}>{errors.locality.message}</p>}
                    <label className={classnames['checkout__field']}>
                        Город
                        <input
                            type="text"
                            name='city'
                            className={classnames['checkout__input']}
                            placeholder="Введите город"
                            {...register('city')}
                        />
                    </label>
                    {errors.city && <p className={classnames['checkout__error']}>{errors.city.message}</p>}
                    <label className={classnames['checkout__field']}>
                        Субъект
                        <input
                            type="text"
                            name='state'
                            className={classnames['checkout__input']}
                            placeholder="Введите субъект федерации"
                            {...register('state')}
                        />
                    </label>
                    {errors.state && <p className={classnames['checkout__error']}>{errors.state.message}</p>}
                    <label className={classnames['checkout__field']}>
                        Почтовый индекс
                        <input
                            type="text"
                            name='postCode'
                            className={classnames['checkout__input']}
                            placeholder="Введите почтовый индекс"
                            {...register('postCode', { required: true, maxLength: 6, maxLength: 6 })}
                        />
                    </label>
                    {errors.postCode && <p className={classnames['checkout__error']}>{errors.postCode.message}</p>}
                    <label className={classnames['checkout__field']}>
                        Контактный телефон
                        <input
                            type="tel"
                            name='phone'
                            className={classnames['checkout__input']}
                            placeholder="Введите телефон"
                            {...register('phone')}
                        />
                    </label>
                    {errors.phone && <p className={classnames['checkout__error']}>{errors.phone.message}</p>}
                    <label className={classnames['checkout__field']}>
                        Контактный email
                        <input
                            type="email"
                            name='email'
                            className={classnames['checkout__input']}
                            placeholder="Введите email"
                            {...register('email')}
                        />
                    </label>
                    {errors.email && <p className={classnames['checkout__error']}>{errors.email.message}</p>}
                    <label className={classnames['checkout__field']}>
                        Примечания к заказу
                        <input
                            type='textarea'
                            name='notes'
                            className={classnames['checkout__input']}
                            placeholder="Введите примечания"
                            {...register('notes')}
                        />
                    </label>
                    {errors.notes && <p className={classnames['checkout__error']}>{errors.notes.message}</p>}
                </div>
            </div>
            <OrderDataTable orders={orders} totalDelivery={totalDelivery} />
            <div className={classnames['checkout__container']}>
                <Button
                    type="submit"
                    text="Оформить заказ"
                    isLoading={isLoading}
                    className={classnames['checkout__submit']}
                    disabled={totalDelivery === 0 || totalDelivery === undefined || totalDelivery === null}
                />
                <p className={classnames['checkout__agreement']}>
                    Нажимая кнопку “Оформить
                    заказ” вы даете согласие на использование ваших персональных данных для обработки
                    ваших заказов, упрощения вашей работы с сайтом и для других целей, описанных
                    в нашей
                    <Link href="/privacy-policy">
                        <a className={classnames['checkout__link']}>политике конфиденциальности</a>
                    </Link>
                </p>
            </div>
        </form>
    )

export default CustomerDataField;