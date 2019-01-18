import { connect } from 'react-redux'
import { withRouter } from "react-router-dom"

import Dashboard from './Dashboard'

const mapStateToProps = state => {
  return {
    channels: state.channels
  }
}

export default withRouter(connect(mapStateToProps, null)(Dashboard))