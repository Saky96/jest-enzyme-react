import checkPropTypes from 'check-prop-types';

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