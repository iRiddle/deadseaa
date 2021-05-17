import cn from 'classnames'

import Breadcrumbs from '../../components/Breadcrumbs'
import Hit from '../../components/Hit'
import Pagination from '../../components/Pagination'

import CatalogAside from './CatalogAside'

import classnames from './CatalogLayout.module.scss'

const CatalogLayout = ({
    children,
    productCategories,
    hits,
    pageCount,
    handlePageClick,
}) => {
    const breadcrumbs = [{ id: 1, href: '/catalog', name: 'Категории' }]
    return (
        <div className={classnames['catalog-layout']}>
            <div className={classnames['catalog-layout__container']}>
                <div className={classnames['catalog-layout__navigation']}>
                    <h2 className={classnames['catalog-layout__head']}>
                        Категории
                    </h2>
                    <CatalogAside productCategories={productCategories} />
                    <h2 className={cn(classnames['catalog-layout__head'], classnames['catalog-layout__head--gap-top'])}>
                        Бестселлеры
                    </h2>
                    <div className={classnames['catalog-layout__hits']}>
                        {hits && hits.slice(0, 6).map(({ id, name, images }) => (
                            <Hit key={id} id={id} className={classnames['catalog-layout__hit']} name={name} images={images} />
                        ))}
                    </div>
                </div>
                <div className={classnames['catalog-layout__content']}>
                    <Breadcrumbs className={classnames['catalog-layout__breadcrumbs']} breadcrumbs={breadcrumbs} />
                    <div className={classnames['catalog-layout__children']}>
                        {children}
                    </div>
                    {pageCount && pageCount > 0 &&
                        <Pagination
                            className={classnames['catalog-layout__pagination']}
                            pageCount={pageCount}
                            handlePageClick={handlePageClick}
                        />
                    }
                </div>
            </div>
        </div>
    )
}

export default CatalogLayout
