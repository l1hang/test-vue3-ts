// 定义存储键名
const STORAGE_KEY = {
    TOKEN: 'token',
    USER_INFO: 'user_info'
}

// 获取存储的值
function getItem(key: string): any {
    const value = localStorage.getItem(key)
    if (value) {
        return JSON.parse(value)
    }
    return null
}

// 设置存储的值
function setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value))
}

// 删除存储的值
function removeItem(key: string): void {
    localStorage.removeItem(key)
}

export {
    STORAGE_KEY,
    getItem,
    setItem,
    removeItem
}
