import React from 'react'
import propTypes from 'prop-types';
/**
 * Functional react component for Congratulatory message
 * @function
 * @param {object} props - React props.
 * @returns {JSX.Element} - Rendered Component (or null if 'success' prop is false)
 */
export default function Congrats(props) {
    if(props.success){
        return (
            <div data-test='component-congrats' >
                <span data-test='message-congrats'>
                    Congratulations! you guessed the word.
                </span>
            </div>
        )
    }
    else{
        return(
            <div data-test='component-congrats'></div>
        )
    }
    
}

Congrats.propTypes = {
    success: propTypes.bool.isRequired
}
