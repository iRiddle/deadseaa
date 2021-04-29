
import ProductsOnHomePage from '../ProductsOnHomePage';

import classnames from './Offers.module.scss';

const Offers = ({ faceProducts, stockProducts, handleSetToStorage }) => {
    return (
        <div className={classnames['offers']}>
            <div className={classnames['offers__container']}>
                {faceProducts.length > 0 ? faceProducts.map(({ id, name, images, regular_price }, index) =>
                    <ProductsOnHomePage
                        key={id}
                        id={id}
                        img={images}
                        description={name}
                        price={regular_price}
                        className={classnames['offers__product']}
                        handleSetToStorage={handleSetToStorage}
                        isShadow={index % 2 !== 0}
                    />
                ) : <h2>На данный момент продуктов не существует</h2>}
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
                {stockProducts.length > 0 ? stockProducts.map(({ id, name, images, regular_price }, index) =>
                    <ProductsOnHomePage
                        key={id}
                        id={id}
                        img={images}
                        description={name}
                        price={regular_price}
                        handleSetToStorage={handleSetToStorage}
                        className={classnames['offers__product']}
                        isShadow={index % 2 !== 0}
                    />
                ) : <h2>На данный момент акций не существует</h2>}
            </div>
        </div>
    )
}

export default Offers;
