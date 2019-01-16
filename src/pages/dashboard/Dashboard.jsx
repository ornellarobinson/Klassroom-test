import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidebar from './sidebar'
import Chat from './chat'

export default class Dashboard extends PureComponent {
  render() {
    return (
      <Router>
        <div className="container-fluid h-100">
          <div className="row h-100">
            <Sidebar />
            <Route path='/channels' render={() => <Chat type="channel" />} />
            <Route path='/private' render={() => <Chat type="private" />} />
          </div>
        </div>
      </Router>
    )
  }
}
