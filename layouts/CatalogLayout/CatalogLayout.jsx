import cn from 'classnames'

import Breadcrumbs from '../../components/Breadcrumbs'
import Hit from '../../components/Hit'

import CatalogAside from './CatalogAside'

import classnames from './CatalogLayout.module.scss'

const CatalogLayout = ({ children }) => {
    const hitsMock = [
        { id: 1, text: 'Кондиционер для волос с кератином и витамином Е', src: '/static/content/hit1.png' },
        { id: 2, text: 'Кондиционер для волос с кератином и витамином Е', src: '/static/content/hit2.png' },
        { id: 3, text: 'Кондиционер для волос с кератином и витамином Е', src: '/static/content/hit3.png' },
        { id: 4, text: 'Кондиционер для волос с кератином и витамином Е', src: '/static/content/hit4.png' },
        { id: 5, text: 'Кондиционер для волос с кератином и витамином Е', src: '/static/content/hit5.png' }
    ]

    const breadcrumbs = [{ id: 1, href: '/', name: 'Категории' }]
    return (
        <div className={classnames['catalog-layout']}>
            <div className={classnames['catalog-layout__container']}>
                <div className={classnames['catalog-layout__navigation']}>
                    <h2 className={classnames['catalog-layout__head']}>
                        Категории
                    </h2>
                    <CatalogAside />
                    <h2 className={cn(classnames['catalog-layout__head'], classnames['catalog-layout__head--gap-top'])}>
                        Бестселлеры
                    </h2>
                    <div className={classnames['catalog-layout__hits']}>
                        {hitsMock.map(({ id, text, src }) => <Hit key={id} className={classnames['catalog-layout__hit']} text={text} src={src} />)}
                    </div>
                </div>
                <div className={classnames['catalog-layout__content']}>
                    <Breadcrumbs className={classnames['catalog-layout__breadcrumbs']} breadcrumbs={breadcrumbs} />
                    <div className={classnames['catalog-layout__children']}>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CatalogLayout