import React from 'react';
import css from './Header.module.css';
import {Link, NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <div className={css.header}>
            <ul>
                <li>
                    <Link to="/simpleTask">SimpleTask</Link>
                </li>
                <li>
                    <Link to="/opera">Opera</Link>
                </li>
                <li>
                    <Link to="/chrome">Chrome</Link>
                </li>
                <li>
                    <Link to="/utilTask">UtilTask</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;
