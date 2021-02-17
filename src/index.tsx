import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import "./styles/main.sass";

// ! - we are sure that the element exists
const root = document.querySelector("#root")!;

ReactDOM.render(<App />, root);