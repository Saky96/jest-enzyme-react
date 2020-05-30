import React from 'react';
import {shallow} from 'enzyme'
import checkPropTypes from 'check-prop-types';

import Congrats from './Congrats';
import { findByTestAttr, checkProps } from '../../test/testUtils';

const defaultProps = {success: false}
/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup. 
 * @returns {ShallowWrapper}
 */
const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<Congrats {...setupProps}/>)
}

test('should render without error', () => {
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.length).toBe(1)
});

test('should render no text when "success" prop is false ', () => {
    const wrapper = setup({success: false});
    const component = findByTestAttr(wrapper, 'component-congrats')
    expect(component.text()).toBe('')
});

test('should render non-empty success message when success prop is true', () => {
    const wrapper = setup({success: true});
    const message = findByTestAttr(wrapper, 'message-congrats')
    expect(message.text().length).not.toBe(0)
});

test('should not throw warning with expected props', () => {
    const expectedProps = {success: false}
    checkProps(Congrats, expectedProps)
});