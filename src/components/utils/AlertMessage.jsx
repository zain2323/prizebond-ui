import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';
import { FlashContext } from '../../contexts/FlashProvider';
import { useContext } from 'react';

export default function AlertMessage() {
  const { flashMessage, visible, hideFlash } = useContext(FlashContext);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={visible}>
        <Alert severity={flashMessage.type || "info"}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={hideFlash}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{mb: 2}}
        >
        <AlertTitle>{flashMessage.title}</AlertTitle>
        {flashMessage.message}
        </Alert>
      </Collapse>
    </Box>
  );
}
