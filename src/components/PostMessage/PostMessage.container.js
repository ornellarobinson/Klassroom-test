import PostMessage from './PostMessage'
import { connect } from 'react-redux'

import { postMessage } from 'redux-files/actions/messages.action'

const mapDispatchToProps = dispatch => {
  return {
    postMessage: (channelType, newMessage) => {
      dispatch(postMessage(channelType, newMessage))
    }
  }
}

export default connect(null, mapDispatchToProps)(PostMessage)
