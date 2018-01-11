import React from 'react'
import {AllMeetingList} from '../../components/MeetingList/MeetingList'
import {MeetingCalendar} from '../../components/MeetingCalendar/MeetingCalendar'

const Landing = () => (
    <div>
        <h2>Welcome to Jonah's First Reactathon!</h2>
        <AllMeetingList></AllMeetingList>
        <MeetingCalendar></MeetingCalendar>
    </div>
    )

export default Landing