import cn from 'classnames'

import ActiveLink from '../../../components/ActiveLink'

import classnames from '../CatalogLayout.module.scss'

const CatalogAside = ({ productCategories }) => {
    return (
        <aside>
            <ul>
                {productCategories && productCategories.map(({ id, name, slug, }) =>
                    <li key={id} className={cn(classnames['catalog-layout__li'],
                        slug === 'popul' || slug === 'bestsellers' && classnames['catalog-layout__li--invisible'])}
                    >
                        <ActiveLink
                            activeClassName={classnames['catalog-layout__active']}
                            href={slug === "uncategorized" ? '/catalog' : `/catalog/category/${id}`}
                        >
                            <a className={classnames['catalog-layout__nav-link']}>{name}</a>
                        </ActiveLink>
                    </li>
                )}
            </ul>
        </aside>
    )
}

export default CatalogAside