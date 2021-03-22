import MainLayout from '../../layouts/MainLayout'
import ProfileLayout from '../../layouts/ProfileLayout'

import Table from '../../components/Table'

import AuthHOC from '../../HOCS/AuthHOC'

import classnames from './Profile.module.scss'

const Points = () => {
    return (
        <MainLayout>
            <ProfileLayout>
                <Table className={classnames['profile-layout__table']} />
            </ProfileLayout>
        </MainLayout>
    )
}

export default AuthHOC(Points)
