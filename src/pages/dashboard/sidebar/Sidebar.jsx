// @flow

import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import UserStatus from 'components/UserStatus';
import SearchBar from 'components/SearchBar';
import NavigationItem from 'components/NavigationItem';
import { channels, privateMessages } from './Sidebar.util.js';
import { withRouter } from "react-router";

type Props = {
  location: *,
}

class Sidebar extends PureComponent<Props> {
  render() {
    return (
      <div className="sidebar">
        <div className="sidebar__settings px-4 d-flex flex-column">
          <div className="settings__group position-relative pt-1">
            <span className="group__title font-weight-bold">Klassroom</span>
            <FontAwesomeIcon icon="angle-down" className="group__dropdown mx-1" size="xs" />
            <FontAwesomeIcon icon="bell" className="group__notif" size="lg" />            
          </div>
          <div className="settings__user">
            <UserStatus online={false} />
            <span className="user__name pl-2">damien</span>
          </div>
        </div>
        <div className="sidebar__nav mt-2">
          <SearchBar icon="align-justify" placeHolder="Jump to..." classToApply="sidebar__search-bar"/>
          {
            channels.map(channel =>
            <NavigationItem item={channel} />)
          }
          {
            privateMessages.map(privateMessage =>
            <NavigationItem item={privateMessage} />)
          }
        </div>
      </div>
    )
  }
}

export default withRouter(Sidebar);