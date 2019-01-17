// @flow

import React, { PureComponent } from 'react';
import _ from 'lodash';

import PostMessage from 'components/PostMessage';
import DisplayMessage from 'components/DisplayMessage'

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
    const { type, getMessages, name } = this.props;
    const { messages } = this.state;
    
    if (!this.state.messages) return null;

    return (
      <div className="chat p-4">
        {
          !_.isEmpty(messages) && moment(messages[0].at).format('LL')}
        {
          messages.map((message, index) =>
            <DisplayMessage key={index} message={message}/> 
          )
        }
        <PostMessage type={type} name={name} />
      </div>
    )
  }
}