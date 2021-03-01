import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

import classnames from './News.module.scss'

const News = ({ className, title = 'Статья 1', description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' }) => (
    <article className={cn(classnames['news'], className)}>
        <div className={classnames['news__description']}>
            <div className={classnames['news__container']}>
                <h2 className={classnames['news__title']}>
                    {title}
                </h2>
                <p>{description}</p>
                <Link href='/'>
                    <a className={classnames['news__arrow']}>
                        <Image
                            width={100}
                            height={10}
                            src='/static/arrow.svg'
                        />
                    </a>
                </Link>
            </div>
        </div>
    </article >
)

export default News
