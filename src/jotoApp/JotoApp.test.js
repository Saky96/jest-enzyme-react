import React from 'react';
import {shallow} from 'enzyme'

import Input from './Input';
import { storeFactory } from '../../test/testUtils';
import JotoApp, {UnConnectedJotoApp} from './JotoApp';

const setup = (initialState = {}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<JotoApp store={store} />).dive().dive()
    // console.log('joto app wrapper: ', wrapper.debug())
    return wrapper
}

describe('Redux props', () => {
    test('should get `success` state from redux ', () => {
        const success = true;
        const wrapper = setup({success});
        const successProps = wrapper.instance().props.success;
        expect(successProps).toBe(success);
    });

    test('should get secret word state from redux', () => {
        const secretWord = 'party';
        const wrapper = setup({secretWord});
        const secretWordProps = wrapper.instance().props.secretWord;
        expect(secretWordProps).toBe(secretWord);
    });

    test('should get access to guessedWords state from redux', () => {
        const guessedWords = [{guessedWord: 'train', letterMatchCount: 3}];
        const wrapper = setup({guessedWords});
        const guessedWordsProps = wrapper.instance().props.guessedWords;
        expect(guessedWordsProps).toEqual(guessedWords);
    });

    test('should check `getSecretWord` action creator is a function on the props', () => {
        const wrapper = setup();
        const getSecretWordProp = wrapper.instance().props.getSecretWord;
        expect(getSecretWordProp).toBeInstanceOf(Function)
    });

    test('should `getSecretWord` runs on App mount', () => {
        const getSecretWordMock = jest.fn();

        const props = {
            getSecretWord: getSecretWordMock,
            success: false,
            guessedWords: [] 
        }

        // set up the app component with getSecretWordMock as the getSecretWord prop
        const wrapper = shallow(<UnConnectedJotoApp {...props} />)

        //run lifecycle method
        wrapper.instance().componentDidMount()

        //Check to see if mock ran
        const getSecretWordCallCount = getSecretWordMock.mock.calls.length;

        expect(getSecretWordCallCount).toBe(1);
    });
});