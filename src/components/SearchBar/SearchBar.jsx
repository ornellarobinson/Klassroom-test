// @flow

import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classNames from 'classnames';

type Props = {
  icon: string,
  placeHolder: string,
  classToApply: string,
}

export default class SearchBar extends PureComponent<Props> {
  static defaultProps = {
    icon: 'search',
    placeHolder: 'Search',
    classToApply: 'sidebar__search-bar'
  }

  render() {
    const { icon, placeHolder, classToApply } = this.props;

    return (
      <div className={classNames('search-bar p-2 d-flex align-items-center', classToApply)}>
        <FontAwesomeIcon icon={icon} className="mx-1" size="xs" />
        <input className="search-bar__input ml-2" type="text" placeholder={placeHolder} />
      </div>
    )
  }
}
