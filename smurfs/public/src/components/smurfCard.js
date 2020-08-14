import React from 'react'

function SmurfCard(props) {
    const {smurf } = props;

    return(<div>
<div >
    <p>Name: {smurf.name}</p>
    <p>Height: {smurf.height}</p>
    <p>Age: {smurf.age}</p>
</div>

    </div>)
}

export default SmurfCard