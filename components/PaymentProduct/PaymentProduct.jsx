import Image from 'next/image'
import cn from 'classnames'

import Button from '../Button'

import { IMAGE_PLACEHOLDER } from '../../constants'

import classnames from './PaymentProduct.module.scss'

const PaymentProduct = ({
    className,
    name,
    regularPrice,
    images,
    count,
    handleIncrease,
    handleDecrease,
    handleRemove
}) => (
        <tr className={cn(classnames['payment-product'], className)}>
            <td className={classnames['payment-product__data']}>
                <div className={classnames['payment-product__img']}>
                    <Image
                        width={75}
                        height={75}
                        src={images.length < 1 ? IMAGE_PLACEHOLDER : images[0].src}
                    />
                </div>
            </td>
            <td className={classnames['payment-product__data']}>{name}</td>
            <td className={classnames['payment-product__data']}>{`${regularPrice}руб.`}</td>
            <td className={classnames['payment-product__data']}>
                <Button
                    text={
                        <Image
                            width={10}
                            height={10}
                            src='/static/minus.svg'
                        />
                    }
                    className={classnames['payment-product__operation']}
                    onClick={handleDecrease}
                    disabled={count < 1}
                />
                {`${count} шт.`}
                <Button
                    text={
                        <Image
                            width={10}
                            height={10}
                            src='/static/plus.svg'
                        />
                    }
                    className={classnames['payment-product__operation']}
                    onClick={handleIncrease}
                />
            </td>
            <td className={classnames['payment-product__data']}>{`${count * regularPrice}руб.`}</td>
            <td className={classnames['payment-product__data']}>
                <Button
                    text={
                        <Image
                            width={15}
                            height={15}
                            src='/static/remove.svg'
                        />
                    }
                    className={classnames['payment-product__remove']}
                    onClick={handleRemove}
                />
            </td>
        </tr>
    )


export default PaymentProduct
