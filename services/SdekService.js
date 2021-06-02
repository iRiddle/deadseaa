import { API_URL_YK } from '../constants'

import axios from 'axios'

export const SdekApi = async (data = {}, createNotification) => {
    try {
        const res = await axios({
            method: 'post',
            url: `${API_URL_YK}/ss-api/delivery/calc.php`,
            data,
        })

        if (res.status >= 200 && res.status < 300) {
            const { delivery_sum } = res.data
            createNotification('ok', "Успешно расчитана стоимость доставки")
            return delivery_sum
        }

        if (res.status >= 400 && res.status < 500) {
            return createNotification('error', 'Ошибка доступа. Попробуйте позднее', 'Ошибка')
        }

        if (res.status >= 500) {
            return createNotification('error', 'Внутренняя ошибка сервиса. Попробуйте позднее', 'Ошибка')
        }

    } catch (e) {
        return createNotification('error', 'Проверьте правильность введенного индекса', 'Ошибка')
    }
}

export default SdekApi
