/**
 * Created by Krzysiek on 2017-03-18.
 */
import React, {Component, PropTypes} from "react";
import Vector from "./Vector";
export default class Board extends Component {
    static propTypes =
        {
            size: PropTypes.instanceOf(Vector)
        };

    render() {
        return <div>{this.props.size.x}x{this.props.size.y}</div>

    }

}