import { connect } from 'react-redux'

import { getMessages } from 'redux-files/actions/messages.action'
import { getChannels } from 'redux-files/actions/channels.action'
import Sidebar from './Sidebar'

const mapStateToProps = state => {
  return {
    messages: state.messages,
    channels: state.channels
  }
}

export default connect(mapStateToProps, null)(Sidebar)