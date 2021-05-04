import Image from 'next/image'
import Link from 'next/link'
import cn from 'classnames'

import Button from '../Button'

import { IMAGE_PLACEHOLDER } from '../../constants'

import classnames from './ProductsOnHomePage.module.scss';

const ProductsOnHomePage = ({ id, img, description, price, discount, oldPrice, isShadow, handleSetToStorage }) => {
    return (
        <div className={cn(classnames['product'], isShadow && classnames['product--shadow'])}>
            <div className={classnames['product__main-container']}>
                <div>
                    <Image
                        width={230}
                        height={230}
                        src={img.length < 1 ? IMAGE_PLACEHOLDER : img[0].src}
                        alt={description}
                        className={classnames['product__img']}
                    />
                </div>
                <div className={classnames['product__container']}>
                    {discount && <span className={classnames['product__discount']}>Скидка!</span>}
                    <Link href={`/catalog/${id}`}>
                        <a className={classnames['product__title']}>
                            {description}
                        </a>
                    </Link>
                    <div>
                        {discount && <del className={`${classnames['product__old-price']} 
                    ${classnames['product__price']}`}>{oldPrice} руб</del>}
                        <span className={classnames['product__price']}>{price} руб</span>
                    </div>
                    <Button
                        className={classnames['product__button']}
                        text='КУПИТЬ'
                        disabled={!price && price !== 0}
                        onClick={() => handleSetToStorage(id)}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductsOnHomePage;