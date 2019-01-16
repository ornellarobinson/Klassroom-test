import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import UserStatus from 'components/UserStatus';

export default class Sidebar extends PureComponent {
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
            <UserStatus status="online" />
            <span className="user__name pl-2">damien</span>
          </div>
        </div>
        <div className="sidebar__nav p-3" />
      </div>
    )
  }
}
