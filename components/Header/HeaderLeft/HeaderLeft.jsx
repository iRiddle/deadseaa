import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Logo from '../../Logo'
import Button from '../../Button'
import AdaptiveNavigation from '../../AdaptiveNavigation'

import classnames from '../Header.module.scss'

const HeaderLeft = () => {
    const [mainVisible, setMainVisible] = useState(false);

    const handleMainVisible = () => {
        setMainVisible(!mainVisible);
    }

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
                className={`${classnames['header__burger']} 
                ${mainVisible && classnames['header__burger--mirrored']}`}
                notContainer
                onClick={handleMainVisible}
            />
            <AdaptiveNavigation show={mainVisible}/>
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