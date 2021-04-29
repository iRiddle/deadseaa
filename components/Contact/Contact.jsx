import Button from '../Button'
import classnames from './Contact.module.scss'

const Contact = ({ email, loadingEmail, handleEmail, sendEmail }) => {
    return (
        <div className={classnames['contact']}>
            <div className={classnames['contact__form']}>
                <div className={classnames['contact__form-container']}>
                    <h2 className={classnames['contact__heading']}>
                        Для заказа свяжитесь с нами
                    </h2>
                    <p className={classnames['contact__description']}>
                        На протяжении многих лет Израиль является лидером в области <br /> передовых биотехнологий и производства натуральной <br /> косметики.
                    </p>

                    <form className={classnames["contact-form"]} onSubmit={sendEmail}>
                        <input className={classnames["contact-form__email"]} type="text" value={email} onChange={handleEmail} name="user_email" placeholder="Введите email" />
                        <Button className={classnames["contact-form__field"]} isLoading={loadingEmail} type="submit" text="Подробнее" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact