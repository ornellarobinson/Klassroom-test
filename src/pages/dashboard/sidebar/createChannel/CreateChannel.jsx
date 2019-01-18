// @flow

import React, { PureComponent } from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ToggleButton from 'react-toggle-button'

import SearchResultItem from 'components/SearchResultItem/SearchResultItem'

type Props = {
  show: boolean,
  close: () => {},
}

class CreateChannel extends PureComponent<Props> {
  state = {
    title: '',
    privateChannel: false,
    username: [],
    name: ''
  }

  selectResultItem = userInfos => {
    const { username } = this.state

    if (!username.includes(userInfos.username)) {
      const newUsername = [...username]

      newUsername.push(userInfos.username)
      this.setState({ username: newUsername })
    }
  }

  updateState = (newValue) => {
    if (!newValue)
      this.setState({ username: [] })
    this.setState({ privateChannel: newValue })
  }

  submitNewChannel = () => {
    const { postChannel } = this.props
    const { username, name, privateChannel } = this.state
    const newChatName = username.join()

    if (name && 0 !== name.length && name.trim() !== '') {
      postChannel('channel',
        {
          path: `/channels/${name}`,
          icon: privateChannel ? 'lock' : 'hashtag',
          online: false,
          name: name,
          users: newChatName,
        }
      )
      this.callPropsToCloseModal()
    }
  }

  callPropsToCloseModal = () => {
    const { name } = this.state
    const { pathname, channels } = this.props

    if (name !== '' )
      this.props.close(`/channels/${name}`)
    else if ((_.isEmpty(channels.private) && _.isEmpty(channels.channel)))
      this.props.close('/')
    else
      this.props.close(pathname)
    this.setState({ username: [], title: '', privateChannel: false, name: '' })
  }

  render() {
    const { show, users } = this.props
    const { username, privateChannel, name } = this.state
    
    return (
      <div className={classNames('create-channel', {
        'create-channel--active': show
      })}>
        <div className="d-flex flex-column w-100">
          <div className="create-channel__close-icon d-flex">
            <FontAwesomeIcon icon="times" size="2x" onClick={() => this.callPropsToCloseModal()} />
          </div>
          <div className="create-channel__search mx-auto">
            <div className="create-channel__title mb-4 font-weight-bold">
              {`Create a ${privateChannel ? 'private' : ''} channel`}
            </div>
            <label className="text-dark" htmlFor="channel-name">Name</label>
            <input className="create-channel__name w-100 p-3 mb-4" type="text" placeholder="General" value={name} onChange={e => this.setState({ name: e.target.value })} />
            <div className="create-channel__toggle">
              <ToggleButton
                inactiveLabel="Public"
                activeLabel="Private"
                thumbAnimateRange={[0, 64]}
                thumbIcon={
                  <div className="w-100 d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon icon="lock" size="xs" color="black" />
                  </div>}
                value={this.state.privateChannel}
                onToggle={(value) => {
                  this.updateState(!value)
                }} />
            </div>
            {
              privateChannel &&
              <div className="mt-4">
                <div className="d-flex">
                  <div className="create-channel__users-selected p-2 w-100">
                  {
                    username.map(username => 
                      <span key={username} className="badge badge-secondary p-3 m-1">{username}</span>)
                  }
                  </div>
                </div>
                <div className="create-private-chat__user-list">
                  {
                    users.map(userInfos =>
                      <SearchResultItem key={userInfos.id} userInfos={userInfos} selectItem={() => this.selectResultItem(userInfos)}/>
                    )
                  }
                </div>
            </div>
            }
            <div className="create-channel__button my-4 d-flex justify-content-end">
              <button type="button" className="btn btn-outline-dark p-3" onClick={() => this.callPropsToCloseModal()}>Cancel</button>
              <button type="button" className="btn btn-secondary ml-2 p-3" onClick={() => this.submitNewChannel()}>Create Channel</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(CreateChannel)
