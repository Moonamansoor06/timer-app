import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import TimerClock from "./Components/TimerClock/TimerClock"

describe('App', () => {
	it('should render a div', () => {
		let container = shallow(<App />);
		expect(container.find('div').length).toEqual(1);
});

	let container:any = shallow(<App />)
  
	it("should render a <div />", () => {
	  expect(container.find("div").length).toEqual(1)
	})
  
	it("should render the Timer Component", () => {
	  expect(container.containsMatchingElement(<TimerClock />)).toEqual(true)
	})
  })