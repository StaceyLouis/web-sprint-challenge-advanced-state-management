import React,{useState} from 'react'
import {connect} from 'react-redux'
import {postSmurf} from '../actions/action'

const inititialState = {
    name: "",
    age:"",
    height:''
}

const NewSmurf = props => {
    const [smurf, setSmurf] = useState(inititialState)
const handleChanges = e => {
    setSmurf({...smurf, 
        [e.target.name]:e.target.value})
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
    <div className="form-wrap">
    <form onSubmit={onSubmit}>
        <h1> Smurf Registration</h1> <hr/>
<label htmlFor="name">Name</label> <br/>
<input 
type="text"
name="name"
id="name"
onChange={handleChanges}
value={smurf.name} />
<br/>

<label htmlFor="Age">Age</label><br/>
<input
type="text"
name="age"
value={smurf.age}
onChange={handleChanges} />
<br/>
<label htmlFor="height">Height</label><br/>
<input
type="text"
name="height"
value={smurf.height}
onChange={handleChanges} />
<br/>
<button onClick={onSubmit}>Register New Smurf</button>

    </form>
    
    </div>
   
)
}


export default connect(null, {postSmurf})(NewSmurf)