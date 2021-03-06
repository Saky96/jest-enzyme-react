import { actionTypes } from '../actions';

/**
 * @function secretWordReducer
 * @param {string} state - state before reducer.
 * @param {object} action - Action sent to reducer.
 * @returns - new state (secretWord payload dispatched from action).
 */
export default (state=null, action) => {

    switch (action.type) {
        case actionTypes.SET_SECRET_WORD:
            return action.payload 
        default:
            return state
    }
    return state
}