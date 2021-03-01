import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

import classnames from './Hit.module.scss'

const Hit = ({ text, src, className }) => (
    <article className={cn(classnames['hit'], className)}>
        <Image src={src} width={100} height={100} />
        <Link href="/">
            <a className={classnames['hit__legend']}>{text}</a>
        </Link>
    </article >
)

export default Hit
