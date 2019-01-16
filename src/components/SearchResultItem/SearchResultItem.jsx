// @flow

import React, { PureComponent } from 'react'
import UserStatus from 'components/UserStatus/UserStatus';

type Props = {}

export default class SearchResultItem extends PureComponent<Props> {
  render() {
    return (
      <div className="search-result-item border-top d-flex align-items-center py-3">
        <div className="user-avatar"/>
        <div className="search-result-item__user-details pl-4">
          <span className="font-weight-bold mr-2">orobinson</span>
          <UserStatus online={true} />
          <span className="ml-2">Ornella Robinson</span>
        </div>
      </div>
    )
  }
}
