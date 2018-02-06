import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

const blogger = 'https://www.googleapis.com/blogger/v3/blogs/1360640620050765862/posts?key=AIzaSyBq0Du33QhO9heRdHdlwol3oC_d0bVNjBc'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: ''
    }
  }

  componentDidMount() {
    axios.get(blogger)
      .then((res) => {
        console.log("res.items[0].content", res.data.items[0].content)
        this.setState({ post: res.data.items[0].content })
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        { this.state.post }
      </div>
    );
  }
}

export default App;