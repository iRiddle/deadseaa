import classnames from './ProductsOnHomePage.module.scss';

const ProductsOnHomePage = ({img, description, price, className = null, discount = false, oldPrice = null}) => {
    return (
        <div className={`${classnames['product']} ${className}`}>
            <div>
                <img src={img} className={classnames['product__img']}/>
            </div>
            <div className={classnames['product__container']}>
                {discount && <span className={classnames['product__discount']}>Скидка!</span>}
                <p className={classnames['product__description']}>{description}</p>
                <div>
                    {discount && <del className={`${classnames['product__old-price']} 
                    ${classnames['product__price']}`}>{oldPrice} руб</del>}
                    <span className={classnames['product__price']}>{price}</span>
                </div>
                <button className={classnames['product__button']}>КУПИТЬ</button>
            </div>
        </div>
    )
}

export default ProductsOnHomePage;