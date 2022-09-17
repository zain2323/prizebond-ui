import React from "react"
import {useApi} from "./ApiProvider"

const UserContext = React.createContext()

export default function UserProvider({ children }) {
    const [user, setUser] = React.useState()
    const api = useApi()

    React.useEffect(() => {
        (async () => {
          if (api.isAuthenticated) {
            const response = await api.get('/me');
            setUser(response.ok ? response.body : null);
          }
          else {
            setUser(null);
          }
        })();
      }, [api]);

    const login = async (email, password) => {
        const result = await api.login(email, password)
        if (result === 'ok') {
            const response = await api.get("/me")
            setUser(response.ok ? response.body : null)
            return response.ok
        }
        return result
    }
  
    const logout = async () => {
        await api.logout()
         setUser(null)
    }

    return (
        <UserContext.Provider value={{ user, setUser, logout, login}}>
            {children}
        </UserContext.Provider>
    )
}

export function useUser() {
    return React.useContext(UserContext)
}