import Link from 'next/link'
import Image from 'next/image'

import Logo from '../../Logo'
import Button from '../../Button'

import classnames from '../Header.module.scss'

const HeaderLeft = () => {
    return (
        <>
            <Button
                text={
                    <Image
                        src="/static/burger.svg"
                        alt="Поиск"
                        width={18}
                        height={18}
                    />
                }
                className={classnames['header__burger']}
                notContainer
            />
            <Logo className={classnames['header__logo']} />
            <nav className={classnames['header__navigation']}>
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
        </>
    )
}

export default HeaderLeft