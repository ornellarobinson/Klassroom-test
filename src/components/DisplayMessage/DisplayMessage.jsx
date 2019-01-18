// @flow

import React, { PureComponent } from 'react'

const moment = require('moment')

type Props = {
  message: {
    from: string,
    at: Date,
    message: string
  }
}

export default class DisplayMessage extends PureComponent<Props> {
  render() {
    const { from, at, message } = this.props.message

    return (
      <div className="display-message d-flex align-items-center my-2">
        <div className="user-avatar" />
        <div className="display-message__details ml-3">
          <div className="details__username-date">
            <span className="font-weight-bold">{from}</span>
            <span className="details__date ml-2">{moment(at).format('LT')}</span>
          </div>
          {message}
        </div>
      </div>
    )
  }
}
