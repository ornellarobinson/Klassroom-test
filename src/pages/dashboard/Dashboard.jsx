import React, { PureComponent } from 'react'

import Sidebar from './sidebar'

export default class Dashboard extends PureComponent {
  render() {
    return (
      <div className="container-fluid h-100">
         <div className="row h-100">
          <Sidebar />
          <div className="klassroom-test">
            Slack Klassroom
          </div>
        </div>
      </div>
    )
  }
}
