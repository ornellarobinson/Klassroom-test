import { connect } from 'react-redux'

import { getChannels } from 'redux-files/actions/channels.action'
import Sidebar from './Sidebar'

const mapStateToProps = state => {
  return {
    messages: state.messages,
    channels: state.channels
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getChannels: () => {
      dispatch(getChannels())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)