import {correctGuess, actionTypes} from './';

describe('correctGuess actions test group', () => {
    test('should return object with type "CORRECT_GUESS"', () => {
        const action = correctGuess();
        expect(action).toEqual({type: actionTypes.CORRECT_GUESS})
    });
});