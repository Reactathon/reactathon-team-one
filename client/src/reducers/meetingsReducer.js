import { ADD_MEETING } from '../actions/meetingActionTypes'

const mockMeetings = [
    {from: '2018/01/10T10:00:00', to: '2018/01/10T10:00:15', attendees: 'a', organiser: 't', room: 'Atrium'},
    {from: '2018/01/10T13:00:00', to: '2018/01/10T14:00:00', attendees: 'b', organiser: 'd', room: 'Bazaar'},
    {from: '2018/01/10T15:00:00', to: '2018/01/15T10:30:00', attendees: 'c', organiser: 'd', room: 'Void'},
    {from: '2018/01/11T10:00:00', to: '2018/01/10T11:00:00', attendees: 'd', organiser: 'd', room: 'Turb'},
    {from: '2018/01/11T12:00:00', to: '2018/01/11T13:00:00', attendees: 'e', organiser: 'd', room: 'Lep'}
    ]

const meetingsReducer = (state = mockMeetings, action) => {

    switch (action.type) {
        case ADD_MEETING:
            return [
            ...state,
            {
                from: action.from,
                to: action.to,
                attendees: action.attendees,
                organiser: action.organiser,
                room: action.room
            }
            ]
        default:
            return state
    }
}

export default meetingsReducer