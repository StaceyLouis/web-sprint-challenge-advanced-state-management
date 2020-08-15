
import {
    SMURF_START,
    SMURF_SUCCESS,
    SMURF_FAILED,
    POST_SMURF_START,
    POST_SMURF_SUCCESS,
    POST_SMURF_FAILED
} from '../actions/action'

const initialState = {
    smurfs: [],
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
        case SMURF_FAILED:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        case POST_SMURF_START:
            return{
                ...state,
              smurfs:  [...state.smurfs, action.payload],
                isLoading: true,
                error: ''

            }
            case POST_SMURF_SUCCESS:
                return{
                    ...state,
                  smurfs: action.payload,
                    isLoading: false,
                    error: ''
                }
                case POST_SMURF_FAILED:
                    return{
                        ...state,
                        isLoading: false,
                        error: action.payload
                    }
      default:
        return state;
    }
  };
  