import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditRoundedIcon from '@mui/icons-material/EditRounded';


export default function EditInfo({api, flash, label, type, setUser}) {
    const [open, setOpen] = React.useState(false);
    const [updatedInfo, setUpdatedInfo] = React.useState("")

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (event) => {
        const {value} = event.target
        setUpdatedInfo(value)
    }
    
    async function handleSubmit() {
        label === "Confirmed status" ? await resendEmail() : await updateInfo()
        setOpen(false);
        setUpdatedInfo("")
        
    }

    async function updateInfo() {
        const name = label === "Name" ? updatedInfo : null
        const email = label === "Email Address" ? updatedInfo : null
        const password = label === "Password" ? updatedInfo : null
        const body = {
            name: name,
            email: email,
            password: password
        }
        const response =  await api.put("/about", body)
        if (response.ok) {
            setUser(response.body)
            flash("Success", "Your account info has been updated successfully.", "info")
        }
        else {
            flash("Validation Failed", "Please check your input fields verifies the constraints", "error")
        }
    }

    async function resendEmail() {
        flash("Success", "We have sent you a confirmation email. Please check your inbox and follow the onscreen prompts.", "info")
        console.log("sending email")
    }

    return (
        <div>
            <>
                <a className='EditButton' onClick={handleClickOpen}>
                    Edit
                    <EditRoundedIcon />
                </a>
            </>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>{`Update ${label}`}</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        {label === "Confirmed status" ?
                         "To update your confirmed status you need to verify your email address. Type 'Yes' below to resend confirmation email again." 
                         : `To change your ${label.toLowerCase()}, enter your new ${label.toLowerCase()} here.`}
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label={label}
                        type={type}
                        fullWidth
                        name="updatedInfo"
                        value={updatedInfo}
                        onChange={handleChange}
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleSubmit}>{label === "Confirmed status" ? "Resend Email" : "Update" }</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
