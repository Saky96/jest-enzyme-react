import React from 'react';
import { shallow, EnzymeAdapter } from 'enzyme'

import Input, { UnConnectedInput } from './Input';
import { findByTestAttr, checkProps, storeFactory } from '../../test/testUtils';

const setup = (initialState = {}) => {
    const store = storeFactory(initialState);
    const wrapper = shallow(<Input store={store} />).dive().dive();
    return wrapper;
}

describe('render', () => {

    describe('word has not been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState)
        })
        test('should render component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1)
        });

        test('should render input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.length).toBe(1)
        });
        test('should render submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(1)
        });
    });

    describe('word has been guessed', () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: true };
            wrapper = setup(initialState)
        })
        test('should render component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input');
            expect(component.length).toBe(1)
        });

        test('should not render input box', () => {
            const inputBox = findByTestAttr(wrapper, 'input-box');
            expect(inputBox.length).toBe(0)
        });
        test('should not render submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.length).toBe(0)
        });
    });
});

describe('Redux props', () => {
    test('should get success piece of state as prop', () => {
        const success = true;
        const wrapper = setup({ success });
        const successProp = wrapper.instance().props.success;
        expect(successProp).toBe(success)
    });

    test('should check `guessWord` action creator is a function', () => {
        const wrapper = setup();
        const guessWordProp = wrapper.instance().props.guessWord;
        expect(guessWordProp).toBeInstanceOf(Function)
    });
});

describe('`guessWord action creator call`', () => {
    let guessWordMock;
    let wrapper;
    const guessedWord = 'train'
    beforeEach(() => {
        //Set up mock for `guessWord`
        guessWordMock = jest.fn();
        // const props = {
        //     guessWord: guessWordMock
        // }
        const wrapper = shallow(<UnConnectedInput guessWord= {guessWordMock} />)

        //add value to the input box    
        wrapper.setState({currentGuess: guessedWord})
        //simulate click
        const submitButton = findByTestAttr(wrapper, 'submit-button')
        submitButton.simulate('click', { preventDefault() {} })
 
    })

    test('should check `guessWord` called once onClick submit ', () => {

        //check to see if mock ran
        const guessWordCallCount = guessWordMock.mock.calls.length

        expect(guessWordCallCount).toBe(1)

    });

    test('should call guessWord with input value as argument', () => {
        const guessWordArg = guessWordMock.mock.calls[0][0]
        expect(guessWordArg).toBe(guessedWord);
    });
});

