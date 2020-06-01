/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed word. 
 * @param {*} secretWord - Secret word
 * @returns {number} - Number of letters matched between guessed word and secret word
 */
export function getLetterMatchCount(guessedWord, secretWord) {
    let secredLetterSet = new Set(secretWord.split(''));
    let guessedLetterSet = new Set(guessedWord.split(''));
  
    let matchedLetters = [...secredLetterSet].filter((letter) => guessedLetterSet.has(letter))
    return matchedLetters.length;
}
