import React, { PropTypes, Component } from 'react'

class FutureWeather extends Component{
	constructor(props){
		super(props);
	}

	componentWillReceiveProps(nextProps) {
	    this.props = nextProps;
	}

	render(){
		return <div>

		</div>
	}
}

export default FutureWeather