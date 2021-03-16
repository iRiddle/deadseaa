import Link from 'next/link'
import Image from 'next/image'

import Button from '../../Button'

import classnames from '../Header.module.scss'

const HeaderRight = ({
    handleSearch,
    handleMouseEnterLogin,
    handleMouseLeaveLogin
}) => {
    return (
        <>
            {/* <div className={classnames['header__search']}>
                <input id='search-input' className={classnames['header__input']} type="search" />
                <label htmlFor="search-input">
                    <Image
                        src="/static/search.svg"
                        alt="Поиск"
                        width={18}
                        height={18}
                    />
                </label>
            </div> */}
            <Link href='/profile'>
                <a className={classnames['header__lk']}
                    onMouseEnter={handleMouseEnterLogin}
                    onMouseLeave={handleMouseLeaveLogin}
                >
                    <Image
                        src="/static/lk.svg"
                        alt="Личный кабинет"
                        width={18}
                        height={18}
                    />
                </a>
            </Link>
            <Link href='/basket'>
                <a className={classnames['header__basket']}>
                    <Image
                        src="/static/basket.svg"
                        alt="Корзина"
                        width={18}
                        height={18}
                    />
                </a>
            </Link>
            <Button
                className={classnames['header__search--mobile-btn']}
                text={
                    <Image
                        src="/static/search.svg"
                        alt="Поиск"
                        width={18}
                        height={18}
                    />
                }
                onClick={handleSearch}
                notContainer
            />
        </>
    )
}

export default HeaderRight
