import { useState } from 'react'
import { useRouter } from 'next/router'

import MainLayout from '../../layouts/MainLayout'
import Button from '../../components/Button'
import AuthHOC from '../../HOCS/AuthHOC'
import NotificationHOC from '../../HOCS/NotificationHOC'

import WooCommerceApi from '../../services/WooCommerceService'
import { WordPressCustomApi } from '../../services/WordPressService'

import { setDataToLocal } from '../../storage'

import classnames from './Registration.module.scss'

const Registration = ({ createNotification }) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLoading, setLoading] = useState(false)

    const router = useRouter()

    const registerUser = async () => {
        setLoading(true)
        const body = {
            username,
            password,
            email,
        }

        if (!isEmptyFields()) return createNotification('error', 'Одно или несколько полей не заполнены', "Ошибка")

        const response = await WooCommerceApi.post('customers', body).then(response => response.data).catch(err => err)
        const session = await WordPressCustomApi('/jwt-auth/v1/token', 'POST', { username, password })
        const userStorage = { userId: response.id, session: session.data.token }

        setDataToLocal('session-cosmetic-token', userStorage)
        router.push('/profile')
        setLoading(false)
        createNotification('ok', 'Регистрация прошла успешно', "Уведомление")
    }

    const handleUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }

    const handleEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }

    const handlePasssword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    const isEmptyFields = () => {
        const fields = [username, email, password]
        return fields.every(field => field.length > 5)
    }

    return (
        <MainLayout>
            <div className={classnames['registration-layout']}>
                <div className={classnames['registration']}>
                    <div className={classnames['registration__container']}>
                        <h1>Регистрация</h1>
                        <label className={classnames['registration__input']}>
                            <span className={classnames['registration__legend']}>Логин</span>
                            <input type='text' placeholder='Введите логин' value={username} onChange={handleUsername} />
                        </label>
                        <label className={classnames['registration__input']}>
                            <span className={classnames['registration__legend']}>E-mail</span>
                            <input type='email' placeholder='Введите e-mail' value={email} onChange={handleEmail} />
                        </label>
                        <label className={classnames['registration__input']}>
                            <span className={classnames['registration__legend']}>Пароль</span>
                            <input type='password' placeholder='Введите пароль' value={password} onChange={handlePasssword} />
                        </label>
                        <Button text='Регистрация' isLoading={isLoading} className={classnames['registration__btn']} onClick={registerUser} />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default AuthHOC(NotificationHOC(Registration))
