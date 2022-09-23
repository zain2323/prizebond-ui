import React from 'react';
import ProgressBar from "../utils/ProgessBar";

export default function ProgressBarBetweenRoutes({children}){
    return (
        <>
        <ProgressBar>
            {children}
        </ProgressBar>
        </>
    )
}