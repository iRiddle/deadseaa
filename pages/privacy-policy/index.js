import MainLayout from '../../layouts/MainLayout'
import PageLayout from '../../layouts/PageLayout'

import WordPressApi from '../../services/WordPressService'

const PrivacyPolicy = ({ page }) => {
    return (
        <MainLayout>
            <PageLayout content={page[0]} />
        </MainLayout>
    )
}

export async function getServerSideProps() {
    const page = await WordPressApi.pages().slug('privacy-policy').then(response => response).catch(err => err)
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

export default PrivacyPolicy
