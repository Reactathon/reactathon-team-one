import React from 'react'
import {Meeting} from '../Meeting/Meeting'
import {connect} from 'react-redux'

const MeetingList = ({meetings}) => {
    const meetingList = meetings.map((data, index) => <Meeting key={index} data={data}/>)

    return(
        <ul>
            {meetingList}
        </ul>
    )
}

const mapStateToProps = state => {
  return {
    meetings: state.meetings
  }
}

export const AllMeetingList = connect(mapStateToProps)(MeetingList)
