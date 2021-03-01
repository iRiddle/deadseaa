import Link from 'next/link'
import Image from 'next/image'

import Button from '../Button'

import classnames from './Product.module.scss'

const Product = ({ img, name, cost = 915 }) => (
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
                <Link href="">
                    <a>
                        {name || 'Масло для тела для предотвращения старения с зеленым чаем и геранью'}
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
