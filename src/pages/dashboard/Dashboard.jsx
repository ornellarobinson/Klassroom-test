// @flow

import React, { PureComponent } from 'react'
import { Route } from "react-router-dom"
import _ from 'lodash'

import Sidebar from './sidebar'
import Chat from './chat'

import CreatePrivateChat from './sidebar/createPrivateChat'
import CreateChannel from './sidebar/createChannel'
import SplashScreen from './splashScreen'

type Props = {
  location: *,
}

class Dashboard extends PureComponent<Props> {
  state = {
    newPrivateChat: false,
    newChannel: false,
    showSplashScreen: (_.isEmpty(this.props.channels.private) && _.isEmpty(this.props.channels.channel)),
  }

  closeCreateModal = (stateToChange, newPath) => {
    const { history, location } = this.props

    this.setState({ [stateToChange]: false, showSplashScreen: false})
    if (newPath !== location.pathname)
      history.push(newPath)
  }

  openCreateModal = (stateToChange) => {
    this.setState({ [stateToChange]: true })
  }

  handleRedirection = (newPath, newTypeToCreate) => {
    if (newPath === '/')
      this.setState({ showSplashScreen: true })
    else
      this.closeCreateModal(newTypeToCreate, newPath)
  }

  updateState = newType => {
    const stateCopy = _.cloneDeep(this.state)

    Object.keys(stateCopy).forEach(function(key){
      if (key === newType)
        stateCopy[key] = true
      else
        stateCopy[key] = false
    })
    this.setState(stateCopy)
  }

  render() {
    const { newPrivateChat, newChannel, showSplashScreen } = this.state
    const { pathname } = this.props.location
    const channelName = pathname.split('/')[2]

    return (
        <div className="container-fluid h-100">
          <div className="dashboard row h-100">
            {
              !showSplashScreen ?
              <React.Fragment>
                <Sidebar {...this.props} updateDashboardState={stateToChange => this.openCreateModal(stateToChange)} />
                <Route path='/channels' render={() => <Chat type="channel" name={channelName} />} />
                <Route path='/private' render={() => <Chat type="private" name={channelName} />} />
                <CreatePrivateChat show={newPrivateChat} close={newPath => this.handleRedirection(newPath, 'newPrivateChat')}
                />
                <CreateChannel show={newChannel} close={newPath => this.handleRedirection(newPath, 'newChannel')} />
              </React.Fragment>
                :
              <SplashScreen
                show={showSplashScreen}
                onButtonClicked={newType => this.updateState(newType)}
              />
            }
          </div>
        </div>
    )
  }
}

export default Dashboard