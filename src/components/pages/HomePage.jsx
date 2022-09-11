import React from "react"
import Announcements from "../Announcements"
import ResultList from "../ResultList"
import UpcomingSchedule from "../UpcomingSchedule"

export default function HomePage() {
    return (
        <>
            <Announcements/>
            <ResultList/>
            <UpcomingSchedule/>
        </>
    )
}