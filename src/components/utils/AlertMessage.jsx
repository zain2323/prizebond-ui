import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

export default function AlertMessage({hideAlert, open, message, severity, error}) {

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={!open}>
        <Alert severity={severity}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={hideAlert}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{mb: 2}}
        >
        <AlertTitle>{error}</AlertTitle>
        {message}
        </Alert>
      </Collapse>
    </Box>
  );
}
