import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import { LoadingBarContext } from '../../contexts/LoadingBarProvider';
import { useContext } from 'react';

export default function ProgressBar() {
    const { loadingBar } = useContext(LoadingBarContext);
    return ( 
    <>
        { loadingBar && 
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        }
    </>
    );
}