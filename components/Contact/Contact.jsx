import Link from 'next/link'

import classnames from './Contact.module.scss'

const Contact = () => {
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
                    <div className={classnames['contact__search']}>
                        <input className={classnames['contact__input']} type="text" placeholder='Введите что-то' />
                        <Link href="/more">
                            <a className={classnames['contact__more-btn']}>
                                Подробнее
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact