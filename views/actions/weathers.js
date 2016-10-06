import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

function postRefresh(d){
	return {
		type: types.WEATHER_REFRESH_POST,
		params: d
	}
}

function postFutureWeather(d){
	return {
		type: types.WEATHER_FUTURE_POST,
		params: d
	}
}

export function refresh(dispatch,city = "hangzhou"){
	fetch('/weather/rpc',
		{
			method:'POST',
			headers:{ 
			 			'Accept': 'application/json', 
			 			'Content-Type': 'application/json'
			 		},
			redentials: 'include',
			body: JSON.stringify({
									method: 'refresh',
									params: {
										city
									},
								})
		}
	)
	.then(response => response.json())
	.then(d => dispatch(postRefresh(d)))

	fetch('/weather/rpc',
		{
			method:'POST',
			headers:{ 
			 			'Accept': 'application/json', 
			 			'Content-Type': 'application/json'
			 		},
			redentials: 'include',
			body: JSON.stringify({
									method: 'futureWeather',
									params: {
										city
									},
								})
		}
	)
	.then(response => response.json())
	.then(d => dispatch(postFutureWeather(d)))

  	return {
		type: types.WEATHER_REFRESH
	}
}

function postSetup(d){
	return {
		type: types.WEATHER_SETUP_POST,
		params: d
	}
}

export function Setup(dispatch,city = "hangzhou"){
	fetch('/weather/rpc',
		{
			method:'POST',
			headers:{ 
			 			'Accept': 'application/json', 
			 			'Content-Type': 'application/json'
			 		},
			redentials: 'include',
			body: JSON.stringify({
									method: 'getCitys',
									params: null
								})
		}
	)
	.then(response => response.json())
	.then(d => dispatch(postSetup(d)))

	return {
		type: types.WEATHER_SETUP
	}
}

export function setCity(cityInfo){
	return {
		type: types.WEATHER_SET_CITY,
		cityInfo,
	}
}
