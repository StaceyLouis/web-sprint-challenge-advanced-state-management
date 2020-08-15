import React from 'react'
import './App.css'

function SmurfCard(props) {
    const {smurf } = props;

    return(<div>
<div className="card" >
    <h2> Name</h2><p>{smurf.name}</p>
   <h2>Height:</h2> <p>{smurf.height}</p>
  <h2>Age:</h2><p> {smurf.age}</p>
</div>

    </div>)
}

export default SmurfCard