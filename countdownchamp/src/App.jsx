import React, { Component } from 'react';
import Clock from './Clock';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            deadline: 'December 25, 2018',
            newDeadLine: ''
        }
    }

    changeDeadline() {
        // this.setState({ deadline: 'November 25, 2018' })
        // console.log('state', this.state);
        this.setState({ deadline: this.state.newDeadLine });
    }
    render() {
        return (
            <div className="App">
                <div className="App-title">
                    Countdown to {this.state.deadline}
                </div>
                <Clock />
                <div>
                    <input
                        placeholder='new date'
                        onChange={event => this.setState({ newDeadLine: event.target.value })}
                    />
                    <button onClick={() => this.changeDeadline()}>
                        Submit
                    </button>
                </div>

            </div>
        )
    }
}

export default App;
