import { setDataToLocal, getDataFromLocal } from '../storage'

const fabricStorage = (createNotification) => {
    const setToStorage = (product) => {
        let mappedData = [];
        const dataFromStorage = getProductsFromStorage()
        const isExistInStorage = findProduct(dataFromStorage, product)

        if (isExistInStorage) {
            mappedData = dataFromStorage.map(item => item.id === product.id ? { ...item, count: item.count + product.count } : item)
        } else {
            mappedData = [...dataFromStorage, product]
        }

        setDataToLocal('phylosophyProducts', mappedData)
        createNotification('ok', 'Товары успешно добавлены в корзину')
    }

    const getProductsFromStorage = () => {
        return getDataFromLocal('phylosophyProducts') || [];
    }

    const findProduct = (data, product) => {
        return data.find((elem) => elem.id === product.id)
    }

    return {
        setToStorage
    }
}

export default fabricStorage
