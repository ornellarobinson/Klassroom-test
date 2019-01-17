// @flow

import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withRouter } from "react-router";

import UserStatus from 'components/UserStatus';
import SearchBar from 'components/SearchBar';
import SectionTitle from 'components/SectionTitle'
import NavigationItem from 'components/NavigationItem';

type ChannelArray = {
  path: string,
  icon: string,
  online: boolean,
  name: string,
}

type Props = {
  location: *,
  updateDashboardState: () => {},
  channels: {
    channel: Array<ChannelArray>,
    private: Array<ChannelArray>
  }
}

type State = {
  newChat: boolean,
}

class Sidebar extends PureComponent<Props, State> {
  render() {
    const { channels, updateDashboardState } = this.props;

    return (
      <React.Fragment>
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
            <div className="sidebar__item mt-3 px-4">
              <FontAwesomeIcon icon="comment" size="sm" />
              <span className="ml-2">All Threads</span>
            </div>
            <SectionTitle name="Channels" functionClickTrigger={() => updateDashboardState('newChannel')} />          
            {
              channels.channel.map(channel =>
              <NavigationItem key={channel.name} item={channel} />)
            }
            <SectionTitle name="Direct Messages" functionClickTrigger={() => updateDashboardState('newPrivateChat')} />
            {
              channels.private.map(privateMessage =>
              <NavigationItem key={privateMessage.name} item={privateMessage} />)
            }
            <div className="sidebar__item mt-4 px-4">
              <FontAwesomeIcon icon="plus" size="sm" />
              <span className="ml-2">Invite People</span>
            </div>
            <SectionTitle name="App" />
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default withRouter(Sidebar);