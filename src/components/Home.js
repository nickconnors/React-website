import React from 'react';
import Image from 'react-bootstrap/Image'
import logo from '../assets/logo2.png';
import styled from 'styled-components';
import Typer from './Typer';

const Styles = styled.div`
	#home-container {
		height: 100vh;
		width: 100vw;
		vertical-align: middle;
		text-align: center;
		display: table-cell;
	}

	img {
		max-height: 35%;
		margin: -7% 0 6% 0;

	}
`;

function Home() {
  return (
    	<Styles>
    		<div id="home-container">
	  			<Image src={logo} fluid />
	  				<Typer
	    				dataText={[  
	      				'Student.', 
	      				'Developer.',
						    'Hockey fan.',
						    'Car enthusiast.',
						    'Find out more about me.'
	    				]} 
	    			/>
	  		</div>
  		</Styles>
  );
}

export default Home;


