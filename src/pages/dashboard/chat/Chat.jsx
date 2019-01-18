// @flow

import React, { PureComponent } from 'react'
import _ from 'lodash'
import { withRouter } from 'react-router-dom'

//$FlowFixMe
import PostMessage from 'components/PostMessage'
//$FlowFixMe
import DisplayMessage from 'components/DisplayMessage'
//$FlowFixMe
import ChatTopbar from './chatTopbar'

const moment = require('moment')

type Props = {
  type: string,
  name: string,
  location: {
    pathname: string
  },
  messages: {}
}

type State = {
  messages: Array<{}>
}

class Chat extends PureComponent<Props, State> {
  state = {
    messages: this.props.messages[this.props.type].filter(
      message => message.name === this.props.name
    ),
  }
  
  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props) {
      this.setState({
        messages:  this.props.messages[this.props.type].filter(
          message => message.name === this.props.name
        ),
      })
    }
  }

  render() {
    const { type, name, location } = this.props
    const { messages } = this.state
    
    const channelType = location.pathname.split('/')[1]
    const channelName = location.pathname.split('/')[2]

    if (!this.state.messages) return null

    return (
      <div className="chat">
        <ChatTopbar channelType={channelType} channelName={channelName} />
        <div className="chat__container d-flex flex-column justify-content-end">
          <div className="chat__content-postmessage-wrapper">
            <div className="chat__content-container d-flex">
              <div className="chat__content p-4 w-100">
                {
                  channelType === 'channels' &&
                    <div className="content__top">
                      <span className="content__top-title font-weight-bold">
                          {channelType === 'channels' ? '# ' : ''}
                          {channelName}
                      </span>
                      <div className="content__description">
                        <span className="description__mention">
                          {`@damien`}
                        </span>
                        {` created this channel on `}
                        {moment().format('LL')}.
                        This is the very beginning of the <b> {channelType === 'channels' ? '# ' : ''}{channelName}</b> channel.
                      </div>
                    </div>
                }
                {
                  !_.isEmpty(messages) &&
                  <div className="content__chat-date">
                    <div className='hr'>
                      <span className='hr-title px-4 font-weight-bold'>
                        {
                          //$FlowFixMe
                          moment(messages[0].at).format('LL')
                        }
                      </span>
                    </div>
                  </div>
                }
                {
                  messages &&
                  messages.map((message, index) =>
                    <DisplayMessage key={index} message={message} /> 
                  )
                }
              </div>
            </div>
            <div className="chat__post-message-wrapper pt-4">
              <PostMessage type={type} name={name} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Chat)