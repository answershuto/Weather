import React, { PropTypes, Component } from 'react'
import deets from 'deets'
import FutureWeather from '../components/FutureWeather.react'
import update from 'react-addons-update'

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
 	"06":"雨夹雪",
 	"07":"小雨",
 	"08":"中雨",
 	"09":"大雨",
 	"10":"暴雨",
 	"11":"大暴雨",
 	"12":"特大暴雨"
 	,"13":"阵雪",
 	"14":"小雪",
 	"15":"中雪",
 	"16":"大雪",
 	"17":"暴雪",
 	"18":"雾",
 	"19":"冻雨",
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

		let info = weather.weatherinfo || {};

		let bg = 'bg5.gif';
		if (info && info.weather) {
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
				let arr = [],arr2 = [];
				for(let i=0;i<6;i++){
					arr.push(<div key={i} className="col-md-2 col-xs-2">
						<div>
							<img src={"http://m.weather.com.cn/img/c"+Number(weather.futureWeather.f.f1[i].fa)+".gif"}></img>
						</div>
					</div>);
					arr2.push(<div key={i} className="col-md-2 col-xs-2">
						<div>
							<img src={"http://m.weather.com.cn/img/c"+Number(weather.futureWeather.f.f1[i].fb)+".gif"}></img>
						</div>
					</div>);
				}
				FutureWeathers = <div>
					<div className="container">
						<div className="row">
							{arr}
						</div>
					</div>
					<canvas id="myCanvas" className="ui-weather-canvas" key='0'></canvas>
					<div className="container">
						<div className="row">
							{arr2}
						</div>
					</div>
				</div>
			};
		}
		else{
			const text = ['明天','后天'];
			if (weather.futureWeather && weather.futureWeather.f) {
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

			ctx.strokeStyle = "#FFFFFF";
			ctx.fillStyle = "#FFFFFF";
		    
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
				//画线
				ctx.lineWidth = 3;//线宽
				ctx.stroke();

				/*折线点*/
				ctx.fillRect(w-3,h-3,6,12);
				ctx.strokeRect(w-3,h-3,6,12);

				/*文字*/
				ctx.lineWidth = 1;//线宽
				ctx.strokeText(info[i].fd+'℃',w-10,h-10);
			}

			for(let i=0;i<6;i++){
				let w = i * 50 + 30;
				let h = Number(info[i].fd)*height/40;
				if (i === 0) {
					ctx.moveTo(w, h);
				}
				else{
					ctx.lineTo(w, h);
				}
				//画线
				ctx.lineWidth = 3;//线宽
				ctx.stroke();

				/*折线点*/
				ctx.fillRect(w-3,h-3,6,12);
				ctx.strokeRect(w-3,h-3,6,12);

				/*文字*/
				ctx.lineWidth = 1;//线宽
				ctx.strokeText(info[i].fc+'℃',w-10,h-10);
			}
		};
	}
}

Weather.propTypes = {
  weather: PropTypes.object.isRequired,
}

export default Weather