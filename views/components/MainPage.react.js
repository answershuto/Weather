import React, { PropTypes, Component } from 'react'
import Navigation from '../components/Navigation.react'
import Weather from '../components/Weather.react'

class MainPage extends Component{
	constructor(props){
		super(props);
	}

	render(){
		const { onRefresh } = this.props;

		return <div>
			<Navigation onRefresh={onRefresh} city="杭州" />
			<Weather  />
		</div>
	}
}

export default MainPage