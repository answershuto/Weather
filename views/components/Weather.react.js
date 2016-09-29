import React, { PropTypes, Component } from 'react'
import deets from 'deets'

const bgImgs = {
	'阴': 'bg1.gif',
	'霾': 'bg2.gif',
	'晴': 'bg5.gif',
	'雪': 'bg3.gif',
	'大雨': 'bg4.gif',
	'雷': 'bg11.gif',
	'风': 'bg11.gif',
}

class Weather extends Component{
	constructor(props){
		super(props);
		this.state = {weather: props.weather};
	}

	componentWillReceiveProps(nextProps) {
	    this.props = nextProps;
		this.state = {weather: nextProps.weather};
	}

	render(){
		const { weather } = this.state;
console.log(weather.weatherinfo.weather)
		let bg = 'bg5.gif';
		if (weather.weatherinfo.weather) {
			weatherText = weather.weatherinfo.weather;
			for(let i in bgImgs){

			}
		};
		

		return <div className="ui-weather-body" style={{height:deets().size.height+'px',backgroundImage:'url(../images/'+bg+')'}}>
		</div>
	}
}

export default Weather