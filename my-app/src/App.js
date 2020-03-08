import React from 'react';
import Clock from './Clock';
import logo from './logo.svg';
import './App.css';

export default class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className="App">
        <Clock />
        <Clock />
        <Clock />
      </div>
    );
  }
}
