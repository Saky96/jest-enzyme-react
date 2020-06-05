import React, { Component } from 'react'
import { connect } from 'react-redux';
import { guessWord } from './actions';
export class UnConnectedInput extends Component {

    constructor(props){
        super(props);

        this.state = { 
            currentGuess: null
        }

        // bind this to submitGuessWordEvent
        this.submitGuessWordEvent = this.submitGuessWordEvent.bind(this)
    }

    submitGuessWordEvent(evt){
        evt.preventDefault();
        const guessedWord = this.state.currentGuess;

        if(guessWord && guessWord.length>0){
            this.props.guessWord(guessedWord)

        }

    }

    render() {
        const Contents = this.props.success ? null : (
            <form className='form-inline'>
                <input
                    data-test='input-box'
                    className='mb-2 mx-sm-3'
                    type='text'
                    placeholder='enter guess'
                    value = {this.state.currentGuess}
                    onChange = {(evt) => this.setState({currentGuess: evt.target.value})}
                />
                <button 
                    data-test='submit-button' 
                    type='submit' 
                    className='btn btn-primary mb-2' 
                    onClick={this.submitGuessWordEvent}
                >
                    Submit
                </button>
            </form>
        );
        return (
            <div data-test='component-input'>
                {Contents}
            </div>
        )
    }
}

const mapStateToProps = ({ success }) => {
    return { success };
}

export default connect(mapStateToProps, { guessWord })(UnConnectedInput);
