import React from "react"
import {FormControl, InputLabel, 
        OutlinedInput, InputAdornment,
        IconButton,FormHelperText } from '@mui/material'
import {Visibility, VisibilityOff} from '@mui/icons-material'

export default function CustomPasswordField(
    {password, showPassword, handleChange, toggleShowPassword, error, errorMessage}) {
    return (
        <FormControl error={error} style={{width: 400, marginBottom: 16}} variant="outlined" margin="dense" placeholder="Enter your password">
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                <OutlinedInput
                    id="outlined-adornment-password"
                    name="password"
                    placeholder="Enter your password"
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={handleChange}
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={toggleShowPassword}
                            edge="end"
                            >
                            {showPassword ? <Visibility/> : <VisibilityOff/>}
                            </IconButton>
                        </InputAdornment>
                    }
                    label="Password"
            />
            <FormHelperText>{errorMessage}</FormHelperText>
         </FormControl>
    )
}