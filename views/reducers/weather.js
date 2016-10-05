import * as types from '../constants/ActionTypes'

const initialState = {
    weatherinfo: {},
    cityID: 'hangzhou',
    futureWeather: JSON.parse('{"c":{"c1":"101210101","c2":"hangzhou","c3":"杭州","c4":"hangzhou","c5":"杭州","c6":"zhejiang","c7":"浙江","c8":"china","c9":"中国","c10":"1","c11":"0571","c12":"310000","c13":"120.165","c14":"30.319","c15":"43","c16":"AZ9571","c17":"+8"},"f":{"f1":[{"fa":"01","fb":"00","fc":"28","fd":"18","fe":"1","ff":"1","fg":"0","fh":"0","fi":"05:59|17:32"},{"fa":"01","fb":"00","fc":"29","fd":"19","fe":"2","ff":"2","fg":"0","fh":"0","fi":"06:00|17:31"},{"fa":"01","fb":"02","fc":"29","fd":"17","fe":"3","ff":"3","fg":"0","fh":"0","fi":"06:00|17:29"},{"fa":"03","fb":"02","fc":"19","fd":"12","fe":"1","ff":"1","fg":"2","fh":"0","fi":"06:01|17:28"},{"fa":"01","fb":"01","fc":"17","fd":"11","fe":"2","ff":"2","fg":"0","fh":"0","fi":"06:02|17:27"},{"fa":"01","fb":"01","fc":"18","fd":"12","fe":"2","ff":"2","fg":"0","fh":"0","fi":"06:02|17:26"},{"fa":"01","fb":"01","fc":"19","fd":"13","fe":"2","ff":"0","fg":"0","fh":"0","fi":"06:03|17:25"}],"f0":"201310121100"}}'),
    isSetup: false,
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
                        cityID: state.cityID,
                        isSetup: state.isSetup
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
                        cityID: state.cityID,
                        isSetup: state.isSetup
                      };
            } 
        case types.WEATHER_SETUP:
            return {
                        futureWeather: state.futureWeather,
                        weatherinfo:state.weatherinfo,
                        cityID: state.cityID,
                        isSetup: !state.isSetup,
                        citys: state.citys || []
                    };
        case types.WEATHER_SETUP_POST:
            var params = action.params;
            if (params.result) {
                return {
                    cityID: state.cityID,
                    isSetup: state.isSetup,
                    citys: params.params
                }
            };
        default:
            return state
    }
}
