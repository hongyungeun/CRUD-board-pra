import {combineReducers} from 'redux'
import reducer from './reducer'
import loginReducer from './loginReducer'
import signup from './signup'
import boardDetailReducer from './boardDetailReducer'
export default combineReducers({
  reducer,
  loginReducer,
  signup,
  boardDetailReducer
})