import React, { Component } from 'react';
import Body from './components/body/bodyComponent'
import Header from './components/header/headerComponent';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("InRender:-",this.props.history)
    return (
      <div className="App">
        <Header props={this.props}/>
        <Body props={this.props}/>
      </div>
    );
  }
}