import { SELECTED_MEETING } from '../actions/meetingActionTypes';

const meetingsReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_MEETING:
      return action.meeting;
    default:
      return state;
  }
};

export default meetingsReducer;
