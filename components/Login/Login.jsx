import Link from 'next/link'
import cn from 'classnames'

import Button from '../Button'
import classnames from './Login.module.scss'

const Login = ({
    username,
    password,
    isLoadingAuth,
    handleUsername,
    handlePasssword,
    login
}) => {
    return (
        <div className={classnames['login']}>
            <h2>Вход</h2>
            <div className={classnames['login__inputs']}>
                <label className={classnames['login__input']}>
                    <span className={classnames['login__legend']}>Логин:</span>
                    <input type="text" value={username} onChange={handleUsername} placeholder='Введите логин' />
                </label>
                <label className={classnames['login__input']}>
                    <span className={classnames['login__legend']}>Пароль:</span>
                    <input type="password" value={password} onChange={handlePasssword} placeholder='Введите пароль' />
                </label>
                <Button text='Войти' onClick={login} isLoading={isLoadingAuth} className={classnames['login__btn']} />
            </div>
            <div className={classnames['login__links']}>
                <Link href="/registration">
                    <a className={cn(classnames['logo'])}>
                        Регистрация
                    </a>
                </Link>
                <Link href="/">
                    <a className={cn(classnames['logo'])}>
                        Забыли пароль?
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Login
