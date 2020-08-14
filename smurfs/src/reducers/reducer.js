import {
    SMURF_START,
    SMURF_SUCCESS,
    SMURF_FAILED,
    POST_SMURF_START,
    POST_NEW_SUCCESS,
    POST_NEW_FAILED
} from '../actions/action'

const initialState = {
    surfs: [],
    isLoading: false,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
      case SMURF_START:
        return {
          ...state,
          isLoading: true,
          error: ""
        };
      case SMURF_SUCCESS:
        return {
          ...state,
          isLoading: false,
          smurfs: action.payload
        };
        case SMURF_FAILED 
      default:
        return state;
    }
  };
  