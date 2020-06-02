export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS',
    GUESS_WORD: 'GUESS_WORD'
}

// /**
//  * @function correctGuess
//  * @returns {object} - Action object with type 'CORRECT_GUESS'.
//  */
// export function correctGuess(){
//     return {type: actionTypes.CORRECT_GUESS};
// }

/**
 * Returns Redux Thunk function that dispatches `GUESS_WORD` action and conditionally  `CORRECT_GUESS` action
 * @function guessWord
 * @param {string} guessWord - Guessed word 
 * @returns {function} - Redux thunk function.
 */
export const guessWord = (guessWord) => {
    return function(dispatch, getState){

    }
}