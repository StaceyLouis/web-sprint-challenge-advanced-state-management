
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import {reducer} from './reducers/reducer'
import "./index.css";
import Apps from "./components/App";
import Village from './components/village'
import Smurf from './components/newSmurf'


const store = createStore(reducer, applyMiddleware(thunk))

function App () {
    return (
        <div>
            <h1> Smurfs </h1>
            <div>
                <Village />
            <Smurf  />
                </div>
        </div>
    )
}

ReactDOM.render(<Provider store ={store}><Apps /></Provider>, document.getElementById("root"));
