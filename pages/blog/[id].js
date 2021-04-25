import Image from 'next/image'
import cx from 'classnames'

import MainLayout from '../../layouts/MainLayout'

import WordPressApi from '../../services/WordPressService'

import classnames from './Blog.module.scss'
import { IMAGE_PLACEHOLDER } from '../../constants'

const BlogPost = ({ post }) => {
    const { title, content, _embedded } = post
    const img = _embedded['wp:featuredmedia'] ? _embedded['wp:featuredmedia'][0].source_url : IMAGE_PLACEHOLDER;
    return (
        <MainLayout>
            <section className={cx(classnames['blog'], classnames['blog--solo'])}>
                <div className={classnames['blog__container']}>
                    <div className={cx(classnames['blog__news-container'], classnames['blog__news--solo'])}>
                        <h1>
                            {title.rendered}
                        </h1>
                        <div className={classnames['blog__img-container']}>
                            <Image
                                src={img}
                                alt="Пост"
                                width={300}
                                height={300}
                            />
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: content.rendered }}></div>
                    </div>
                </div>
            </section>
        </MainLayout>
    )
}

export async function getServerSideProps({ params }) {
    const post = await WordPressApi.posts().embed().id(params.id).then(response => response).catch(err => err)

    if (!post) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            post
        }
    }
}

export default BlogPost
