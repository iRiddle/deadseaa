import { useState, useEffect } from 'react'
import cn from 'classnames'

import Header from '../../components/Header'
import Footer from '../../components/Footer'

import WooCommerceApi from '../../services/WooCommerceService'

import { getDataFromLocal, setDataToLocal } from '../../storage'

import classnames from './MainLayout.module.scss'

const MainLayout = ({ children, headerIsSalad = false, className }) => {
    const [isLoadingUser, setLoadingUser] = useState(false)

    useEffect(async () => {
        await getUserInfo()
    }, [])

    const getUserInfo = async () => {
        setLoadingUser(true)
        const sessionData = await getDataFromLocal('session-cosmetic-token')
        if (!sessionData.session && sessionData.session.length < 1) return
        const user = await WooCommerceApi.get(`customers/${sessionData.userId}`).then(response => response.data).catch(err => err)
        setDataToLocal('user-cosmetic-data', user)
        setLoadingUser(false)
    }

    return (
        <div className={classnames['page-container']}>
            <Header headerIsSalad={headerIsSalad} isLoadingUser={isLoadingUser} />
            <div className={classnames['page-container__content-wrap']}>
                <main className={cn(classnames['main'], className)}>
                    <div className={classnames['main__container']}>
                        {children}
                    </div>
                </main>
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout
