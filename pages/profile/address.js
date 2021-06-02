import cookies from 'next-cookies'
import isEmpty from 'lodash.isempty'

import MainLayout from '../../layouts/MainLayout'
import ProfileLayout from '../../layouts/ProfileLayout'

import TableAddresses from '../../components/TableAddresses'

import AuthHOC from '../../HOCS/AuthHOC'

import WooCommerceApi from '../../services/WooCommerceService'

import classnames from './Profile.module.scss'

const Address = ({ orders }) => {
    return (
        <MainLayout>
            <ProfileLayout>
                <TableAddresses className={classnames['profile-layout__table']} orders={orders} />
            </ProfileLayout>
        </MainLayout>
    )
}

export async function getServerSideProps(ctx) {
    const customerId = cookies(ctx).consumerId || '';
    const orders = await WooCommerceApi.get('orders', { customer: customerId }).then(response => response.data).catch(err => err)

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


export default AuthHOC(Address)
