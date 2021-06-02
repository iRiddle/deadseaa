import { useState } from 'react'
import { useRouter } from 'next/router'
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
    const [hovered, setHover] = useState(false)
    const [isLoadingAuth, setLoadingAuth] = useState(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()

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

        if (response.statusCode === 403) {
            setLoadingAuth(false)
            setUsername('');
            setPassword('');
            return createNotification('error', 'Пользователь не найден', "Ошибка")
        }

        const userStorage = { userId: response.data.id, session: response.data.token };
        router.push('/profile/orders');
        setDataToLocal('session-cosmetic-token', userStorage);
        document.cookie = `consumerId=${response.data.id}; path=/; expires=Fri, 31 Dec 9999 23:59:59 GMT"`;
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
                    isLoading={isLoadingUser}
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
                            handleMouseEnterLogin={handleMouseEnterLogin}
                            handleMouseLeaveLogin={handleMouseLeaveLogin}
                        />
                    </div>
                </div>
                {getUserComponent()}
            </div>
        </header>
    )
}

export default NotificationHOC(Header)
