import Image from 'next/image'
import cn from 'classnames'

import Button from '../Button'

import classnames from './ProductStrip.module.scss'

const ProductStrip = ({
    isReverse,
    title,
    secondaryTitle,
    description,
    className
}) => {
    return (
        <article className={cn(classnames['product-strip'], className)}>
            <div className={classnames['product-strip__top']}>
                <div className={classnames['product-strip__title-container']}>
                    <h2 className={classnames['product-strip__title']}>
                        {title}
                    </h2>
                    <p className={classnames['product-strip__legend']}>
                        {secondaryTitle}
                    </p>
                </div>
                <Image
                    width={430}
                    height={340}
                    src='/static/content/product-line.png'
                />
            </div>
            <div className={cn(classnames['product-strip__bottom'], isReverse && classnames['product-strip__bottom--reverse'])}>
                <Button className={cn(classnames['product-strip__btn'], isReverse && classnames['product-strip__btn--reverse'])} text='Подробнее' notContainer />
                <p className={classnames['product-strip__description']}>
                    {description}
                </p>
            </div>
        </article>
    )
}

export default ProductStrip
