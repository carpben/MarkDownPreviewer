import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import marked from 'marked'
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
        <Result />
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
  render() {
    return (
      <section className="editor">
          <h3>MarkDown Editor - What's on your mind?</h3>
        <textarea value={this.props.input} onChange={this.props.onInputChange}/>
    </section>
    )
  }
}


class View extends Component {
  render() {
    return (
        <section className="view">
            <h3>View</h3>
            <div id="Result" dangerouslySetInnerHTML={{__html: marked(this.props.input)}} />
        </section>
    )
  }
}

class Result extends Component {
    constructor(props){
        super(props)
        this.state = {
            showMarkdown:true
        }
    }
    handleButtonClick = () => {
        this.setState( prevState => ({showMarkdown:!prevState.showMarkdown}) )
    }
    render (){
        return  (
        <section className="markdown">
            <button onClick={this.handleButtonClick} >Show markdown</button>
            {this.state.showMarkdown? <MarkdownArea /> : <div>hello world</div>  }
        </section>
    )
    }
}


class MarkdownArea extends Component {
    constructor(props){
        super(props)
        this.state = {
            //failure 1
            markDownLibrary : 'world peace'
            //failure 2
            // {
                // test: 'hello'
                // headers: {
                //     code:<code><pre>
                //         # H1
                //         ## H2
                //         ### H3
                //         #### H4
                //         ##### H5
                //         ###### H6
                //
                //         Alternatively, for H1 and H2, an underline-ish style:
                //
                //         Alt-H1
                //         ======
                //
                //         Alt-H2
                //         ------
                //     </pre></code>,
                //     html: <div>
                //         <h1>H1</h1>
                //         <h2>H2</h2>
                //         <h3>H3</h3>
                //         <h4>H4</h4>
                //         <h5>H5</h5>
                //         <h6>H6</h6>
                //         <p>Alternatively, for H1 and H2, an underline-ish style:</p>
                //         <h1>Alt-H1</h1>
                //         <h2>Alt-H2</h2>
                //     </div>
                // },
                // emphasis: {
                //     code:<code><pre>
                //         Emphasis, aka italics, with *asterisks* or _underscores_.
                //
                //         Strong emphasis, aka bold, with **asterisks** or __underscores__.
                //
                //         Combined emphasis with **asterisks and _underscores_**.
                //
                //         Strikethrough uses two tildes. ~~Scratch this.~~
                //     </pre></code>,
                //     html: <div>
                //         <p>Emphasis, aka italics, with <em>asterisks</em> or <em>underscores</em>.</p>
                //         <p>Strong emphasis, aka bold, with <strong>asterisks</strong> or <strong>underscores</strong>.</p>
                //         <p>Combined emphasis with <strong>asterisks and <em>underscores</em></strong>.</p>
                //         <p>Strikethrough uses two tildes. <del>Scratch this.</del></p>
                //     </div>
                // }
            // }

            //failure 3 is importing from markdownlibrary.js
        }
    }
    render (){
        return (
            <div className="markdown-area">
                {this.state.markdownLibrary}
            </div>
        )
    }
}

// class MarkdownMenu extends Component {
//
// }

function Footer (){
  return (
    <div id="Footer">
      <p>Build with React as part of the FCC DataVisualization curriculam.</p>
    </div>
  )
}

export default App;
