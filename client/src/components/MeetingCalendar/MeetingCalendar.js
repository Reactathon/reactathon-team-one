import React from 'react'
import {connect} from 'react-redux'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.momentLocalizer(moment);

const Calendar = ({meetings}) => (

    <BigCalendar
      popup
      views={['month', 'day', 'agenda']}
      events={meetings}
      startAccessor='start'
      endAccessor='end'
      step={60}
    />
)

const mapStateToProps = state => {
  return {
    meetings: state.meetings
  }
}

export const MeetingCalendar = connect(mapStateToProps)(Calendar)