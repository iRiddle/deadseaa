import MainLayout from '../../layouts/MainLayout'

import News from '../../components/News'
import Button from '../../components/Button'

import WordPressApi from '../../services/WordPressService'

import classnames from './Blog.module.scss'

const Blog = ({ posts }) => {
    console.log(posts)
    return (
        <MainLayout headerIsSalad={true}>
            <div className={classnames['blog']}>
                <div className={classnames['blog__container']}>
                    <div className={classnames['blog__news-container']}>
                        {posts && posts.length > 0 ?
                            posts.map(({ id, title, content }) =>
                                <News
                                    key={id}
                                    title={title}
                                    content={content}
                                    className={classnames['blog__news']}
                                />
                            ) :
                            <h1 className={classnames['blog__title--not']}>
                                Нет записей
                            </h1>}
                    </div>
                    {!posts && posts.length < 1 && <Button text='Смотреть еще' className={classnames['blog__more-btn']} />}
                </div>
            </div>
        </MainLayout>
    )
}

export async function getStaticProps() {
    const posts = await WordPressApi.posts().then(response => response).catch(err => err);
    console.log(posts)
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
