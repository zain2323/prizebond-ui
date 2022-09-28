import React from "react"
import Announcements from "../Announcements"
import ResultList from "../ResultList"
import UpcomingSchedule from "../UpcomingSchedule"
import HomeDescription from "../HomeDescription"
import {motion} from "framer-motion";

export default function HomePage() {
    return (
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}
            >
            <Announcements/>
            <ResultList/>
            <UpcomingSchedule/>
            <HomeDescription/>
        </motion.div>
    )
}