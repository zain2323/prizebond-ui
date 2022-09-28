import { useLocation, Navigate } from "react-router-dom"
import { useUser } from "../contexts/UserProvider"
import { useFlash } from '../contexts/FlashProvider'

export default function PrivateRoute({children}) {
    const flash = useFlash();
    const { user } = useUser()
    const location = useLocation()

    if (user === undefined) {
        return null
    }  
    else if (user) {
        return children
    }
    else {
        const url = location.pathname + location.search + location.hash;
        console.log(url)
        flash("Login required", "You need to login to access this page.", "info");
        return <Navigate to="/login" state={{next: url}}/>
    }
}