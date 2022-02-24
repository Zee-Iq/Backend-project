import { createContext, useState } from "react";

export const loginContext = createContext()

export default function LoginContextProvider({children}) {

    const [who, setWho]= useState()

    return (
        <loginContext.Provider value={{who, setWho}}>
            {children}
        </loginContext.Provider>
    )

}

