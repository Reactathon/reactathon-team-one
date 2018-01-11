import { ADD_MEETING } from '../actions/meetingActionTypes'

const mockMeetings = [
    {start: new Date(2018,0,10,10,0,0), end: new Date(2018,0,10,10,15,0), attendees: 'a', organiser: 't', room: 'Atrium', title: 'Meeting1'},
    {start: new Date(2018,0,10,13,0,0), end: new Date(2018,0,10,14,0,0), attendees: 'b', organiser: 'd', room: 'Bazaar', title: 'Meeting2'},
    {start: new Date(2018,0,10,15,0,0), end: new Date(2018,0,10,16,30,0), attendees: 'c', organiser: 'd', room: 'Void', title: 'Meeting3'},
    {start: new Date(2018,0,11,10,0,0), end: new Date(2018,0,11,11,0,0), attendees: 'd', organiser: 'd', room: 'Turb', title: 'Meeting4'},
    {start: new Date(2018,0,11,12,0,0), end: new Date(2018,0,11,13,0,0), attendees: 'e', organiser: 'd', room: 'Lep', title: 'Meeting5'}
    ]



const meetingsReducer = (state = mockMeetings, action) => {

    switch (action.type) {
        case ADD_MEETING:
            return [
            ...state,
            {
                start: action.meeting.start,
                end: action.meeting.end,
                attendees: action.meeting.attendees,
                organiser: action.meeting.organiser,
                room: action.meeting.room,
                title: action.meeting.title
            }
            ]
        default:
            return state
    }
}

export default meetingsReducer