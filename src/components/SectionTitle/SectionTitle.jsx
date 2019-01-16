// @flow

import React, { PureComponent } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  name: string,
}

export default class SectionTitle extends PureComponent<Props> {
  render() {
    const { name } = this.props;

    return (
      <div className="section-title px-4 mt-4 d-flex justify-content-between align-items-center">
        <span>{name}</span>
        <FontAwesomeIcon icon="plus-circle" size="1x"/>
      </div>
    )
  }
}
