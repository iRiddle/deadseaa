import MainLayout from '../../layouts/MainLayout'
import classnames from './Checkout.module.scss'

const Checkout = () => {
	return (
		<MainLayout className={classnames['main--checkout']}>
			<div className={classnames['checkout']}>
				<div className={classnames['checkout__customer-data']}>
					<h1 className={classnames['checkout__header']}>Оформление заказа</h1>
					<form className={classnames['checkout__form']}>
						<span className={classnames['checkout__span']}>1. Выберите тип оплаты:</span>
						<div className={classnames['checkout__radios']}>
							<input type="radio" name="payment" id="onDelivery"
							className={classnames['checkout__radio']} />
							<label htmlFor="onDelivery" className={classnames['checkout__label']}>
							Оплата при доставке</label>
							<input type="radio" name="payment" id="onAccount"
							className={classnames['checkout__radio']} />
							<label htmlFor="onAccount" className={classnames['checkout__label']}>
							Оплата по счету</label>
							<input type="radio" name="payment" id="onCard"
							className={classnames['checkout__radio']} /> 
							<label htmlFor="onCard" className={classnames['checkout__label']}>
							Оплата картой</label>
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
				<div className={classnames['checkout__order']}>
					<h1 className={classnames['checkout__header']}>Ваш заказ</h1>
					<div className={classnames['checkout__table-container']}>
					<table className={classnames['checkout__table']}>
						<thead className={classnames['checkout__table-head']}>
							<tr>
								<th className={classnames['checkout__column-left']} scope="col">Товар</th>
								<th className={classnames['checkout__column-right']} scope="col">Подытог</th>
							</tr>
						</thead>
						<tbody>
							<tr className={classnames['checkout__subtotal']}>
								<td className={classnames['checkout__subtotal-str']}>Подытог:</td>
								<td className={classnames['checkout__price']}>238 руб</td>
							</tr>
							<tr className={classnames['checkout__total']}>
								<td className={classnames['checkout__subtotal-str']}>Итого:</td>
								<td className={classnames['checkout__price']}>1448 руб</td>
							</tr>
						</tbody>
					</table>
					</div>
				</div>
				<div className={classnames['checkout__container']}>
					<input type="submit" value="ОФОРМИТЬ ЗАКАЗ" 
					className={classnames['checkout__submit']} />
					<p className={classnames['checkout__agreement']}>Нажимая кнопку “Оформить 
					заказ” вы даете согласие на использование ваших персональных данных для обработки 
					ваших заказов, упрощения вашей работы с сайтом и для других целей, описанных 
					в нашей <a href="" className={classnames['checkout__link']}>политике конфиденциальности</a></p>
				</div>
			</div>
		</MainLayout>
	)
}

export default Checkout