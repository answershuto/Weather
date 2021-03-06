import React, { PropTypes, Component } from 'react'
import Navigation from '../components/Navigation.react'
import Weather from '../components/Weather.react'

class MainPage extends Component{
	constructor(props){
		super(props);
	}

	componentWillReceiveProps(nextProps) {
	    this.props = nextProps;
	}

	render(){
		const { onRefresh, weather, dispatch, onSetup, cityInfo } = this.props;

		return <div className="ui-MainPage-body">
			<Navigation onRefresh={onRefresh} onSetup={onSetup} cityID={cityInfo.id} cityName={cityInfo.name} dispatch={dispatch} />
			<Weather weather={weather} dispatch={dispatch} />
		</div>
	}
}

MainPage.propTypes = {
  onRefresh: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  weather: PropTypes.object.isRequired,
}

export default MainPage