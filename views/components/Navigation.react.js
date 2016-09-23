import React, { PropTypes, Component } from 'react'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Button, Glyphicon,ButtonToolbar } from 'react-bootstrap';

class Navigation extends Component{
	render(){
		return (
			<div className="ui-Navigation">
				<Navbar>
        <Navbar.Header>
            <Navbar.Brand>
                <a href="#">react-bootstrap</a>
            </Navbar.Brand>
        </Navbar.Header>
    </Navbar>
			</div>
		)
	}
}

export default Navigation