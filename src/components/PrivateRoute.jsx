import React from "react";
import { useLocation, Navigate } from "react-router-dom"
import { useUser } from "../contexts/UserProvider"
import { useFlash } from '../contexts/FlashProvider'

export default function PrivateRoute({ children }) {

    const { user } = useUser()
    const location = useLocation()
    const flash = useFlash();

    React.useEffect(() => {
        if (user === null) {
            flash("Login required", "You need to login to access this page.", "info");
        }
    }, [user])

    if (user === undefined) {
        return null
    }
    else if (user) {
        return children
    }
    else {
        const url = location.pathname + location.search + location.hash;
        return <Navigate to="/login" state={{ next: url }} />
    }
}
