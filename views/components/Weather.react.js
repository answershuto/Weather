import React, { PropTypes, Component } from 'react'
import deets from 'deets'
import FutureWeather from '../components/FutureWeather.react'

const bgImgs = {
	'阴': 'bg1.gif',
	'霾': 'bg2.gif',
	'晴': 'bg5.gif',
	'雪': 'bg3.gif',
	'大雨': 'bg4.gif',
	'多云': 'bg7.gif',
	'雷': 'bg11.gif',
	'风': 'bg12.gif',
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

		console.log(weather.weatherinfo)

		let bg = 'bg5.gif';
		if (weather.weatherinfo.weather) {
			let weatherText = weather.weatherinfo.weather;
			for(let i in bgImgs){
				if (weatherText.indexOf(i) >= 0) {
					bg = bgImgs[i];
					break;
				};
			}
		};
		

		return <div className="ui-weather-body" style={{height:deets().size.height+'px',backgroundImage:'url(../images/'+bg+')'}}>
			<div className="ui-weather-show" style={{paddingTop:deets().size.height/2+'px'}}>
				<div className="ui-weather-weather">{weather.weatherinfo.weather}</div>
				<div className="ui-weather-temperature">{weather.weatherinfo.temp+'℃'}</div>
			</div>
			<div>
				<FutureWeather />
				<FutureWeather />
			</div>
		</div>
	}
}

Weather.propTypes = {
  weather: PropTypes.object.isRequired,
}

export default Weather