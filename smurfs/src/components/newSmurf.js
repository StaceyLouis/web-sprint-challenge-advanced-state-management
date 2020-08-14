import React from 'react'
import {connect} from 'react-redux'
import {newSmurf} from '../actions'

import {input, inputLabel, Button}

const newSmurf = props => {
    const [smurf, setSmurf] = useState({name: "", age: '', heiht: ''})
const handleChanges = e => {
    setSmurf({...smurf, [e.target.name]:e.tget.value})
}

const inputValues = e => {
    e.preventDefault();
    props.newSmurf(smurf)
    setSmurf({
        name: '',
        age: '',
        height:''
    })
}

return {
    <form onSubmit
}
}