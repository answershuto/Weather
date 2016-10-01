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

 //定义天气类型 
const weatherArr={
 	"00":"晴",
 	"01":"多云",
 	"02":"阴",
 	"03":"阵雨",
 	"04":"雷阵雨",
 	"05":"雷阵雨伴有冰雹",
 	"06":"雨夹雪","07":"小雨",
 	"08":"中雨","09":"大雨",
 	"10":"暴雨","11":"大暴雨",
 	"12":"特大暴雨","13":"阵雪",
 	"14":"小雪","15":"中雪",
 	"16":"大雪","17":"暴雪",
 	"18":"雾","19":"冻雨",
 	"20":"沙尘暴",
 	"21":"小到中雨",
 	"22":"中到大雨",
 	"23":"大到暴雨",
 	"24":"暴雨到大暴雨",
 	"25":"大暴雨到特大暴雨",
 	"26":"小到中雪",
 	"27":"中到大雪",
 	"28":"大到暴雪",
 	"29":"浮尘",
 	"30":"扬沙",
 	"31":"强沙尘暴",
 	"53":"霾",
 	"99":""
 }; 

 //定义风向数组 
const fxArr={
 	"0":"无持续风向",
 	"1":"东北风",
 	"2":"东风",
 	"3":"东南风",
 	"4":"南风",
 	"5":"西南风",
 	"6":"西风",
 	"7":"西北风",
 	"8":"北风",
 	"9":"旋转风"
 }; 

 //定义风力数组 
 const flArr={
 	"0":"微风",
 	"1":"3-4级",
 	"2":"4-5级",
 	"3":"5-6级",
 	"4":"6-7级",
 	"5":"7-8级",
 	"6":"8-9级",
 	"7":"9-10级",
 	"8":"10-11级",
 	"9":"11-12级"
 }; 

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

		console.log(weather)

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

		return <div className="ui-weather-body" style={{height:deets().size.height+'px',backgroundImage:'url(../images/'+bg+')'}}>
			<div className="ui-weather-show" style={{paddingTop:deets().size.height/2+'px'}}>
				<div className="ui-weather-weather">
					<span>{info.weather}</span>
					<span style={{marginLeft:'10px'}}>{info.WD+info.WS}</span>
				</div>
				<div className="ui-weather-temperature">{info.temp+'℃'}</div>
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