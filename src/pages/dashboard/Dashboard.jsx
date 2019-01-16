import React, { PureComponent } from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom";

import Sidebar from './sidebar'

export default class Dashboard extends PureComponent {
  render() {
    return (
      <Router>
        <div className="container-fluid h-100">
          <div className="row h-100">
            <Sidebar />
            <div className="klassroom-test">
              {/* Slack Klassroom */}
            </div>
            <Route path='/channels' render={() => <div>Channel</div>} />
            <Route path='/private' render={() => <div>Private</div>} />
            <Route exact path='/' render={() => <div>Home</div>} />
          </div>
        </div>
      </Router>
    )
  }
}
