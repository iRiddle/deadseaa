import Link from 'next/link'

import OrderDataTable from '../OrderDataTable';
import classnames from './CustomerDataField.module.scss'

const CustomerDataField = () => {
    return (
        <div className={classnames['checkout']}>
            <div className={classnames['checkout__customer-data']}>
                <h1 className={classnames['checkout__header']}>Оформление заказа</h1>
                <form className={classnames['checkout__form']}>
                    <span className={classnames['checkout__span']}>1. Выберите тип оплаты:</span>
                    <div className={classnames['checkout__radios']}>
                        <div className={classnames['checkout__radio-container']}>
                        <input type="radio" name="payment" id="onDelivery"
                        className={classnames['checkout__radio']} />
                        <label htmlFor="onDelivery" className={classnames['checkout__label']}>
                        Оплата при доставке</label>
                        </div>
                        <div className={classnames['checkout__radio-container']}>
                        <input type="radio" name="payment" id="onAccount"
                        className={classnames['checkout__radio']} />
                        <label htmlFor="onAccount" className={classnames['checkout__label']}>
                        Оплата по счету</label>
                        </div>
                        <div className={classnames['checkout__radio-container']}>
                        <input type="radio" name="payment" id="onCard"
                        className={classnames['checkout__radio']} /> 
                        <label htmlFor="onCard" className={classnames['checkout__label']}>
                        Оплата картой</label>
                        </div>
                    </div>
                    <span className={classnames['checkout__span']}>2. Введите контактные данные</span>
                    <span className={classnames['checkout__user-data']}>Ваше ФИО</span>
                    <input type="text" className={classnames['checkout__field']} />
                    <span className={classnames['checkout__user-data']}>Населенный пункт</span>
                    <input type="text" className={classnames['checkout__field']} />
                    <span className={classnames['checkout__user-data']}>Контактный телефон</span>
                    <input type="tel" className={classnames['checkout__field']} />
                    <span className={classnames['checkout__user-data']}>Контактный email</span>
                    <input type="email" className={classnames['checkout__field']} />
                    <span className={classnames['checkout__comment']}>Примечания к заказу</span>
                    <textarea className={classnames['checkout__comment-field']}></textarea>
                </form>
            </div>
           <OrderDataTable />
            <div className={classnames['checkout__container']}>
                <input type="submit" value="ОФОРМИТЬ ЗАКАЗ" 
                className={classnames['checkout__submit']} />
                <p className={classnames['checkout__agreement']}>Нажимая кнопку “Оформить 
                заказ” вы даете согласие на использование ваших персональных данных для обработки 
                ваших заказов, упрощения вашей работы с сайтом и для других целей, описанных 
                в нашей <Link href="/checkout"><a className={classnames['checkout__link']}>
                политике конфиденциальности</a></Link></p>
            </div>
        </div>
    )
}

export default CustomerDataField;