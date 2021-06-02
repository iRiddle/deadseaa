import Link from 'next/link'
import Image from 'next/image'

import classnames from '../Header.module.scss'

const HeaderRight = ({
    handleMouseEnterLogin,
    handleMouseLeaveLogin
}) => {
    return (
        <>
            <span className={classnames['header__lk']}
                onMouseEnter={handleMouseEnterLogin}
                onMouseLeave={handleMouseLeaveLogin}
            >
                <Image
                    src="/static/lk.svg"
                    alt="Личный кабинет"
                    width={18}
                    height={18}
                />
            </span>
            <Link href='/basket'>
                <a className={classnames['header__basket']}>
                    <Image
                        src="/static/basket.svg"
                        alt="Корзина"
                        width={18}
                        height={18}
                    />
                </a>
            </Link>
        </>
    )
}

export default HeaderRight
