import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {reducer} from './reducers/reducer'
import Village from './components/village'
import Smurf from './components/smurf' 

const store = createStore(reducer, applyMiddleware(thunk))
function Apps() {
    return (
        <div>
            <h1> Smurfs</h1>
            <div><Village/></div>
            <div><Smurf/></div>
        </div>
    )
}


ReactDOM.render(<Provider store={store}><Apps /></Provider>, document.getElementById("root"));
