import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

import classnames from './Logo.module.scss'

const Logo = ({ className }) => (
    <Link href="/">
        <a className={cn(classnames['logo'], className)}>
            <Image
                src="/static/logo.svg"
                alt="Мертвое море"
                width={30}
                height={30}
            />
            <span className={classnames['logo__legend']}>
                Философия <br /> моря
            </span>
        </a>
    </Link>
)

export default Logo