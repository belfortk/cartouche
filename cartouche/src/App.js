import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
  name: '',
  glyphs : []
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.generateGlyphs = this.generateGlyphs.bind(this);
  }

  handleNameChange(e){
    this.setState({name:e.target.value});
  }


  generateGlyphs(){
    const name = this.state.name;
    let glyphContainer = [];
    let nameArray = name.split('');
    nameArray.map(letter => {
      let lowercase =  letter.toLowerCase();
      glyphContainer.push(`http://www.virtual-egypt.com/newimages/glyph/${lowercase}.gif`);
      return false;
    })
this.setState({
  glyphs:glyphContainer
})

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Cartouche</h1>
        </header>
        <p className="App-intro">To get started, edit enter your phonetic name name below</p>


        <div className="row" >
        <label id="namefield" htmlFor="namefield"></label>
      <input onChange={this.handleNameChange} name="namefield" style={{marginLeft:'3rem'}}/>
      <button onClick ={ this.generateGlyphs}> 
        generate glyphs
        </button>
        </div>

        <div className="cartouche">
          <div className="row">
          
          {
            this.state.glyphs.map((glyph,i) => {
              
              return (<img key={i} src={glyph}>
              </img>)
            })

          }
          </div>
        </div>
      </div>
    );
  }
}

export default App;
