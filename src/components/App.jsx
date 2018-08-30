import React from 'react';

const App = (props) => {
    let element = <h1>Hello {props.name}! Welcome to {props.place}!</h1>;
    return element;
}

export default App;