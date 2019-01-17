// @flow

import React, { PureComponent } from 'react'

import UserStatus from 'components/UserStatus/UserStatus';

type Props = {
  userInfos: {
    username: string,
    name: string,
    online: boolean,
  }
}

export default class SearchResultItem extends PureComponent<Props> {
  render() {
    const { username, name, online } = this.props.userInfos;
    const { selectItem } = this.props;
    
    return (
      <div className="search-result-item border-top d-flex align-items-center p-3"
      onClick={selectItem}
      >
        <div className="user-avatar"/>
        <div className="search-result-item__user-details pl-4">
          <span className="font-weight-bold mr-2">{username}</span>
          <UserStatus online={online} />
          <span className="ml-2">{name}</span>
        </div>
      </div>
    )
  }
}
