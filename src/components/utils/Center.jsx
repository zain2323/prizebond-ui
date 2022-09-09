import React from "react"
import Box from '@mui/material/Box'

export default function({children}) {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            >
            {children}
        </Box>
    )
}