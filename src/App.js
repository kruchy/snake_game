import React, {Component} from "react";
import "./App.css";
import Vector from "./Vector";
import Board from "./Board";

export default class App extends Component {
    render() {
        return <Board size={new Vector(20, 20)}/>;
    }
}

