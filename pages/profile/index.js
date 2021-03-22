import MainLayout from '../../layouts/MainLayout'
import ProfileLayout from '../../layouts/ProfileLayout'

import Table from '../../components/Table'

import AuthHOC from '../../HOCS/AuthHOC'

const Profile = () => {
    return (
        <MainLayout>
            <ProfileLayout>
                <Table />
            </ProfileLayout>
        </MainLayout>
    )
}

export default AuthHOC(Profile)
