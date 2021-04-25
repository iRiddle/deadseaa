import MainLayout from '../../layouts/MainLayout'
import ProfileLayout from '../../layouts/ProfileLayout'

import Table from '../../components/Table'

import AuthHOC from '../../HOCS/AuthHOC'

import WooCommerceApi from '../../services/WooCommerceService'

import classnames from './Profile.module.scss'

const Orders = ({ orders }) => {
    return (
        <MainLayout>
            <ProfileLayout>
                <Table className={classnames['profile-layout__table']} />
            </ProfileLayout>
        </MainLayout>
    )
}

export async function getServerSideProps() {
    const orders = await WooCommerceApi.get('orders').then(response => response.data).catch(err => err)

    if (!orders) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            orders,
        }
    }
}

export default AuthHOC(Orders)
