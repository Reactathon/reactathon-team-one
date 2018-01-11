import { ADD_MEETING } from '../actions/meetingActionTypes'

const mockMeetings = [
    {start: new Date(2018,0,10,10,0,0), end: new Date(2018,0,10,10,15,0), attendees: '5', organiser: 'Jessica David', room: 'Atrium', title: 'Hadoop'},
    {start: new Date(2018,0,10,13,0,0), end: new Date(2018,0,10,14,0,0), attendees: '10', organiser: 'Dan Sarbu', room: 'Bazaar', title: 'Grilling some newbies'},
    {start: new Date(2018,0,10,15,0,0), end: new Date(2018,0,10,16,30,0), attendees: '2', organiser: 'Matthew Solo', room: 'Forum', title: 'OTPP Status'},
    {start: new Date(2018,0,11,10,0,0), end: new Date(2018,0,11,11,0,0), attendees: '1', organiser: 'Glenn Archer', room: 'Bazaar', title: 'Interview'},
    {start: new Date(2018,0,11,12,0,0), end: new Date(2018,0,11,13,0,0), attendees: '4', organiser: 'Abdi', room: 'Town Hall', title: 'Route One Status'}
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