import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

export function refresh(city = "杭州"){
	var res;
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
  	.then(data => (res = data))

	return {
		type: types.WEATHER_REFRESH,
		data: res
	}
}