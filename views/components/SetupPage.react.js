import React, { PropTypes, Component } from 'react'
import deets from 'deets'

class SetupPage extends Component{
	constructor(props){
		super(props);
	}

	componentWillReceiveProps(nextProps) {
	    this.props = nextProps;
	}

	render(){

		return <div style={{width:deets().size.width*5/5,height:deets().size.height}}>
			
		</div>
	}

	componentDidMount(){

	}

	componentDidUpdate(){

	}
}

SetupPage.propTypes = {

}

export default SetupPage