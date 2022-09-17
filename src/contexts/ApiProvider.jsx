import React from "react"
import Client from '../Client'

const ApiContext = React.createContext()

export default function ApiProvider({ children }) {
    const api = new Client()

    return (
        <ApiContext.Provider value={api}>
            { children }
        </ApiContext.Provider>
    )
}

export function useApi() {
    return React.useContext(ApiContext)
}