import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import "./components/App.css"
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
            <div><Smurf/></div>
            <div><Village/></div>
           
        </div>
    )
}


ReactDOM.render(<Provider store={store}><Apps /></Provider>, document.getElementById("root"));
