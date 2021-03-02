import Link from 'next/link'
import Image from 'next/image'

import Button from '../Button'

import classnames from './Product.module.scss'

const Product = ({ id, img, name, cost }) => (
    <article className={classnames['product']}>
        <div className={classnames['product__container']}>
            <Image
                width={500}
                height={500}
                src='/static/content/cream.png'
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
                    {`${cost} руб.`}
                </span>
                <Button text='Купить' className={classnames['product__btn']} />
            </div>
        </div>
    </article>
)

export default Product
