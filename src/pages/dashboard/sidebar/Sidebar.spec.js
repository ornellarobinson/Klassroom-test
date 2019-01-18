import React from 'react'
import { shallow } from 'enzyme'

import Sidebar from './Sidebar'

const fontAwesomeIcons = ['angle-down', 'bell']

describe('Sidebar component', () => {
	const sidebarWrapper = shallow(<Sidebar />)

	it('should render two children. One for the settings and the other one for the navigation', () => {
		expect(sidebarWrapper.children().length).toEqual(2)
	})

	it('should call FontAwesomeIcon two times', () => {
		expect(sidebarWrapper.find('FontAwesomeIcon').length).toEqual(2)
	})

	it('should render icons in the same order as fontAwesomeIcons array', () => {
		fontAwesomeIcons.forEach((icon, index) => {
			expect(sidebarWrapper.find('FontAwesomeIcon').at(index).props('icon').icon).toEqual(icon)
		})
	})

	it('should have two childrens for class called : sidebar__settings', () => {
		expect(sidebarWrapper.find('.sidebar__settings').children().length).toEqual(2)
	})

	it('should have three children for class called : settings__group. One child for the group title and the others for the icons', () => {
		expect(sidebarWrapper.find('.settings__group').children().length).toEqual(3)
	})

	it('should have two children for class called : settings__user. One child for the user status and the other one for the username', () => {
		expect(sidebarWrapper.find('.settings__user').children().length).toEqual(2)
	})
})


