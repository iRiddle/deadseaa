import Link from 'next/link'

import classnames from './AdaptiveNavigation.module.scss'

const AdaptiveNavigation = ({show}) => {
    return (
        <nav className={`${classnames['navigation']} ${show && classnames['navigation--show']}`}>
            <Link href="/" ><a className={classnames['navigation__link']}>Главная</a></Link>
            <Link href="/catalog"><a className={classnames['navigation__link']}>Каталог</a></Link>
            <Link href="/blog"><a className={classnames['navigation__link']}>Блог</a></Link>
            <Link href="/production"><a className={classnames['navigation__link']}>Продукция</a></Link>
        </nav>
    )
}

export default AdaptiveNavigation;