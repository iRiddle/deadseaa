import { useState, useEffect } from 'react'
import cn from 'classnames'
import isEmpty from 'lodash.isempty'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import WooCommerceApi from '../../services/WooCommerceService'

import { getDataFromLocal } from '../../storage'

import classnames from './MainLayout.module.scss'

const MainLayout = ({ children, headerIsSalad = false, className }) => {
    const [isLoadingUser, setLoadingUser] = useState(false)
    const [user, setUser] = useState({})

    useEffect(async () => {
        await getUserInfo();
    }, [])

    const getUserInfo = async () => {
        const sessionData = getDataFromLocal('session-cosmetic-token')
        if (!isEmpty(sessionData)) {
            setLoadingUser(true)
            const user = await WooCommerceApi.get(`customers/${sessionData.userId}`).then(response => response.data).catch(err => err);
            setUser(user)
            setLoadingUser(false)
        }
    }

    return (
        <div className={classnames['page-container']}>
            <Header headerIsSalad={headerIsSalad} isLoadingUser={isLoadingUser} user={user} getUserInfo={getUserInfo} />
            <main className={cn(classnames['main'], className)}>
                <div className={classnames['main__container']}>
                    {children}
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default MainLayout
