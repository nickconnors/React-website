import React from 'react';
import Image from 'react-bootstrap/Image'
import logo from '../assets/logo1.png';
import styled from 'styled-components';
import Typer from './Typer';

const Styles = styled.div`
	#home-container {
		text-align: center;
		height: 100vh;
		width: auto;
	}

	img {
		max-height: 100%;
		margin: -8% 0 0 0;
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


