import checkPropTypes from 'check-prop-types';
import rootReducer from '../src/jotoApp/reducers';
import { createStore, applyMiddleware } from 'redux';

import { middlewares } from '../src/jotoApp/configureStore';

/**
 * Creates a testing store with imported reducers and middlewares.
 * globals: rootReducer, middlewares
 * @param {object} initialState - initial state for store
 * @function storeFactory
 * @returns {Store} - Redux store. 
 */
export const storeFactory = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(rootReducer, initialState);
}

/**
* Return shallow wrapper containing node(s) with the given data-test value. 
 * @param {ShallowWrapper} wrapper - enzyme shallow wrapper to search within.  
 * @param {string} val  - value of data search attribute for search.
 * @returns {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component, confirmingProps) =>{
    const propError = checkPropTypes(
        component.propTypes, 
        confirmingProps, 
        'prop', 
        component.name
    )
    expect(propError).toBeUndefined()
}