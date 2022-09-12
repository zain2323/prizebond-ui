import React from "react"
import Announcements from "../Announcements"
import ResultList from "../ResultList"
import UpcomingSchedule from "../UpcomingSchedule"
import HomeDescription from "../HomeDescription"

export default function HomePage() {
    return (
        <>
            <Announcements/>
            <ResultList/>
            <UpcomingSchedule/>
            <HomeDescription/>
        </>
    )
}