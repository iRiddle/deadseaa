import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

import classnames from '../Footer.module.scss'

const Contact = () => (
    <>
        <span className={classnames['footer__follow-legend']}>
            Следите за нами
        </span>
        <div className={classnames['footer__social']}>
            {/* <Link href="/">
                <a className={classnames['footer__social-link']}>
                    <Image
                        src="/static/vk.svg"
                        alt="Вконтакте"
                        width={15}
                        height={15}
                    />
                </a>
            </Link> */}
            {/* <Link href="/">
                <a className={classnames['footer__social-link']}>
                    <Image
                        src="/static/odn.svg"
                        alt="Одноклассники"
                        width={15}
                        height={15}
                    />
                </a>
            </Link> */}
            <Link href="https://www.instagram.com/philosophy.sea/">
                <a className={classnames['footer__social-link']} target="__blank">
                    <Image
                        src="/static/insta.svg"
                        alt="Инстаграм"
                        width={15}
                        height={15}
                    />
                </a>
            </Link>
            {/* <Link href="/">
                <a className={classnames['footer__social-link']}>
                    <Image
                        src="/static/facebook.svg"
                        alt="Фейсбук"
                        width={15}
                        height={15}
                    />
                </a>
            </Link> */}
        </div>
        <p>
            Консультант по подбору косметики <br /> работает с: Пн по Пт с 10:00 до 19:00 <br /> по Московскому времени
        </p>
        <div className={cn(classnames['footer__info'], classnames['footer__info--bold'])}>
            <Link href="tel:89183171300">
                <a className={classnames['footer__phone']}>
                    8 918 317 13 00
            </a>
            </Link>
        </div>
        <div className={cn(classnames['footer__info'], classnames['footer__info--bold'])}>
            <Link href="mailto:philosophysea@mail.ru">
                <a className={classnames['footer__email']}>
                    philosophysea@mail.ru
            </a>
            </Link>
        </div>
        <div className={classnames['footer__info']}>
            <p>
                Адрес  Краснодарский край <br />г Новороссийск, ул. Энгельса 93
            </p>
        </div>
    </>
)

export default Contact