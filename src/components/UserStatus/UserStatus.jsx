// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';

type Props = {
  status: string,
}

export default class UserStatus extends PureComponent<Props> {
  static defaultProps = {
    status: 'offline'
  }

  render() {
    const { status } = this.props;

    return (
      <div className={classNames('d-inline-flex user-status', {
        'user-status__online': status === 'online',
        'user-status__offline': status === 'offline',
      })} />
    )
  }
}
