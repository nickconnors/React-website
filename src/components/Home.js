import React from 'react';
import Image from 'react-bootstrap/Image'
import logo from '../assets/logo.png';
import styled from 'styled-components';

const Styles = styled.div`
	#image-container {
		text-align: center;
		height: 100vh;
		width: auto;
	}

	img {
		max-height: 100%;
	}
`;

function Home() {
  return (
    	<Styles>
    		<div id="image-container">
  				<Image src={logo} fluid />
  			</div>
  		</Styles>
  );
}

export default Home;