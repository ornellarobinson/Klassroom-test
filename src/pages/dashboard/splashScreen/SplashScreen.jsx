// @flow

import React, { PureComponent } from 'react'
import classNames from 'classnames'

import slackLogo from 'ressources/slack-logo.png'
import klassroomLogo from 'ressources/klassroom-logo.svg'

type Props = {
  show: boolean,
  close: () => {},
}

export default class SplashScreen extends PureComponent<Props> {
  render() {
    const { show, close } = this.props;
    console.log('show', show)
    return (
      <div className={classNames('splash-screen text-dark', {
        'splash-screen--active': show
      })}>
        <div className="splash-screen__container m-auto d-flex flex-column justify-content-center align-items-center">
          <img className="splash-screen__slack-logo" src={slackLogo} alt="slack-logo" />
          <img className="splash-screen__klassroom-logo" src={klassroomLogo} alt="klassroom-logo" />          
          <div className="splash-screen__button my-4 d-flex justify-content-end">
            <button type="button" className="btn btn-outline-dark p-3" onClick={() => {}}>Create Channel</button>
            <button type="button" className="btn btn-outline-primary ml-2 p-3" onClick={() => {}}>Create Private Chat</button>
          </div>
        </div>
      </div>
    )
  }
}
