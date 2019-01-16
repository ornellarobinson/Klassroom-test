// @flow

import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  type: string,
  name: string
}

export default class PostMessage extends PureComponent<Props> {
  onEnterPress = (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      this.formPostMessage.submit();
    }
  }
  
  render() {
    const { type, name } = this.props;

    return (
      <form ref={node => this.formPostMessage = node}>
        <div className="post-message d-flex justify-content-between">
          <div class="post-message__add-media d-flex justify-content-center">
            <span>+</span>
          </div>
          <textarea
            className="post-message__textarea border-0 w-100 px-2"
            placeholder={`Message ${type === 'channel' ? '#' : ''}${name}`}
            onKeyDown={this.onEnterPress}
          />
          <div className="post-message__add-mention-emoji d-flex align-items-center">
            <FontAwesomeIcon className="post-message__add-mention mx-2" icon="at" size="1x" />
            <FontAwesomeIcon className="post-message__add-emoji mx-2" icon="smile" size="1x" />
          </div>
        </ div>
      </form>
    )
  }
}
