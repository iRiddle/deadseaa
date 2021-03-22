import Link from 'next/link'
import cn from 'classnames'

import Loader from '../Loader'

import classnames from './Lk.module.scss'

const Lk = ({
    hovered,
    user,
    isLoadingUser,
    handleMouseEnterLogin,
    handleMouseLeaveLogin
}) => {
    const { username, email, avatar_url } = user
    return (
        <div
            className={cn(classnames['lk'], hovered && classnames['lk--shown'])}
            onMouseEnter={handleMouseEnterLogin}
            onMouseLeave={handleMouseLeaveLogin}
        >
            <div className={classnames['lk__container']}>
                {isLoadingUser ? (
                    <Loader />
                ) : (
                        <>
                            <div className={classnames['lk__info']}>
                                <img className={classnames['lk__img']} src={avatar_url} alt="" />
                                <span className={classnames['lk__legend']}>
                                    {`Имя: ${username}`}
                                </span>
                                <span className={classnames['lk__legend']}>
                                    {`E-mail: ${email}`}
                                </span>
                                <span className={classnames['lk__legend']}>
                                    Роль: Клиент
                                </span>
                            </div>
                            <div className={classnames['lk__bottom']}>
                                <Link className={classnames['lk__link']} href="/profile">
                                    <a>
                                        В личный кабинет
                                    </a>
                                </Link>
                            </div>
                        </>
                    )}
            </div>
        </div>
    )
}

export default Lk
