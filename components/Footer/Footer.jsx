import Logo from '../Logo'
import Catalog from './Catalog'
import About from './About'
import Contact from './Contact'

import classnames from './Footer.module.scss'

const Footer = () => (
    <footer className={classnames['footer']}>
        <div className={classnames['footer__container']}>
            <div className={classnames['footer__content']}>
                <Logo className={classnames['footer__logo']} />
            </div>
            <div className={classnames['footer__content']}>
                <Catalog className={classnames['footer__catalog']} />
            </div>
            <div className={classnames['footer__content']}>
                <About className={classnames['footer__about']} />
            </div>
            <div className={classnames['footer__content']}>
                <Contact />
            </div>
        </div>
        <div className={classnames['footer__container--mobile']}>
            <div className={classnames['footer__content']}>
                <Logo className={classnames['footer__logo']} />
            </div>
            <div className={classnames['footer__content']}>
                <Contact />
            </div>
            <div className={classnames['footer__content']}>
                <Catalog className={classnames['footer__catalog']} />
            </div>
            <div className={classnames['footer__content']}>
                <About className={classnames['footer__about']} />
            </div>
        </div>
    </footer>
)

export default Footer
