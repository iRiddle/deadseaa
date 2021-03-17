import Link from 'next/link'
import Image from 'next/image'
import cn from 'classnames'

import { substrContent } from '../../helpers/substr'

import { IMAGE_PLACEHOLDER } from '../../constants'

import classnames from './News.module.scss'

const News = ({ id, className, title, content, _embedded }) => {
    const img = _embedded['wp:featuredmedia'] ? _embedded['wp:featuredmedia'][0].source_url : IMAGE_PLACEHOLDER;
    return (
        <article className={cn(classnames['news'], className)} style={{ backgroundImage: `url(${img})` }}>
            <div className={classnames['news__description']}>
                <div className={classnames['news__container']}>
                    <Link href={`/blog/${id}`}>
                        <a className={classnames['news__title']}>
                            {title.rendered}
                        </a>
                    </Link>
                    <div dangerouslySetInnerHTML={{ __html: `<p>${substrContent(content.rendered, 60)}</p>` }}></div>
                    <Link href={`/blog/${id}`}>
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
        </article>
    )
}

export default News
