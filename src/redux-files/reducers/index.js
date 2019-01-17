import { combineReducers } from 'redux';
import userProfile from './userProfile.reducer'
import messages from './messages.reducer'
import channels from './channels.reducer'

export default combineReducers({ 
  channels,
  messages,
  userProfile,
})