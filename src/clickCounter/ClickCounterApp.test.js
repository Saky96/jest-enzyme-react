import React from 'react';
// import { render } from '@testing-library/react';
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ClickCounterApp from './ClickCounterApp';

Enzyme.configure({adapter: new EnzymeAdapter()})

test('should renders without error!', () => {
    const wrapper = shallow(<ClickCounterApp/>)
    const appComponent = wrapper.find("[data-test='component-click-counter-app']")
    // console.log('appComponent', wrapper.debug(appComponent))
    expect(appComponent.length).toBe(1)
});

test('should renders increment button ', () => {
    
});

test('should renders counter display', () => {
    
});

test('should counter starts at 0', () => {
    
});

test('should clicking button increments counter display', () => {
    
});
