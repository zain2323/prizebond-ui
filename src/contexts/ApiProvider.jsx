import React from "react"
import Client from '../PrizebondClient'

const ApiContext = React.createContext()

export default function ApiProvider({ children }) {
    const api = new Client()
    console.log(api.remove)
    return (
        <ApiContext.Provider value={api}>
            { children }
        </ApiContext.Provider>
    )
}

export function useApi() {
    return React.useContext(ApiContext)
}