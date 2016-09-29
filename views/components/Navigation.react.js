import React, { PropTypes, Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Glyphicon,ButtonToolbar } from 'react-bootstrap';

class Navigation extends Component{
	constructor(props){
		super(props);
	}

	handleClickRefresh(){
		const { onRefresh, cityID, dispatch } = this.props;
		dispatch(onRefresh(dispatch,cityID));
	}

	render(){
		const { cityName } = this.props;

		return (
			<div className="ui-Navigation">
				<Navbar inverse>
			        <Navbar.Header>
			            <Navbar.Brand>
			            	<ButtonToolbar>
			            		<Button bsSize="small"><Glyphicon glyph="align-justify" /></Button>
			            	</ButtonToolbar>
			            </Navbar.Brand>
			            <div className="glyphicon glyphicon-refresh ui-Navigation-refresh" onClick={this.handleClickRefresh.bind(this)}></div>
			            <div className="ui-head-city">{cityName}</div>

			        </Navbar.Header>
			    </Navbar>
			</div>
		)
	}
}

Navigation.propTypes = {
  cityID: PropTypes.string.isRequired,
  cityName: PropTypes.string.isRequired
}

export default Navigation