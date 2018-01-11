import { SELECT_ROOM } from '../actions/meetingActionTypes';

const selectRoomReducer = (state = {}, action) => {
  switch (action.type) {
    case SELECT_ROOM:
      return action.room;
    default:
      return state;
  }
};

export default selectRoomReducer;
