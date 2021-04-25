import Link from 'next/link'
import classnames from './Lk.module.scss'

const Lk = ({ user }) => {
    const { username, email, avatar_url } = user
    return (
        <div className={classnames['lk']}>
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

        </div>
    )
}

export default Lk
