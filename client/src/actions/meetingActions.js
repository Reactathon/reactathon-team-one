import { ADD_MEETING } from './meetingActionTypes'

export const addMeeting = meeting => {
    return {
        type: ADD_MEETING,
        meeting
    }
}