import Link from 'next/link'
import cn from 'classnames'

import classnames from './Breadcrumbs.module.scss'
import { Fragment } from 'react'

const Breadcrumbs = ({ breadcrumbs, className }) => (
    <ul className={cn(classnames['breadcrumbs'], className)}>
        <div className={classnames['breadcrumbs__container']}>
            <li className={classnames['breadcrumbs__link']}>
                <Link href="/">
                    <a>Главная</a>
                </Link>
            </li>
        /
        {breadcrumbs.map(({ id, href, name }, index, arr) =>
                <Fragment key={id}>
                    <li className={classnames['breadcrumbs__link']}>
                        <Link href={href}>
                            <a>{name}</a>
                        </Link>
                    </li>
                    {arr.length !== index + 1 && '/'}
                </Fragment>
            )}
        </div>
    </ul>
)

export default Breadcrumbs
