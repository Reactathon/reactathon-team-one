import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import meetingsReducer from '../reducers/meetingsReducer'
import selectMeetingReducer from '../reducers/selectMeetingReducer';
import selectRoomReducer from '../reducers/selectRoomReducer';

const rootReducer = combineReducers({
        meetings: meetingsReducer,
        selectedMeeting: selectMeetingReducer,
        selectedRoom: selectRoomReducer
    })

export default () => {
    const store = createStore(rootReducer, applyMiddleware(thunk, logger))
    return store
}