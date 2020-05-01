import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	.navbar {
		background-color: #2d2d2d;
		padding: 0px;
	}

	.navbar-brand {
		margin: 0px 0px 0px 16px;
		padding-right: 8px;
		padding-left: 8px;
	}

	.ml-auto {
		margin: 0px 16px 0px 0px;
	}

	.navbar-brand, .navbar-collapse .nav-link {
		color: #a5ffc9;

		&:hover {
			color: black;
			background-color: #a5c9ff
		}
	}

`;

function CustomNavbar() {
	return (
		<Styles>
			<Navbar expand="sm" fixed="top">
	  			<Navbar.Brand href="#home">Nick Connors</Navbar.Brand>
	  			<Navbar.Toggle aria-controls="basic-navbar-nav" />
	  			<Navbar.Collapse id="basic-navbar-nav">
	    			<Nav className="ml-auto">
	      				<Nav.Link href="#home">Home</Nav.Link>
	      				<Nav.Link href="#link">About Me</Nav.Link>
	      				<Nav.Link href="#link">Projects</Nav.Link>
	      				<Nav.Link href="#link">Resume</Nav.Link>
	    			</Nav>
	  			</Navbar.Collapse>
			</Navbar>
		</Styles>
	);
}

export default CustomNavbar;