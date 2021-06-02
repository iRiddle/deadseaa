import { useRouter } from 'next/router'

import ActiveLink from '../../components/ActiveLink'

import { removeDataFromLocal } from '../../storage'

import classnames from './ProfileLayout.module.scss'

const ProfileLayout = ({ children }) => {
    const router = useRouter()

    const logout = () => {
        removeDataFromLocal('session-cosmetic-token');
        document.cookie = "consumerId" + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
        router.push('/')
    }

    return (
        <div className={classnames['profile-layout']}>
            <div className={classnames['profile-layout__container']}>
                <h1>Профиль</h1>
                <nav className={classnames['profile-layout__nav']}>
                    <ul className={classnames['profile-layout__links']}>
                        <li className={classnames['profile-layout__link']}>
                            <ActiveLink activeClassName={classnames['profile-layout__active']} href='/profile/orders'>
                                <a className={classnames['profile-layout__nav-link']}>Заказы</a>
                            </ActiveLink>
                        </li>
                        <li className={classnames['profile-layout__link']}>
                            <ActiveLink activeClassName={classnames['profile-layout__active']} href='/profile/address'>
                                <a className={classnames['profile-layout__nav-link']}>Адреса</a>
                            </ActiveLink>
                        </li>
                        {/* <li className={classnames['profile-layout__link']}>
                            <ActiveLink activeClassName={classnames['profile-layout__active']} href='/profile'>
                                <a className={classnames['profile-layout__nav-link']}>Профиль</a>
                            </ActiveLink>
                        </li> */}
                        <li className={classnames['profile-layout__link']}>
                            <button className={classnames['profile-layout__exit']} onClick={logout}>Выйти</button>
                        </li>
                    </ul>
                </nav>
                {children}
            </div>
        </div>
    )
}

export default ProfileLayout
