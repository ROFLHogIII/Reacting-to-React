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
            title: 'the Grey',
            place: 'Mordor',
            text: `How I have longed for Death's gentle caresse`,
            hasLoaded: false,
        }
    }
    ClickToBegin = () => {
        this.setState({ hasLoaded: true })
    }
    ClickToEnd = () => {
        this.setState({ hasLoaded: false })
    }
    GandalfsTitle = (value) => {
        this.setState({ title: value });
    }
    Place = (value) => {
        this.setState({ place: value });
    }
    WhaChuSay = (value) => {
        this.setState({ text: value });
    }
    render() {
        if (this.state.hasLoaded) {
            return (
                <React.Fragment>
                    <input
                        placeholder="Gandalf's Title"
                        value={this.state.name}
                        onChange={(event) => this.GandalfsTitle(event.target.value)}
                    />
                    <input
                        placeholder="Place"
                        value={this.state.name}
                        onChange={(event) => this.Place(event.target.value)}
                    />
                    <input
                        placeholder="What did you say?"
                        value={this.state.name}
                        onChange={(event) => this.WhaChuSay(event.target.value)}
                    />
                    <div>
                        <button onClick={() => this.ClickToEnd()}>Don't click me.</button>
                    </div>
                    <h1>Hello {this.props.name + ", " + this.state.title}! Welcome to {this.props.place}: {this.state.place}!</h1>
                    <h1>{this.props.name + ", " + this.state.title}: {this.state.text}.</h1>
                </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <h1>Loading...</h1>
                    <button onClick={() => this.ClickToBegin()}>Click to Begin</button>
                </React.Fragment>
            )
        }

    }
};

export default App;