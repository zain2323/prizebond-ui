import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditRoundedIcon from '@mui/icons-material/EditRounded';


export default function EditInfo({label, type}) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>{label === "Confirmed status" ? "Resend Email" : "Update" }</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
