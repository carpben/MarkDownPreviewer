import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked';
import {ModalJSLibrary, Example} from './markdownLibrary';
// import markDownLibrary from './markdownLibrary.js'

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
        <div className="container">
          <Editor input={this.state.input} onInputChange={this.onInputChange} />
          <View input={this.state.input} />
        </div>
        {/* <Result /> */}
        <Footer />
      </div>
    )
  }
}

function Header (){
  return (
    <header>
      <img src={logo} className="App-logo" alt="logo" />
      <h2>MarkDown Viewer with React</h2>
  </header>
  )
}

class Editor extends Component {
    constructor (props) {
        super (props)
        this.state = {
            showMarkdownModal: false
        }
    }
    showMarkdown = () => {
        console.log('show')
        this.setState({showMarkdownModal:true})
    }
    hideMarkdown = () => {
        this.setState({showMarkdownModal:false})
    }
  render() {

      const {showMarkdownModal}=this.state

    return (
      <section className="editor">
          <h3>What's on your mind?</h3>
        <textarea value={this.props.input} onChange={this.props.onInputChange}/>
        {/* <a href='#' onClick={this.showMarkdown}>Markdown Dictionary</a> */}
        {/* {this.state.showMarkdown? <ModalJSLibrary hideMarkdown={this.hideMarkdown} /> : ''} */}
        {/* <ModalJSLibrary */}
            {/* // showMarkdownModal={showMarkdownModal} */}
            {/* show={this.state.showMarkdownModal} hideMarkdown={this.hideMarkdown} */}
        {/* /> */}
        <Example />

    </section>
    )
  }
}


class View extends Component {
  render() {
    return (
        <section className="view">
            <h3>View Markdown</h3>
            <div id="Result" dangerouslySetInnerHTML={{__html: marked(this.props.input)}} />
        </section>
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
