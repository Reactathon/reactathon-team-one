import { createStore, combineReducers, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import meetingsReducer from '../reducers/meetingsReducer'
import selectMeetingReducer from '../reducers/selectMeetingReducer';

const rootReducer = combineReducers({meetings: meetingsReducer, selectedMeeting: selectMeetingReducer})

export default () => {
    const store = createStore(rootReducer, applyMiddleware(thunk, logger))
    return store
}