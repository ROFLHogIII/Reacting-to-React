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
            name: 'Frodo',
            place: 'Mordor',
            text: `How I have longed for Death's gentle caresse.`,
        }
    }
    render() {
        <input placeholder="Hello" />
        return <h1>Hello {this.state.name} and {this.props.name}! Welcome to {this.state.place}, {this.props.place}! {this.text}</h1>;

    }
};

export default App;