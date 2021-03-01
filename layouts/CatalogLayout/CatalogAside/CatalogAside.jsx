import ActiveLink from '../../../components/ActiveLink'

import classnames from '../CatalogLayout.module.scss'

const CatalogAside = () => (
    <aside>
        <ul>
            <li className={classnames['catalog-layout__li']}>
                <ActiveLink activeClassName={classnames['catalog-layout__active']} href='/catalog/'>
                    <a className={classnames['catalog-layout__nav-link']}>Маски</a>
                </ActiveLink>
            </li>
            <li className={classnames['catalog-layout__li']}>
                <ActiveLink activeClassName={classnames['catalog-layout__active']} href='/catalog/'>
                    <a className={classnames['catalog-layout__nav-link']}>Для лица</a>
                </ActiveLink>
            </li>
            <li className={classnames['catalog-layout__li']}>
                <ActiveLink activeClassName={classnames['catalog-layout__active']} href='/catalog/'>
                    <a className={classnames['catalog-layout__nav-link']}>Для рук</a>
                </ActiveLink>
            </li>
            <li className={classnames['catalog-layout__li']}>
                <ActiveLink activeClassName={classnames['catalog-layout__active']} href='/catalog/'>
                    <a className={classnames['catalog-layout__nav-link']}>Для ног</a>
                </ActiveLink>
            </li>
            <li className={classnames['catalog-layout__li']}>
                <ActiveLink activeClassName={classnames['catalog-layout__active']} href='/catalog/'>
                    <a className={classnames['catalog-layout__nav-link']}>Забота о коже</a>
                </ActiveLink>
            </li>
            <li className={classnames['catalog-layout__li']}>
                <ActiveLink activeClassName={classnames['catalog-layout__active']} href='/catalog/'>
                    <a className={classnames['catalog-layout__nav-link']}>Без категории</a>
                </ActiveLink>
            </li>
        </ul>
    </aside>
)

export default CatalogAside