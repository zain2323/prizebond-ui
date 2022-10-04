import React from "react";
import { io } from "socket.io-client";
 
const SocketContext = React.createContext()

export default function SocketProvider({ children }) {
    const socket = io("http://localhost:5000")
    return (
        <SocketContext.Provider value={socket}>
            { children }
        </SocketContext.Provider>
    )
}

export function useSocket() {
    return React.useContext(SocketContext)
}