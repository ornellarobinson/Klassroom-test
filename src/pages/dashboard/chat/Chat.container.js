import { connect } from 'react-redux'

import { getMessages } from 'redux-files/actions/messages.action.js'
import Chat from './Chat'

const mapStateToProps = state => {
  return {
    users: state.userProfile,
    messages: state.messages
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getMessages: channelInfos => {
      dispatch(getMessages(channelInfos))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat)