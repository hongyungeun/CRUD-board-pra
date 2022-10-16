import {combineReducers} from 'redux'
import reducer from './reducer'
import loginReducer from './loginReducer'
import signup from './signup'
import boardDetailReducer from './boardDetailReducer'
import boardPageReducer from './boardPageReducer'
export default combineReducers({
  reducer,
  loginReducer,
  signup,
  boardDetailReducer,
  boardPageReducer
})