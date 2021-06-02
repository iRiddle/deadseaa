import { API_URL_YK } from '../constants'

import axios from 'axios'

export const YouKassaApi = async (data = {}, router, setIsLoading, createNotification) => {
    try {
        const res = await axios({
            method: 'post',
            url: `${API_URL_YK}/ss-api/url-pay.php`,
            data
        })

        if (res.status >= 200 && res.status < 300) {
            const { kassa_url } = res.data
            if (kassa_url) {
                setIsLoading(false)
                router.push(kassa_url)
            }
        }

        if (res.status >= 400 && res.status < 500) {
            setIsLoading(false)
            return createNotification('error', 'Ошибка доступа. Попробуйте позднее', 'Ошибка')
        }

        if (res.status >= 500) {
            setIsLoading(false)
            return createNotification('error', 'Внутренняя ошибка сервиса оплаты. Попробуйте позднее', 'Ошибка')
        }

    } catch (e) {
        setIsLoading(false)
        return createNotification('error', 'Внутренняя ошибка сервиса оплаты. Попробуйте позднее', 'Ошибка')
    }
}

export default YouKassaApi
