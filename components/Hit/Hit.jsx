import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

import { IMAGE_PLACEHOLDER } from '../../constants'

import classnames from './Hit.module.scss'

const Hit = ({ id, name, images, className }) => (
    <article className={cn(classnames['hit'], className)}>
        <div className={classnames['hit__img-container']}>
            <Image
                src={images.length < 1 ? IMAGE_PLACEHOLDER : images[0].src}
                width={100}
                height={100}
            />
        </div>
        <Link href={`/catalog/${id}`}>
            <a className={classnames['hit__legend']}>{name}</a>
        </Link>
    </article >
)

export default Hit
