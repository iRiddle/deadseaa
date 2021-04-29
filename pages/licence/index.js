import MainLayout from '../../layouts/MainLayout'
import PageLayout from '../../layouts/PageLayout'

import WordPressApi from '../../services/WordPressService'

const Licence = ({ page }) => {
    return (
        <MainLayout>
            <PageLayout content={page[0]} />
        </MainLayout>
    )
}

export async function getServerSideProps() {
    const page = await WordPressApi.pages().slug('licence').then(response => response).catch(err => err)
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

export default Licence
