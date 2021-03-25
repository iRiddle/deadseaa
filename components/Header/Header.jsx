import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import cn from 'classnames'

import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

import Login from '../Login'
import Lk from '../Lk'

import { getDataFromLocal, setDataToLocal } from '../../storage'
import { WordPressCustomApi } from '../../services/WordPressService'

import classnames from './Header.module.scss'

const Header = ({ headerIsSalad, isLoadingUser, user }) => {
    const [search, setSearch] = useState(false)
    const [hovered, setHover] = useState(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setLoading] = useState(false)
    const router = useRouter()

    const userSession = getDataFromLocal('session-cosmetic-token')

    const handleSearch = () => {
        setSearch(!search)
    }

    const handleMouseEnterLogin = () => {
        setHover(true)
    }

    const handleMouseLeaveLogin = () => {
        setHover(false)
    }

    const handleUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const handlePasssword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const login = async () => {
        setLoading(true)
        if (!isEmptyFields()) return createNotification('error', 'Одно или несколько полей не заполнены', "Ошибка")
        const session = await WordPressCustomApi('/jwt-auth/v1/token', 'POST', { username, password })
        const userStorage = { userId: session.data.id, session: session.data.token }
        router.push('/profile')
        setDataToLocal('session-cosmetic-token', userStorage)
        setLoading(false)
    }

    const isEmptyFields = () => {
        const fields = [username, password]
        return fields.every(field => field.length > 5)
    }


    return (
        <header className={cn(classnames['header'], headerIsSalad && classnames['header--color-salad'])}>
            <div className={classnames['header__container']}>
                <div className={classnames['header__top']}>
                    <div className={classnames['header__left-side']}>
                        <HeaderLeft />
                    </div>
                    <div className={classnames['header__right-side']}>
                        <HeaderRight
                            handleSearch={handleSearch}
                            handleMouseEnterLogin={handleMouseEnterLogin}
                            handleMouseLeaveLogin={handleMouseLeaveLogin}
                        />
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
                {userSession && userSession.session ? (
                    <Lk
                        hovered={hovered}
                        user={user}
                        isLoadingUser={isLoadingUser}
                        handleMouseEnterLogin={handleMouseEnterLogin}
                        handleMouseLeaveLogin={handleMouseLeaveLogin}
                    />
                ) : (
                        <Login
                            hovered={hovered}
                            handleMouseEnterLogin={handleMouseEnterLogin}
                            handleMouseLeaveLogin={handleMouseLeaveLogin}
                            handleUsername={handleUsername}
                            handlePasssword={handlePasssword}
                            login={login}
                            isLoading={isLoading}
                            username={username}
                            password={password}
                        />
                    )}
            </div>
        </header>
    )
}

export default Header
