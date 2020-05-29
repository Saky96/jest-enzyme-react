import React from 'react';
// import { render } from '@testing-library/react';
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ClickCounterApp from './ClickCounterApp';

Enzyme.configure({adapter: new EnzymeAdapter()})

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup. 
 * @param {object} state - Initial state setup. 
 * @returns {ShallowWrapper}
 */
const setup =  (props={}, state=null) => {
    const wrapper =  shallow(<ClickCounterApp {...props} />)
    if(state) wrapper.setState(state)
    return wrapper;
}

/**
 * Return shallow wrapper containing node(s) with the given data-test value.
 * @param {ShallowWrapper} wrapper - enzyme shallow wrapper to search within.
 * @param {string} val - value of data search attribute for search.
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

test('should renders without error!', () => {
    const wrapper = setup();
    const appComponent = findByTestAttr(wrapper, 'component-click-counter-app')
    // console.log('appComponent', wrapper.debug(appComponent))
    expect(appComponent.length).toBe(1)
});

test('should renders increment button ', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'increment-button')
    expect(button.length).toBe(1)
});

test('should render decrement button', () => {
    const wrapper = setup();
    const button = findByTestAttr(wrapper, 'decrement-button')
    expect(button.length).toBe(1)
});

test('should renders counter display', () => {
    const wrapper = setup();
    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.length).toBe(1)
});

test('should counter starts at 0', () => {
    const wrapper = setup();
    const initialCounterState = wrapper.state('counter')
    expect(initialCounterState).toBe(0)
}); 



test('should clicking increment button increments counter display', () => {
    const counter = 7
    const wrapper = setup(null, {counter});


    const button = findByTestAttr(wrapper, 'increment-button')
    button.simulate('click')

    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    console.log(counterDisplay.text())
    expect(counterDisplay.text()).toContain(counter+1)
});

test('should clicking decrement button decrements counter display', () => {
    const counter = 2
    const wrapper = setup(null, {counter})

    const button = findByTestAttr(wrapper, 'decrement-button')
    button.simulate('click')

    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.text()).toContain(counter-1)
});

test('counter should not go below zero', () => {
    const counter = 0
    const wrapper = setup(null, {counter})

    const button = findByTestAttr(wrapper, 'decrement-button')
    button.simulate('click')

    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.text()).toContain(0)
});

test('should display error message when counter gets below zero', () => {
    const counter = 0
    const wrapper = setup(null, {counter})

    const button = findByTestAttr(wrapper, 'decrement-button')
    button.simulate('click')

    const errorDisplay = findByTestAttr(wrapper, 'error-display')
    expect(errorDisplay.length).toBe(1)
});

test('should not display error message when counter gets above zero', () => {
    const counter = 0
    const wrapper = setup(null, {counter})

    const button = findByTestAttr(wrapper, 'increment-button')
    button.simulate('click')

    const errorDisplay = findByTestAttr(wrapper, 'error-display')
    expect(errorDisplay.length).toBe(0)
});
