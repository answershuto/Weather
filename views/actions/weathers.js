import * as types from '../constants/ActionTypes'
import fetch from 'isomorphic-fetch'

function fetchPosts() {
	fetch('/weather/rpc',{method:'POST',redentials: 'include'}).then(response => response.json())
  	.then(data => console.log(data))
}

export function refresh(city){
	fetchPosts()

	return {
		type: types.WEATHER_REFRESH
	}
}