import React, { PureComponent } from 'react'
import { Route, withRouter } from "react-router-dom";

import Sidebar from './sidebar'
import Chat from './chat'

class Dashboard extends PureComponent {
  render() {
    const { pathname } = this.props.location;
    const channelName = pathname.split('/')[2];

    return (
        <div className="container-fluid h-100">
          <div className="row h-100">
            <Sidebar />
            <Route path='/channels' render={() => <Chat type="channel" name={channelName} />} />
            <Route path='/private' render={() => <Chat type="private" name={channelName} />} />
          </div>
        </div>
    )
  }
}

export default withRouter(Dashboard)