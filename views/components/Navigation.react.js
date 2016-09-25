import React, { PropTypes, Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Glyphicon,ButtonToolbar } from 'react-bootstrap';

class Navigation extends Component{
	constructor(props){
		super(props);
	}

	handleClickRefresh(){
		const { onRefresh, cityID } = this.props;
		onRefresh(cityID);
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
			            <div className="ui-head-city">{cityName}</div>
			        </Navbar.Header>
			    </Navbar>
			    <div className="glyphicon glyphicon-refresh" onClick={this.handleClickRefresh.bind(this)}></div>
			</div>
		)
	}
}

Navigation.propTypes = {
  city: PropTypes.string.isRequired
}

export default Navigation