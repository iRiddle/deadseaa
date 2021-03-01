import { useState } from 'react'
import Image from 'next/image'
import cn from 'classnames'

import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

import classnames from './Header.module.scss'

const Header = ({ headerIsSalad }) => {
    const [search, setSearch] = useState(false)

    const handleSearch = () => {
        setSearch(!search)
    }

    return (
        <header className={cn(classnames['header'], headerIsSalad && classnames['header--color-salad'])}>
            <div className={classnames['header__container']}>
                <div className={classnames['header__top']}>
                    <div className={classnames['header__left-side']}>
                        <HeaderLeft />
                    </div>
                    <div className={classnames['header__right-side']}>
                        <HeaderRight handleSearch={handleSearch} />
                    </div>
                </div>
                {search && (
                    <div className={classnames['header__bottom']}>
                        <div className={classnames['header__search--mobile']}>
                            <input id='search-input' className={classnames['header__input']} type="search" />
                            <label htmlFor="search-input">
                                <Image
                                    src="/static/search.svg"
                                    alt="Поиск"
                                    width={18}
                                    height={18}
                                />
                            </label>
                        </div>
                    </div>
                )}
            </div>
        </header>
    )
}

export default Header
