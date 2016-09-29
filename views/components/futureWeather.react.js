import React, { PropTypes, Component } from 'react'
import deets from 'deets'

class FutureWeather extends Component{
	constructor(props){
		super(props);
	}

	componentWillReceiveProps(nextProps) {
	    this.props = nextProps;
	}

	render(){
		return <div className="ui-FutureWeather-body" style={{width:deets().size.width/2+'px'}}>
			
		</div>
	}
}

FutureWeather.propTypes = {
  	
}

export default FutureWeather