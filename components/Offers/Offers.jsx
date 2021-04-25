import ProductsOnHomePage from '../ProductsOnHomePage';
import classnames from './Offers.module.scss';

const Offers = () => {
    return (
        <div className={classnames['offers']}>
            <div className={classnames['offers__container']}>
                <ProductsOnHomePage
                    img={'../../static/content/cream.png'}
                    description={'Масло для тела для предотвращения старения с зеленым чаем и геранью'}
                    price={'915 руб'}
                    className={classnames['offers__product']} />
                <ProductsOnHomePage
                    img={'../../static/content/Cream2.png'}
                    description={'Масло для тела для предотвращения старения с зеленым чаем и геранью'}
                    price={'915 руб'} />
            </div>
            <div className={classnames['offers__block']}>
                <div className={classnames['offers__paragraph-container']}>
                    <p className={classnames['offers__paragraph']}>
                        Постоянная работа по созданию новых препаратов для грамотного и
                        безопасного решения самых сложных эстетических проблем кожи.
                    </p>
                </div>
                <div className={classnames['offers__images']}>
                    <img src="../../static/content/image1.png" className={classnames['offers__img1']} />
                    <img src="../../static/content/image2.png" className={classnames['offers__img2']} />
                    <img src="../../static/content/image3.png" className={classnames['offers__img3']} />
                </div>
                <div className={classnames['offers__paragraph-block']}>
                    <p className={classnames['offers__paragraph']}>
                        Мы стремимся к установлению нового стандарта в профессиональной
                        коррекции эстетических проблем кожи, ориентируясь на новейшие
                        научные достижения и полагаясь на собственный опыт разработок в
                        области косметологии.
                    </p>
                    <span className={classnames['offers__read']}>Читать далее &#187;</span>
                </div>
            </div>
            <div className={classnames['offers__container']}>
                <ProductsOnHomePage
                    img={'../../static/content/cream.png'}
                    description={'Масло для тела для предотвращения старения с зеленым чаем и геранью'}
                    price={'915 руб'}
                    className={classnames['offers__product']}
                    discount={true}
                    oldPrice={1000}
                />
                <ProductsOnHomePage
                    img={'../../static/content/Cream2.png'}
                    description={'Масло для тела для предотвращения старения с зеленым чаем и геранью'}
                    price={'915 руб'}
                    discount={true}
                    oldPrice={1000}
                />
            </div>
        </div>
    )
}

export default Offers;
