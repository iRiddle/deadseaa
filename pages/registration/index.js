import MainLayout from '../../layouts/MainLayout'
import Button from '../../components/Button'

import classnames from './Registration.module.scss'

const Registration = () => {
    const test = async () => {
        const testObj = {
            username: 'zxvzxvzxv',
            email: 'xcbxcb@ya.ru',
            password: 'qwerty12345'
        }

        const data = await fetch(`http://localhost:3000/registerUser/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(testObj)
        }).then((response) => response.json())

        console.log(data)
    }

    return (
        <MainLayout>
            <div className={classnames['registration-layout']}>
                <div className={classnames['registration']}>
                    <div className={classnames['registration__container']}>
                        <h1>Регистрация</h1>
                        <label className={classnames['registration__input']}>
                            <span className={classnames['registration__legend']}>Логин</span>
                            <input type='text' placeholder='Введите логин' />
                        </label>
                        <label className={classnames['registration__input']}>
                            <span className={classnames['registration__legend']}>E-mail</span>
                            <input type='email' placeholder='Введите e-mail' />
                        </label>
                        <label className={classnames['registration__input']}>
                            <span className={classnames['registration__legend']}>Пароль</span>
                            <input type='password' placeholder='Введите пароль' />
                        </label>
                        <Button text='Регистрация' className={classnames['registration__btn']} onClick={test} />
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Registration
