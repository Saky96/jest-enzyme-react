import React, { Component } from 'react'
import Congrats from './Congrats'
import GuessedWord from './GuessedWord'
import { connect } from 'react-redux'
import { getSecretWord } from './actions';
import Input from './Input';

export class UnConnectedJotoApp extends Component {

    componentDidMount(){
        // get the secret word
        this.props.getSecretWord()
    }

    render() {
        return (
            <div className='container'>
                <h1>JOTTO</h1>
                <Congrats success={this.props.success} />
                <Input />
                <GuessedWord  guessedWords = {this.props.guessedWords} />
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    const {success, guessedWords, secretWord} = state;
    return {success, guessedWords, secretWord};
}

export default connect(mapStateToProps, {getSecretWord})(UnConnectedJotoApp)
