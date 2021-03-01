export const setDataToLocal = (key, data) => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(data))
    }
}

export const getDataFromLocal = key => {
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        const data = localStorage.getItem(key);
        return JSON.parse(data)
    }
}