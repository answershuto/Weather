import React, { PropTypes, Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Glyphicon,ButtonToolbar } from 'react-bootstrap';

class Navigation extends Component{
	render(){
		const { city } = this.props;

		return (
			<div className="ui-Navigation">
				<Navbar inverse>
			        <Navbar.Header>
			            <Navbar.Brand>
			            	<ButtonToolbar>
			            		<Button bsSize="small"><Glyphicon glyph="align-justify" /></Button>
			            	</ButtonToolbar>
			            </Navbar.Brand>
			            <div className="ui-head-city">{city}</div>
			        </Navbar.Header>
			    </Navbar>
			</div>
		)
	}
}

Navigation.propTypes = {
  city: PropTypes.string.isRequired
}

export default Navigation