import React,{useState} from 'react'
import {connect} from 'react-redux'
import {postSmurf} from '../actions/action'

const NewSmurf = props => {
    const [smurf, setSmurf] = useState({name: "", age: '', heiht: ''})
const handleChanges = e => {
    setSmurf({...smurf, [e.target.name]:e.tget.value})
}

const onSubmit = e => {
    e.preventDefault();
    props.postSmurf(smurf)
    setSmurf({
        name: '',
        age: '',
        height:''
    })
}

return (   
    <div>
    <form onSubmit={onSubmit}>
<label htmlFor="name">Name</label>
<input 
type="text"
name="name"
id="name"
onChange={handleChanges}
value={smurf.name} />

<label htmlFor="Age">Age</label>
<input
type="text"
name="age"
value={smurf.age}
onChange={handleChanges} />

<label htmlFor="height">Height</label>
<input
type="text"
name="height"
value={smurf.height}
onChange={handleChanges} />

<button onClick={onSubmit}>Add New Smurf</button>

    </form>
    
    </div>
   
)
}


export default connect(null, {postSmurf})(NewSmurf)