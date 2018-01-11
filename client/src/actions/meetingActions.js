import { ADD_MEETING, SELECTED_MEETING } from './meetingActionTypes'

export const addMeeting = meeting => {
    return {
        type: ADD_MEETING,
        meeting
    }
}

export const selectMeeting = meeting => {
  return {
    type: SELECTED_MEETING,
    meeting
  }
}