import { ADD_MEETING } from '../actions/meetingActionTypes'

const mockMeetings = [
    {start: '2018-01-10T10:00:00', end: '2018-01-10T10:00:15', attendees: 'a', organiser: 't', room: 'Atrium', title: 'Meeting1'},
    {start: '2018-01-10T13:00:00', end: '2018-01-10T14:00:00', attendees: 'b', organiser: 'd', room: 'Bazaar', title: 'Meeting2'},
    {start: '2018-01-10T15:00:00', end: '2018-01-10T16:30:00', attendees: 'c', organiser: 'd', room: 'Void', title: 'Meeting3'},
    {start: '2018-01-11T10:00:00', end: '2018-01-11T11:00:00', attendees: 'd', organiser: 'd', room: 'Turb', title: 'Meeting4'},
    {start: '2018-01-11T12:00:00', end: '2018-01-11T13:00:00', attendees: 'e', organiser: 'd', room: 'Lep', title: 'Meeting5'}
    ]

const meetingsReducer = (state = mockMeetings, action) => {

    switch (action.type) {
        case ADD_MEETING:
            return [
            ...state,
            {
                start: action.start,
                end: action.end,
                attendees: action.attendees,
                organiser: action.organiser,
                room: action.room,
                title: action.title
            }
            ]
        default:
            return state
    }
}

export default meetingsReducer