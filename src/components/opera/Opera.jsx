import React from 'react';
import css from './Opera.module.css';
import {Link, NavLink} from "react-router-dom";

const Opera = (props) => {
    return (
        <div className={css.opera}>
            <h1>Main article area</h1>
            <p>In this layout, we display the areas in source order for any screen less that 500 pixels wide. We go
                to a two column layout, and then to a three column layout by redefining the grid, and the placement
                of items on the grid.</p>

            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/opera">Opera </Link>
                </li>
                <li>
                    <Link to="/chrome">Chrome</Link>
                </li>
            </ul>
        </div>
    );
};

export default Opera;
