import ActiveLink from '../../components/ActiveLink'

import classnames from './ProfileLayout.module.scss'

const ProfileLayout = ({ children }) => {
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
                        <li className={classnames['profile-layout__link']}>
                            <ActiveLink activeClassName={classnames['profile-layout__active']} href='/profile'>
                                <a className={classnames['profile-layout__nav-link']}>Профиль</a>
                            </ActiveLink>
                        </li>
                        <li className={classnames['profile-layout__link']}>
                            <ActiveLink activeClassName={classnames['profile-layout__active']} href='/profile/points'>
                                <a className={classnames['profile-layout__nav-link']}>Баллы</a>
                            </ActiveLink>
                        </li>
                        <li className={classnames['profile-layout__link']}>
                            <button className = {classnames['profile-layout__exit']}>Выйти</button>
                        </li>
                    </ul>
                </nav>
                {children}
            </div>
        </div>
    )
}

export default ProfileLayout
