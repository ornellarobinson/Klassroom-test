// @flow

import React, { PureComponent } from 'react'
import { Route, withRouter } from "react-router-dom";
import _ from 'lodash'

import Sidebar from './sidebar'
import Chat from './chat'

import CreatePrivateChat from './sidebar/createPrivateChat';
import CreateChannel from './sidebar/createChannel'
import SplashScreen from './splashScreen';

type Props = {
  location: *,
}

class Dashboard extends PureComponent<Props> {
  state = {
    newPrivateChat: false,
    newChannel: false,
    showSplashScreen: _.isEmpty(this.props.channels),
  }

  closeCreateModal = (stateToChange, newPath) => {
    const { history, location } = this.props;

    this.setState({ [stateToChange]: false})
    if (newPath !== location.pathname)
      history.push(newPath);
  }

  openCreateModal = (stateToChange) => {
    this.setState({ [stateToChange]: true })
  }

  render() {
    const { newPrivateChat, newChannel, showSplashScreen } = this.state;
    const { pathname } = this.props.location;
    const channelName = pathname.split('/')[2];
    console.log('showSplashScreen value:', this.state.showSplashScreen);

    return (
        <div className="container-fluid h-100">
          <div className="row h-100">
            {
              !showSplashScreen ?
              <React.Fragment>
                <Route path='/channels' render={() => <Chat type="channel" name={channelName} />} />
                <Route path='/private' render={() => <Chat type="private" name={channelName} />} />
                <Sidebar {...this.props} updateDashboardState={stateToChange => this.openCreateModal(stateToChange)} />
                <CreatePrivateChat show={newPrivateChat} close={newPath => this.closeCreateModal('newPrivateChat', newPath)} />
                <CreateChannel show={newChannel} close={newPath => this.closeCreateModal('newChannel', newPath)} />
              </React.Fragment>
                :
              <SplashScreen show={showSplashScreen} close={() => console.log('close function has been called')} />
            }
          </div>
        </div>
    )
  }
}

export default withRouter(Dashboard)