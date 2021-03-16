import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

import classnames from './News.module.scss'

const News = ({ className, title, content }) => (
    <article className={cn(classnames['news'], className)}>
        <div className={classnames['news__description']}>
            <div className={classnames['news__container']}>
                <h2 className={classnames['news__title']}>
                    {title.rendered}
                </h2>
                <p dangerouslySetInnerHTML={{ __html: content && content.rendered ? content.rendered : 'Нет описания' }} />
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
