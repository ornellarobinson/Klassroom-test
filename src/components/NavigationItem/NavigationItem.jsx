// @flow

import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

import UserStatus from 'components/UserStatus'

type Props = {
  item: {
    path: string,
    icon: string,
    online: boolean,
    name: string
  }
}

export default class NavigationItem extends Component<Props> {
  render() {
    const { path, icon, online, name } = this.props.item;

    return (
      <NavLink to={path} activeClassName="navigation-item--active" className="navigation-item px-4 d-flex align-items-center">
        {
          icon === null ?
          <UserStatus online={online} /> 
          :
          <FontAwesomeIcon icon={icon} size="xs" />
        }
        <span className="nativation-item__name ml-3">{name}</span>
      </NavLink>
    )
  }
}
