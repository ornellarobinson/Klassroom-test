// @flow

import React, { PureComponent } from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//$FlowFixMe
import SearchResultItem from 'components/SearchResultItem/SearchResultItem'

type ChannelArray = {
  path: string,
  icon: string,
  online: boolean,
  name: string,
}

type Props = {
  postChannel: (string, {}) => {},
  channels: {
    channel: Array<ChannelArray>,
    private: Array<ChannelArray>
  },
  location: {
    pathname: string,
  },
  show: boolean,
  close: string => {},
  users: {
    username: string,
    name: string,
    online: boolean,
  }
}

type State = {
  username: Array<string>
}

class CreatePrivateChat extends PureComponent<Props, State> {
  state = {
    username: [],
  }

  selectResultItem = userInfos => {
    const { username } = this.state

    if (!username.includes(userInfos.username)) {
      const newUsername = [...username]

      newUsername.push(userInfos.username)
      this.setState({ username: newUsername })
    }
  }
  
  submitNewPrivateChat = () => {
    const { postChannel } = this.props
    const { username } = this.state
    const newChatName = username.join()

    if (!_.isEmpty(newChatName)) {
      postChannel('private',
        {
          path: `/private/${newChatName}`,
          icon: null,
          online: true,
          name: newChatName
        }
      )
      this.callPropsToCloseModal()
    }
  }

  callPropsToCloseModal = () => {
    const { username } = this.state
    const { location, channels } = this.props

    if (!_.isEmpty(username))
      this.props.close(`/private/${username.join()}`)
    else if ((_.isEmpty(channels.private) && _.isEmpty(channels.channel)))
      this.props.close('/')
    else
      this.props.close(location.pathname)
    this.setState({ username: [] })
  }

  render() {
    const { show, users } = this.props
    const { username } = this.state

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
              Direct Messages
            </div>
            <div className="d-flex">
              <div className="create-channel__users-selected p-3 w-100">
              {
                //$FlowFixMe
                username.map(username => 
                  <span key={username} className="badge badge-secondary p-3 m-1">{username}</span>)
              }
              </div>
              <button
                type="button"
                className="btn btn-info p-4"
                onClick={() => this.submitNewPrivateChat()}
              >
                <h3>GO</h3>
              </button>
            </div>
            <div className="create-private-chat__user-list">
              {
                //$FlowFixMe
                users.map(userInfos =>
                  <SearchResultItem key={userInfos.id} userInfos={userInfos} selectItem={() => this.selectResultItem(userInfos)}/>
                )
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(CreatePrivateChat)