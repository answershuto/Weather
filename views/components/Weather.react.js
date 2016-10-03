import React, { PropTypes, Component } from 'react'
import deets from 'deets'
import FutureWeather from '../components/FutureWeather.react'
var update = require('react-addons-update');

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
		this.state = {weather: props.weather,showImageState:false};
	}

	componentWillReceiveProps(nextProps) {
	    this.props = nextProps;
		this.state = {weather: nextProps.weather};
	}

	handleClick(e){
		this.setState(update(this.state,{
			showImageState:{$set: !this.state.showImageState}
		}));
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
		if (this.state.showImageState) {
			if (weather.futureWeather.f) {
				FutureWeathers.push(<canvas id="myCanvas" className="ui-weather-canvas" key='0'></canvas>);
			};
		}
		else{
			const text = ['明天','后天'];
			if (weather.futureWeather.f) {
				for(let i=0;i<2;i++){
					FutureWeathers.push(<FutureWeather key={i} info={weather.futureWeather.f.f1[i]} text={text[i]} />)
				}
			};
		}

		return <div className="ui-weather-body" style={{height:deets().size.height+'px',backgroundImage:'url(../images/'+bg+')'}}>
			<div className="ui-weather-show" style={{paddingTop:deets().size.height/20*8+'px'}}>
				<div className="ui-weather-weather">
					<span>{info.weather}</span>
					<span style={{marginLeft:'10px'}}>{info.WD+info.WS}</span>
				</div>
				<div className="ui-weather-temperature">{info.temp+'℃'}</div>
			</div>
			<div onClick={this.handleClick.bind(this)}>
				{FutureWeathers}
			</div>
		</div>
	}

	componentDidUpdate(){
		const { weather } = this.state;
		if (this.state.showImageState && weather.futureWeather.f) {
			let c=document.getElementById("myCanvas");
			let ctx=c.getContext("2d");
			console.log(weather.futureWeather.f.f1)
			let info = weather.futureWeather.f.f1;

			ctx.strokeStyle = "rgba(255,255,255,1)";
			ctx.fillStyle = "#FFFFFF";
		    ctx.lineWidth = 3;//线宽
		    const width = 300;
		    const height = 150;
			for(let i=0;i<6;i++){
				let w = i * 50 + 30;
				let h = Number(info[i].fc)*height/40;
				if (i === 0) {
					ctx.moveTo(w, h);
				}
				else{
					ctx.lineTo(w, h);
				}
				ctx.fillRect(w-3,h-3,6,12);
				ctx.strokeRect(w-3,h-3,6,12);
			}

		  	ctx.stroke();//画线
		};
	}
}

Weather.propTypes = {
  weather: PropTypes.object.isRequired,
}

export default Weather