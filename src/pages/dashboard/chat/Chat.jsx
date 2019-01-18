// @flow

import React, { PureComponent } from 'react'
import _ from 'lodash'

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
  messages: {}
}

type State = {
  messages: Array<{}>
}

export default class Chat extends PureComponent<Props, State> {
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
    const { type, name } = this.props
    const { messages } = this.state
    
    if (!this.state.messages) return null

    return (
      <div className="chat">
        <ChatTopbar />
        <div className="chat__container d-flex flex-column justify-content-end">
          <div className="chat__content-postmessage-wrapper">
            <div className="chat__content-container d-flex">
              <div className="chat__content p-4 w-100">
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
