import Link from 'next/link'
import Image from 'next/image'

import classnames from '../Footer.module.scss'

const Contact = () => (
    <>
        <span className={classnames['footer__follow-legend']}>
            Следите за нами
        </span>
        <div className={classnames['footer__social']}>
            <Link href="/">
                <a className={classnames['footer__social-link']}>
                    <Image
                        src="/static/vk.svg"
                        alt="Вконтакте"
                        width={15}
                        height={15}
                    />
                </a>
            </Link>
            <Link href="/">
                <a className={classnames['footer__social-link']}>
                    <Image
                        src="/static/odn.svg"
                        alt="Одноклассники"
                        width={15}
                        height={15}
                    />
                </a>
            </Link>
            <Link href="/">
                <a className={classnames['footer__social-link']}>
                    <Image
                        src="/static/insta.svg"
                        alt="Инстаграм"
                        width={15}
                        height={15}
                    />
                </a>
            </Link>
            <Link href="/">
                <a className={classnames['footer__social-link']}>
                    <Image
                        src="/static/facebook.svg"
                        alt="Фейсбук"
                        width={15}
                        height={15}
                    />
                </a>
            </Link>
        </div>
        <p>
            Консультант по подбору косметики <br /> работает с: Пн по Пт с 10:00 до 19:00 <br /> по Московскому времени
        </p>
        <Link href="tel:88000000000">
            <a className={classnames['footer__phone']}>
                8 800 000 00 00
            </a>
        </Link>
    </>
)

export default Contact