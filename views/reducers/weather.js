import * as types from '../constants/ActionTypes'

const initialState = {
    weatherinfo: {},
    cityID: 'hangzhou'
  }

export default function weather(state = initialState, action) {
  switch (action.type) {
    case types.WEATHER_REFRESH:
    	return state;
    case types.WEATHER_REFRESH_POST:
      var params = action.params;
      if (params.result) {
        return {
                  weatherinfo:params.params.weatherinfo,
                  cityID: state.cityID
                };
      }
      else{
        return initialState;
      }
      
    default:
      return state
  }
}
