import React from 'react'
import { shallow } from 'enzyme';

import Dashboard from './Dashboard'

describe('Dashboard component', () => {
  const dashboardWrapper = shallow(<Dashboard />);

  it('should render sames components as componentsToBeCalled array', () => {
    expect(dashboardWrapper.find('SplashScreen')).toBe(true)
  })
})