// @flow

import React, { PureComponent } from 'react'
import classNames from 'classnames'

import slackLogo from 'ressources/slack-logo.png'
import klassroomLogo from 'ressources/klassroom-logo.svg'

type Props = {
  show: boolean,
  onButtonClicked: () => {},
}

export default class SplashScreen extends PureComponent<Props> {
  render() {
    const { show, onButtonClicked } = this.props;
    
    return (
      <div className={classNames('splash-screen text-dark', {
        'splash-screen--active': show
      })}>
        <div className="splash-screen__container m-auto d-flex flex-column justify-content-center align-items-center px-4">
          <img className="splash-screen__slack-logo" src={slackLogo} alt="slack-logo" />
          <img className="splash-screen__klassroom-logo" src={klassroomLogo} alt="klassroom-logo" />          
          <div className="splash-screen__button my-4 d-flex justify-content-end">
            <button type="button" className="btn btn-outline-dark p-3" onClick={() => onButtonClicked('newChannel')}>Create Channel</button>
            <button type="button" className="btn btn-outline-primary ml-2 p-3" onClick={() => onButtonClicked('newPrivateChat')}>Create Private Chat</button>
          </div>
        </div>
      </div>
    )
  }
}
