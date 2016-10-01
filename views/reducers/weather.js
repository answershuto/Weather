import * as types from '../constants/ActionTypes'

const initialState = {
    weatherinfo: {},
    cityID: 'hangzhou',
    futureWeather: {},
}

export default function weather(state = initialState, action) {
    switch (action.type) {
        case types.WEATHER_REFRESH:
      	   return state;
        case types.WEATHER_REFRESH_POST:
            var params = action.params;
            if (params.result) {
              return {
                        futureWeather: state.futureWeather,
                        weatherinfo:params.params.weatherinfo,
                        cityID: state.cityID
                      };
            }
            else{
              return initialState;
            }
        case types.WEATHER_FUTURE_POST:
            var params = action.params;
            if (params.result) {
              return {
                        futureWeather: params.params.futureWeather,
                        weatherinfo:state.weatherinfo,
                        cityID: state.cityID
                      };
            } 
        default:
            return state
    }
}
