import React from 'react'
import {connect} from 'react-redux'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import {selectMeeting} from '../../actions/meetingActions.js'

BigCalendar.momentLocalizer(moment);

class Calendar extends React.Component {

    render() {
        return (
            <BigCalendar
              popup
              selectable
              views={['month', 'day', 'agenda']}
              events={this.props.meetings}
              startAccessor='start'
              endAccessor='end'
              step={60}
              onSelectEvent={meeting => this.props.selectMeeting(meeting)}
            />
        )
    }
}

const mapStateToProps = state => {
  return {
    meetings: state.meetings
  }
}

const mapDispatchToProps = dispatch => {
    return {
        selectMeeting: meeting => dispatch(selectMeeting(meeting))
    }
}

export const MeetingCalendar = connect(mapStateToProps, mapDispatchToProps)(Calendar)