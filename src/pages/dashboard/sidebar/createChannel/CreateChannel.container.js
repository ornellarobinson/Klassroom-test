import { connect } from 'react-redux'

import { postChannel } from 'redux-files/actions/channels.action'
import CreateChannel from './CreateChannel'

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

export default connect(mapStateToProps, mapDispatchToProps)(CreateChannel)