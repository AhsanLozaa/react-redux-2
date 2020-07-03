// Where all the reducers are combined together

import counterReducer from './counter';
import {combineReducers} from 'redux'


// Combining Reducers
const allReducers = combineReducers({
    myCount: counterReducer
})

export default allReducers;