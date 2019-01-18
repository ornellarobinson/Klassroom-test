// @flow

import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import SearchBar from 'components/SearchBar'
type Props = {

}

class ChatTopbar extends PureComponent<Props> {
  render() {
    const { pathname } = this.props.location;
    const channelType = pathname.split('/')[1]
    const channelName = pathname.split('/')[2];

    return (
      <div className="chat-topbar w-100">
        <div className="topbar__right ml-4 py-2">
          <div className="right__channel-name font-weight-bold">
            {channelType === 'channels' ? '#' : ''}
            {channelName}
          </div>
          <div className="text-secondary d-flex align-items-center">
            <FontAwesomeIcon icon="star" size="xs" />
            <span className="mx-2">|</span>
            <FontAwesomeIcon icon="user" size="xs" />
            <span className="right__channel-infos mx-1">4</span>
            <span className="mx-2">|</span>
            <FontAwesomeIcon icon="thumbtack" size="xs" />
            <span className="right__channel-infos mx-1">0</span>
            <span className="mx-2">|</span>
            <span className="right__channel-infos mx-1">text</span>
          </div>
        </div>
        <div className="topbar__left text-secondary mr-4">
          <FontAwesomeIcon icon="phone" size="xs" />
          <FontAwesomeIcon icon="info-circle" size="xs" />
          <FontAwesomeIcon icon="cog" size="xs" />
          <SearchBar icon='search' placeHolder='Search' classToApply="topbar__searchbar" />
          <FontAwesomeIcon icon="at" size="xs" />
          <FontAwesomeIcon icon="star" size="xs" />
          <FontAwesomeIcon icon="ellipsis-v" size="xs" />
        </div>
      </div>
    )
  }
}

export default withRouter(ChatTopbar)
