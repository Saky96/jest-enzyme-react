import React from 'react'

export default class ClickCounterApp extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            counter: 0,
            error: false
        }
    }

    render() {
        return (
            <div data-test='component-click-counter-app'>
                <h1 data-test='counter-display'>The counter is currently { this.state.error ? 0 : this.state.counter}</h1>
                {this.state.error ? <h2 data-test='error-display'>Error: Counter cannot be less than 0.</h2> : null}
                <button
                    onClick={() => {
                        if(this.state.counter >= 0){
                            this.setState({ counter: this.state.counter + 1, error: false })
                        }
                        
                    }}
                    data-test='increment-button'>increment
                </button>
                <button
                    onClick={() => {
                        if(this.state.counter <= 0){
                            this.setState({error: true})
                        }
                        else{
                            this.setState({ counter: this.state.counter - 1 })
                        }
                    }}
                    data-test='decrement-button'>decrement
                </button>
            </div>
        )
    }
}
