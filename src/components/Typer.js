import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const Styles = styled.div`
	h1 {
		text-align: center;
  	color: #a5c9ff;
	}

	#cursor {
  	border-left: .1em solid #a5c9ff;
  	animation: blink .7s steps(1) infinite;
	}

	@keyframes blink {
  	50% {
    	border-color: transparent;
  	}
	}

`;

class Typer extends React.Component {

    state = {
      text: '',
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 150
    }

  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const { dataText } = this.props;
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
      text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
      typingSpeed: isDeleting ? 30 : 150
    });

    if (!isDeleting && text === fullText) {     
      setTimeout(() => this.setState({ isDeleting: true }), 500);   
    } else if (isDeleting && text === '') {
      this.setState({
        isDeleting: false,
        loopNum: loopNum + 1
      });      
    }

    setTimeout(this.handleType, typingSpeed);
  };

  render() {    
    return (
    	<Styles>
	      <h1>
	        <span>{ this.state.text }</span>
	        <span id="cursor"></span>
	      </h1>
	   	</Styles>
    );
  }
}

export default Typer;