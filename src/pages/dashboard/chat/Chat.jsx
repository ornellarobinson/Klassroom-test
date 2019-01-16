// @flow

import React, { PureComponent } from 'react';

import PostMessage from 'components/PostMessage';
import DisplayMessage from 'components/DisplayMessage'
import messages from './Chat.util'

const moment = require('moment');

type Props = {
  type: string
}

export default class Chat extends PureComponent<Props> {
  render() {
    const { type } = this.props;
    const name = "general";
  
    return (
      <div className="chat p-4">
        {moment(messages[0].at).format('LL')}
        {
          messages.map(message =>
            <DisplayMessage message={message}/> 
          )
        }
        <PostMessage type={type} name={name} />
      </div>
    )
  }
}
