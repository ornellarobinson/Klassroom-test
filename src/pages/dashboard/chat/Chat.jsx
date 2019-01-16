// @flow

import React, { PureComponent } from 'react';
import PostMessage from 'components/PostMessage';

type Props = {
  type: string
}

export default class Chat extends PureComponent<Props> {
  render() {
    const { type } = this.props;
    const name = "general";

    return (
      <div className="chat p-4">
        {type}
        <PostMessage type={type} name={name} />
      </div>
    )
  }
}
