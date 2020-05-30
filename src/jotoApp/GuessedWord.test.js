import React from 'react';
import { shallow } from 'enzyme'
import { checkProps, findByTestAttr } from '../../test/testUtils';
import GuessedWord from './GuessedWord';

const defaultProps = {
    guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }]
}

/**
 * Factory function to create a ShallowWrapper for the App component.
 * @function setup
 * @param {object} props - Component props specific to this setup. 
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    return shallow(<GuessedWord {...setupProps} />)
}

test('should not throw the warning with expected props', () => {
    checkProps(GuessedWord, defaultProps)
});

describe('if there are no words guessed', () => {
    let wrapper

    beforeEach(() => {
        wrapper = setup({guessedWords: []})
    })

    test('should render without errors', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words')
        expect(component.length).toBe(1)
    });

    test('should render instructions to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions')
        expect(instructions.text().length).not.toBe(0)
    });
});

describe('if there are words guessed', () => {
    
});