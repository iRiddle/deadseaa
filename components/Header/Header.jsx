import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

import Logo from '../Logo'

import classnames from './Header.module.scss'

const Header = ({ headerIsSalad }) => (
    <header className={cn(classnames['header'], headerIsSalad && classnames['header--color-salad'])}>
        <div className={classnames['header__container']}>
            <div className={classnames['header__left-side']}>
                <Logo className={classnames['header__logo']} />
                <nav>
                    <ul className={classnames['header__list-links']}>
                        <li className={classnames['header__link']}>
                            <Link href="/">
                                <a>Главная</a>
                            </Link>
                        </li>
                        <li className={classnames['header__link']}>
                            <Link href="/catalog">
                                <a>Каталог</a>
                            </Link>
                        </li>
                        <li className={classnames['header__link']}>
                            <Link href="/blog">
                                <a>Блог</a>
                            </Link>
                        </li>
                        <li className={classnames['header__link']}>
                            <Link href="/production">
                                <a>Продукция</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className={classnames['header__right-side']}>
                <div className={classnames['header__search']}>
                    <input id='search-input' className={classnames['header__input']} type="search" />
                    <label htmlFor="search-input">
                        <Image
                            src="/static/search.svg"
                            alt="Поиск"
                            width={13}
                            height={13}
                        />
                    </label>
                </div>
                <Link href='/profile'>
                    <a className={classnames['header__lk']}>
                        <Image
                            src="/static/lk.svg"
                            alt="Личный кабинет"
                            width={13}
                            height={13}
                        />
                    </a>
                </Link>
                <Link href='/basket'>
                    <a className={classnames['header__basket']}>
                        <Image
                            src="/static/basket.svg"
                            alt="Корзина"
                            width={13}
                            height={13}
                        />
                    </a>
                </Link>
            </div>
        </div>
    </header>
)

export default Header
