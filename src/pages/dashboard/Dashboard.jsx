// @flow

import React, { PureComponent } from 'react'
import { Route, withRouter } from "react-router-dom";

import Sidebar from './sidebar'
import Chat from './chat'

import CreatePrivateChat from './sidebar/createPrivateChat';

type Props = {
  location: *,
}

class Dashboard extends PureComponent<Props> {
  state = {
    newPrivateChat: false
  }

  closeNewPrivateChat = newPath => {
    const { history, location } = this.props;

    this.setState({ newPrivateChat: false})
    if (newPath !== location.pathname)
      history.push(newPath);
  }

  render() {
    const { newPrivateChat } = this.state;
    const { pathname } = this.props.location;
    const channelName = pathname.split('/')[2];
    
    return (
        <div className="container-fluid h-100">
          <div className="row h-100">
            <Sidebar {...this.props} updateDashboardState={() => this.setState({ newPrivateChat: true })} />
            <Route path='/channels' render={() => <Chat type="channel" name={channelName} />} />
            <Route path='/private' render={() => <Chat type="private" name={channelName} />} />
            <CreatePrivateChat show={newPrivateChat} close={newPath => this.closeNewPrivateChat(newPath)} />            
          </div>
        </div>
    )
  }
}

export default withRouter(Dashboard)