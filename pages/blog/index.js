import MainLayout from '../../layouts/MainLayout'

import News from '../../components/News'
import Button from '../../components/Button'

import WordPressApi from '../../services/WordPressService'

import classnames from './Blog.module.scss'

const Blog = ({ posts }) => {
    return (
        <MainLayout headerIsSalad={true}>
            <section className={classnames['blog']}>
                <div className={classnames['blog__container']}>
                    <div className={classnames['blog__news-container']}>
                        {posts && posts.length > 0 ?
                            posts.map(({ id, title, content, _embedded, _links }) =>
                                <News
                                    key={id}
                                    id={id}
                                    title={title}
                                    content={content}
                                    className={classnames['blog__news']}
                                    _embedded={_embedded}
                                    _links={_links}
                                />
                            ) :
                            <h1 className={classnames['blog__title--not']}>
                                Нет записей
                            </h1>
                        }
                    </div>
                    {!posts && posts.length < 1 && <Button text='Смотреть еще' className={classnames['blog__more-btn']} />}
                </div>
            </section>
        </MainLayout>
    )
}

export async function getServerSideProps() {
    const posts = await WordPressApi.posts().embed().then(response => response).catch(err => err);
    if (!posts) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            posts,
        }
    }
}

export default Blog
