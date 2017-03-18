import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Vector from "./Vector";

export default class App extends Component {
  render() {
      return <Board size={new Vector(20, 20)}/>
  }
}

