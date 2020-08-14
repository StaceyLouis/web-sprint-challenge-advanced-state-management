
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import {Provider} from 'react-redux'
import thunk from 'thunk'
import reducer from './reducers/reducer'
import "./index.css";
import App from "./App";
import Village from './components/village'


const store = createStore(reducer, applyMiddleware(thunk))

function App () {
    return (
        <div>
            <h1> Smurfs </h1>
            <div>
                <Village />
            
                </div>
        </div>
    )
}

ReactDOM.render(<Provider store ={store}><App/></Provider>, document.getElementById("root"));
