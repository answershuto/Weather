import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

function postRefresh(d){
	return {
		type: types.WEATHER_REFRESH,
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

  	return {
		type: types.WEATHER_REFRESH
	}
}
