// @flow

import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  type: string,
  name: string,
  postMessage: (string, {
      name: string,
      from: string,
      at: number,
      message: string
  }) => {}
}

type State = {
  newMessage: string
}

export default class PostMessage extends PureComponent<Props, State> {
  state = {
    newMessage: ''
  }

//$FlowFixMe
  onEnterPress = e => {
    //$FlowFixMe
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault()
      this.onSubmit()
    }
  }
  
  onSubmit = () => {
    const { postMessage, name, type } = this.props
    const { newMessage } = this.state
    
    if (newMessage.trim() !== '') {
      postMessage(type,
        {
          name: name,
          from: 'damien',
          at: Date.now(),
          message: newMessage
        },
      )
    }
    this.setState({ newMessage: ''})
  }

  render() {
    const { type, name } = this.props
    const { newMessage } = this.state

    return (
      <React.Fragment>
        <div className="post-message d-flex justify-content-between mx-4">
          <div className="post-message__add-media d-flex justify-content-center">
            <span>+</span>
          </div>
          <textarea
            className="post-message__textarea border-0 w-100 px-2"
            placeholder={`Message ${type === 'channel' ? '#' : ''}${name}`}
            onKeyDown={this.onEnterPress}
            onChange={e => this.setState({ newMessage: e.target.value })}
            value={newMessage}
          />
          <div className="post-message__add-mention-emoji d-flex align-items-center">
            <FontAwesomeIcon className="post-message__add-mention mx-2" icon="at" size="1x" />
            <FontAwesomeIcon className="post-message__add-emoji mx-2" icon="smile" size="1x" />
          </div>
        </ div>
      </React.Fragment>
    )
  }
}
