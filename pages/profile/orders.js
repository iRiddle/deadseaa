import cookies from 'next-cookies'
import isEmpty from 'lodash.isempty'

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
                {!isEmpty(orders) ? (
                    <Table className={classnames['profile-layout__table']} orders={orders} />
                ) :
                    <h1 className={classnames['profile-layout__empty']}>Данных нет</h1>
                }
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

export default AuthHOC(Orders)
