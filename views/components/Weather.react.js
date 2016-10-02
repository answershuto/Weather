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

		//console.log(weather)

		let info = weather.weatherinfo;

		let bg = 'bg5.gif';
		if (info.weather) {
			let weatherText = info.weather;
			for(let i in bgImgs){
				if (weatherText.indexOf(i) >= 0) {
					bg = bgImgs[i];
					break;
				};
			}
		};

		let FutureWeathers = [];
		const text = ['明天','后天'];
		if (weather.futureWeather.f) {
			for(let i=0;i<2;i++){
				FutureWeathers.push(<FutureWeather key={i} info={weather.futureWeather.f.f1[i]} text={text[i]} />)
			}
		};

		return <div className="ui-weather-body" style={{height:deets().size.height+'px',backgroundImage:'url(../images/'+bg+')'}}>
			<div className="ui-weather-show" style={{paddingTop:deets().size.height/2+'px'}}>
				<div className="ui-weather-weather">
					<span>{info.weather}</span>
					<span style={{marginLeft:'10px'}}>{info.WD+info.WS}</span>
				</div>
				<div className="ui-weather-temperature">{info.temp+'℃'}</div>
			</div>
			<div>
				{FutureWeathers}
			</div>
		</div>
	}
}

Weather.propTypes = {
  weather: PropTypes.object.isRequired,
}

export default Weather