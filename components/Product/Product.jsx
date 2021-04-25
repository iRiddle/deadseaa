import Link from 'next/link'
import Image from 'next/image'

import Button from '../Button'

import { IMAGE_PLACEHOLDER } from '../../constants'

import classnames from './Product.module.scss'

const Product = ({ id, images, name, regularPrice, handleSetToStorage }) => (
    <article className={classnames['product']}>
        <div className={classnames['product__container']}>
            <Image
                width={100}
                height={100}
                src={images.length < 1 ? IMAGE_PLACEHOLDER : images[0].src}
                alt={name}
                className={classnames['product__img']}
            />
            <div className={classnames['product__info']} >
                <Link href={`/catalog/${id}`}>
                    <a>
                        {name}
                    </a>
                </Link>
                <span className={classnames['product__cost']}>
                    {regularPrice ? `${regularPrice}руб.` : 'Нет цены'}
                </span>
                <Button text='Купить' className={classnames['product__btn']} disabled={!regularPrice && regularPrice !== 0} onClick={() => handleSetToStorage(id)} />
            </div>
        </div>
    </article>
)

export default Product
