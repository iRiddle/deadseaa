import MainLayout from '../../layouts/MainLayout'
import PageLayout from '../../layouts/PageLayout'

import WordPressApi from '../../services/WordPressService'

const Reviews = ({ page }) => {
    return (
        <MainLayout>
            <PageLayout content={page[0]} />
        </MainLayout>
    )
}

export async function getStaticProps() {
    const page = await WordPressApi.pages().slug('reviews').then(response => response).catch(err => err)
    if (!page) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            page
        }
    }
}

export default Reviews
