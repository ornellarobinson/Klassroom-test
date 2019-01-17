// @flow

import React, { PureComponent } from 'react';
import _ from 'lodash';

import PostMessage from 'components/PostMessage';
import DisplayMessage from 'components/DisplayMessage'
import ChatTopbar from './chatTopbar';

const moment = require('moment');

type Props = {
  type: string
}

export default class Chat extends PureComponent<Props> {
  state = {
    messages: this.props.messages[this.props.type].filter(
      message => message.name === this.props.name
    ),
  }
  
  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.setState({
        messages:  this.props.messages[this.props.type].filter(
          message => message.name === this.props.name
        ),
      })
    }
  }

  render() {
    const { type, name } = this.props;
    const { messages } = this.state;
    
    if (!this.state.messages) return null;

    return (
      <div className="chat">
        <ChatTopbar />
        <div className="chat__container d-flex flex-column justify-content-end">
          <div className="chat__content-postmessage-wrapper">
            <div className="chat__content-container d-flex">
              <div className="chat__content p-4 w-100">
                {
                  !_.isEmpty(messages) && moment(messages[0].at).format('LL')}
                {
                  messages.map((message, index) =>
                    <DisplayMessage key={index} message={message}/> 
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
