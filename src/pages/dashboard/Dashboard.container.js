import { connect } from 'react-redux'
import Dashboard from './Dashboard'

const mapStateToProps = state => {
  return {
    channels: state.channels
  }
}

export default connect(mapStateToProps, null)(Dashboard)