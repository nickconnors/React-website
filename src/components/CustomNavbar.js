import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
	.navbar {
		background-color: #2d2d2d;
	}

	.navbar-brand {
		font-family: 'Open Sans', sans-serif;
		color: #a5ffc9;

		&:hover {
			color: #a5ffc9;
		}
	}

	.navbar-collapse .nav-link {
		font-family: 'Open Sans', sans-serif;
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
			<Navbar className="sticky-nav" expand="sm" fixed="top">
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