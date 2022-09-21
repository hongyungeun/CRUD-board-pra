import {combineReducers} from 'redux'
import reducer from './reducer'
import loginReducer from './loginReducer'
export default combineReducers({
  reducer,
  loginReducer
})