import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked'

class App extends Component {
  constructor(props){
    super (props)
    this.state = {
      input: ""
    }
  }
  onInputChange = (e) => {
    this.setState({
      input:e.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Editor input={this.state.input} onInputChange={this.onInputChange} />
        <Result input={this.state.input} />
        <Footer />
      </div>
    )
  }
}

function Header (){
  return (
    <div id="Header">
      <img src={logo} className="App-logo" alt="logo" />
      <h2>Welcome to React</h2>
    </div>
  )
}

class Editor extends Component {
  render() {
    return (
      <div id="Editor">
        <textarea value={this.props.input} onChange={this.props.onInputChange}/>
      </div>
    )
  }
}

class Result extends Component {


  render() {
    return (
      <div id="Result" dangerouslySetInnerHTML={{__html: marked(this.props.input)}}>
      </div>
    )
  }
}

function Footer (){
  return (
    <div id="Footer">
      <p>Build with React as part of the FCC DataVisualization curriculam.</p>
    </div>
  )
}

export default App;
