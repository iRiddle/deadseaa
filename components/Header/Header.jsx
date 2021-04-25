import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import cn from 'classnames'

import HeaderLeft from './HeaderLeft'
import HeaderRight from './HeaderRight'

import Login from '../Login'
import Lk from '../Lk'

import UserLayout from '../../layouts/UserLayout'

import NotificationHOC from '../../HOCS/NotificationHOC'

import { setDataToLocal } from '../../storage'
import { WordPressCustomApi } from '../../services/WordPressService'

import classnames from './Header.module.scss'

const Header = ({ headerIsSalad, isLoadingUser, user, createNotification }) => {
    const [search, setSearch] = useState(false)
    const [hovered, setHover] = useState(false)
    const [isLoadingAuth, setLoadingAuth] = useState(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

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
        setLoadingAuth(true);
        if (!isEmptyFields()) {
            setLoadingAuth(false)
            return createNotification('error', 'Одно или несколько полей не заполнены', "Ошибка")
        };

        const response = await WordPressCustomApi('/jwt-auth/v1/token', 'POST', { username, password });
        const userStorage = { userId: response.data.id, session: response.data.token };
        router.push('/profile');
        setDataToLocal('session-cosmetic-token', userStorage);
        setLoadingAuth(false);
    }

    const isEmptyFields = () => {
        const fields = [username, password]
        return fields.every(field => field.length > 5)
    }

    const getUserComponent = () => {
        if (user && Object.keys(user).length > 0) {
            return (
                <UserLayout
                    className={cn(classnames['lk'])}
                    onMouseEnter={handleMouseEnterLogin}
                    onMouseLeave={handleMouseLeaveLogin}
                    hovered={hovered}
                    isLoading={isLoadingUser} // этот компонент
                >
                    <Lk
                        hovered={hovered}
                        user={user}
                    />
                </UserLayout>
            )
        }

        return (
            <UserLayout
                className={cn(classnames['login'])}
                onMouseEnter={handleMouseEnterLogin}
                onMouseLeave={handleMouseLeaveLogin}
                isLoading={isLoadingUser}
                hovered={hovered}
            >
                <Login
                    hovered={hovered}
                    handleUsername={handleUsername}
                    handlePasssword={handlePasssword}
                    login={login}
                    username={username}
                    password={password}
                    isLoadingAuth={isLoadingAuth}
                />
            </UserLayout>
        )
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
                {getUserComponent()}
            </div>
        </header>
    )
}

export default NotificationHOC(Header)
