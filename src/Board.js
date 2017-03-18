/**
 * Created by Krzysiek on 2017-03-18.
 */
import React, {Component, PropTypes} from "react";
import Vector from "./Vector";
import _ from "underscore";
import "./Board.css";

export default class Board extends Component {
    static propTypes =
        {
            size: PropTypes.instanceOf(Vector),
            snakePositions: PropTypes.arrayOf(PropTypes.instanceOf(Vector)),
            fruitPosition: PropTypes.instanceOf(Vector)
        };

    render() {
        const rows = _.range(this.props.size.y).map(y => {
            const map = _.range(this.props.size.x).map(x => {
                return <div className="cell"></div>
            });
            return <div className="row">{map}</div>;
        });

        return <div className="Board">{rows}</div>;

    }

}