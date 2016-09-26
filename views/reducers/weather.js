import * as types from '../constants/ActionTypes'

const initialState = {
    weather: 'sun'
  }

export default function weather(state = initialState, action) {
	console.log(action)
  switch (action.type) {
    case types.WEATHER_REFRESH:
    	return state;
    	break;

    default:
      return state
  }
}
