import React, { Component } from 'react'
import Congrats from './Congrats'
import GuessedWord from './GuessedWord'

export default class JotoApp extends Component {
    render() {
        return (
            <div className='container'>
                <h1>JOTTO</h1>
                <Congrats success={true} />
                <GuessedWord  guessedWords = {[
                    {guessedWord: 'train', letterMatchCount: 3}
                ]} />
            </div>
            
        )
    }
}
