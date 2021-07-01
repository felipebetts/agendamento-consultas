import { api } from "./apiClient"
import { localStorageUserKey } from '../utils/constants'



export const login = (loginData) => {
    return api('post', '/auth/login', loginData)
        .then(res => {
            console.log('res: ', res)
            if (res?.data && res?.status === 200) {
                localStorage.setItem(localStorageUserKey, res.data)
            }
            return res
        })
}

export const logout = () => {
    localStorage.removeItem(localStorageUserKey)
    if (localStorage.getItem(localStorageUserKey)) {
        return false
    } else {
        return true
    }
}