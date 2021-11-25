import React, { Component } from "react";
import { exportComponentAsPNG } from "react-component-export-image";

class App extends Component {
  
  certificateWrapper = React.createRef();
  state = {
    Name: ""
  };
  constructor(props){
    super(props)
    this.state = {
        year : new Date().getFullYear(),
        count: 1,

    }
  }
  render() {
    return (
      <div className="App">
        <div className="Meta">
          <h1>CUTM Certificate Generator</h1>
          {/* <p>Please enter your name.</p> */}
          <div className="inp-cls">
          <input
            type="text"
            placeholder="Please enter the participant name..."
            value={this.state.Name}
            onChange={(e) => {
              this.setState({ Name: e.target.value });
            }}
          />
          <button
            onClick={(e) => { 
              e.preventDefault();
              exportComponentAsPNG(this.certificateWrapper,{
                html2CanvasOptions: { backgroundColor:null }
              });
            } 
          }
          >
            Download
          </button>
          </div>
          
          {/* <p> Made by Ankit </p> */}
          <div className="footer-copyright">
            
            <div class="icons">
            <h3>Social Links </h3>
           <a href="https://www.linkedin.com/in/ankitkumarcse/" target="_blank" rel="noreferrer"> <i class="fab fa-linkedin"></i></a>
           <a href="https://github.com/ankitjha-webdev/" target="_blank" rel="noreferrer"> <i class="fab fa-github"></i></a>
           <a href="https://www.ankitkumar.engineer/" target="_blank" rel="noreferrer"> <i class="fas fa-globe"></i></a>
            <p class="company-name">
            Ankit Kumar ❤️ &copy; {+ this.state.year}, ALL Rights Reserved 
            </p>
        </div>
          </div>
        </div>
        

        <div id="downloadWrapper" ref={this.certificateWrapper}>
          <div id="certificateWrapper">
            <p>{this.state.Name}</p>
             <img src="/certificate.png" alt="Certificate" />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
