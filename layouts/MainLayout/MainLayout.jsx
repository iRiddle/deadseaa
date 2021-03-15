import cn from 'classnames'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import classnames from './MainLayout.module.scss'

const MainLayout = ({ children, headerIsSalad = false, className }) => (
    <div className={classnames['page-container']}>
        <Header headerIsSalad={headerIsSalad} />
        <div className={classnames['page-container__content-wrap']}>
            <main className={cn(classnames['main'], className)}>
                <div className={classnames['main__container']}>
                    {children}
                </div>
            </main>
        </div>
        <Footer />
    </div>
)

export default MainLayout
