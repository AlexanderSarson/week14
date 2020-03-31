import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';
import App7 from './App7';
import App8 from './todo/App8';
import App9 from './liftingstate2/App9';
let app;

const DontUseMeForReal = () => {
    return (
        <div className="App" onClick={handleSelect}>
         <a href="/"  className="x" id="app1">ex1 - state</a> &nbsp;
         <a href="/"  className="x" id="app2">ex2 - state</a> &nbsp;
         <a href="/"  className="x" id="app3">ex3 - state</a> &nbsp;
         <a href="/"  className="x" id="app4">ex1 - lists</a> &nbsp;
         <a href="/"  className="x" id="app5">ex2 - lists</a> &nbsp;
         <a href="/"  className="x" id="app6">ex1 - forms</a> &nbsp;
         <a href="/"  className="x" id="app7">ex2 - forms</a> &nbsp;
         <a href="/"  className="x" id="app8">ex1 - Lifting State - Todo</a> &nbsp;
         <a href="/"  className="x" id="app9">ex2 - Lifting State 2</a> &nbsp;
         {/* Add as many as you have exercises, but remember className="x" */}
         {app}
        </div>
    )
}

function handleSelect(event) {
    event.preventDefault();
    if(event.target.className!=="x"){
      return
    }  
    const id = event.target.id;
    switch (id) {
        case "app1": app = <App1 initialValue={5} incrementValue={3}/>; break;
        case "app2": app = <App2 />; break;
        case "app3": app = <App3 />; break;
        case "app4": app = <App4 />; break;
        case "app5": app = <App5 />; break;
        case "app6": app = <App6 />; break;
        case "app7": app = <App7 />; break;
        case "app8": app = <App8 />; break;
        case "app9": app = <App9 />; break;
    }
    ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));
}

ReactDOM.render(<DontUseMeForReal />, document.getElementById('root'));