import MainLayout from '../../layouts/MainLayout'

import News from '../../components/News'
import Button from '../../components/Button'

import classnames from './Blog.module.scss'

const Blog = () => {
    return (
        <MainLayout headerIsSalad={true}>
            <div className={classnames['blog']}>
                <div className={classnames['blog__container']}>
                    <div className={classnames['blog__news-container']}>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(() =>
                            <News className={classnames['blog__news']} />
                        )}
                    </div>
                    <Button text='Смотреть еще' className={classnames['blog__more-btn']} />
                </div>
            </div>
        </MainLayout>
    )
}

export default Blog
