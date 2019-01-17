import { connect } from 'react-redux'

import { postChannel } from 'redux-files/actions/channels.action'
import CreatePrivateChat from './CreatePrivateChat'

const mapStateToProps = state => {
  return {
    users: state.userProfile,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postChannel: (channelType, newChannel) => {
      dispatch(postChannel(channelType, newChannel))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePrivateChat)