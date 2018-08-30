// import React from 'react';
import React, { Component } from 'react';

// const App = (props) => {
//     let element = <h1>Hello {props.name}! Welcome to {props.place}!</h1>;
//     return element;
// }

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: 'the grey',
            place: 'Mordor',
            text: `How I have longed for Death's gentle caresse`,
        }
    }
    GandalfsTitle = (value) => {
        this.setState({ title: value });
    }
    render() {
        return (
            <div>
                <input
                    placeholder="Gandalf's Title"
                    value={this.state.name}
                    onChange={(event) => this.GandalfsTitle(event.target.value)}
                />
                <h1>Hello {this.props.name}, {this.state.title}! Welcome to {this.props.place}, {this.state.place}!</h1>
                <h1>{this.props.name}, {this.state.title}: {this.state.text}.</h1>
            </div>
        );
    }
};

export default App;