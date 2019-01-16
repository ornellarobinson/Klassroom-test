// @flow

import React, { PureComponent } from 'react';
import classNames from 'classnames';

type Props = {
  online: boolean,
}

export default class UserStatus extends PureComponent<Props> {
  static defaultProps = {
    online: false
  }

  render() {
    const { online } = this.props;

    return (
      <div className={classNames('d-inline-flex user-status', {
        'user-status__online': online,
        'user-status__offline': !online,
      })} />
    )
  }
}
