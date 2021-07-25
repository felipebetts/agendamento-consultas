import { createContext, useState } from "react";


export const DrawerContext = createContext()

export const DrawerContextProvider = ({ children }) => {

    const [open, setOpen] = useState(false)

    return (
        <DrawerContext.Provider value={{
            open,
            setOpen
        }}>
            { children }
        </DrawerContext.Provider>
    )
}