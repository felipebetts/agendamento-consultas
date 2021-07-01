import { createContext, useEffect, useState } from "react";
import { localStorageUserKey } from "../utils/constants";

export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    // const [token, setToken] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem(localStorageUserKey) 
        if ((!user || user === 'none') && token) {
            setUser({
                token
            })
        } 
        if (!token) {
            setUser('none')
        }
    }, [])

    // useEffect(() => {
    //     if (user?.token) {

    //     }
    // }, [user])

    // useEffect(() => {
        // console.log('token: ', token)
        // const currentUser = false // JSON.parse(localStorage.getItem(localStorageUserKey))
        // if (currentUser && currentUser !== user) {
        //     setUser(currentUser)
        // } else {
        //     setUser('none')
        // }

        // console.log('user: ', user)
    // }, [])

    return (
        <UserContext.Provider
            value={{
                user
            }}
        >
            { children }
        </UserContext.Provider>
    )
}