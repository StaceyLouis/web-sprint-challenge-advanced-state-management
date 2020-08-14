import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {getSmurf} from '../actions/action'
import SmurfCard from './SmurfCard'

function Village(props){
const {getSmurf, smurfs, error, isLoading} = props;

useEffect(() => {
    getSmurf();
},[getSmurf])
  
if(isLoading) {
    return <h4>Loading...</h4>
}
    return(
        <div>
{error && <p>error</p>}
{smurfs.map(char => (
    <SmurfCard smurf={char} />
))}



        </div>
    )
}

const mapPropsToState = state => {
    return {
        smurfs: state.smurfs,
        isLoading: state.isLoading,
        error: state.error
    }
}

export default connect(mapPropsToState, {getSmurf})(Village)