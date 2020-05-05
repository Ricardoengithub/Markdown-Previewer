import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';
import './App.css';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = {
      mark: "# Hola Mundo"
    }
    this.handleChange = this.handleChange.bind(this);

  }
  
  handleChange(e){

    this.setState({
      mark: e.target.value
    })
  }
  render(){
    return(
      <div>
        <h1>Markdown Previer</h1> 
        <hr/> <br/>
        <div id="container">
          <textarea value={this.state.mark} type="text" id="editor" onChange={this.handleChange} rows="20" cols="50"></textarea>
          <div id="preview">
            <ReactMarkdown source={this.state.mark} escapeHtml={false} />
          </div>        
        </div>
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));

export default App;
