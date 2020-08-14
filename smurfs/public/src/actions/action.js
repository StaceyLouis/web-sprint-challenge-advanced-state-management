import axios from 'axios'

export const SMURF_START = "SMURF_START"
export const SMURF_SUCCESS = "SMURF_SUCCESS"
export const SMURF_FAILED = "SMURF_FAILED"

export const getSmurf =() => {
    return (dispatch) => {
        dispatch({type: SMURF_START})
        axios
        .get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({type: SMURF_SUCCESS, payload: res.data})
            
        })
.catch(err => {
    dispatch({type:SMURF_FAILED,  payload: err})
})
    }
}

export const  POST_SMURF_START = 'POST_SMURF_START'
export const  POST_SMURF_SUCCESS = 'POST_SMURF_SUCCESS'
export const  POST_SMURF_FAILED = 'POST_SMURF_FAILED'

export const postSmurf = (smurf) =>(dispatch) => {
    dispatch({type: POST_SMURF_START})

return axios
.post("http://localhost:3333/smurfs", smurf)
.then(res =>{
    dispatch({type: POST_SMURF_SUCCESS, payload: res.data})
})
.catch(err =>{
    dispatch({type: POST_SMURF_FAILED, payload: err})
})
}