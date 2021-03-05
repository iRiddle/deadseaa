import Link from 'next/link'
import Image from 'next/image'

import Button from '../Button'

import { IMAGE_PLACEHOLDER } from '../../constants'

import classnames from './Product.module.scss'

const Product = ({ id, featuredSrc, title, regularPrice, handleSetToStorage }) => {
    return (
        <article className={classnames['product']}>
            <div className={classnames['product__container']}>
                <Image
                    width={500}
                    height={500}
                    src={featuredSrc !== false ? featuredSrc : IMAGE_PLACEHOLDER}
                    alt={title}
                    className={classnames['product__img']}
                />
                <div className={classnames['product__info']} >
                    <Link href={`/catalog/${id}`}>
                        <a>
                            {title}
                        </a>
                    </Link>
                    <span className={classnames['product__cost']}>
                        {`${regularPrice} руб.`}
                    </span>
                    <Button text='Купить' className={classnames['product__btn']} onClick={() => handleSetToStorage(id)} />
                </div>
            </div>
        </article>
    )
}

export default Product
