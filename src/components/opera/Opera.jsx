import React from 'react';
import css from './Opera.module.css';
import {useLocation, useParams} from "react-router";
import {Link, NavLink} from "react-router-dom";
import OperaMainPanel from "./main/OperaMainPanel";
import OperaBottomPanel from "./bottom/OperaBottomPanel";

class Opera extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            {/*<h1>Hello, {this.props.operaPage.testText}</h1>*/}
            <OperaMainPanel></OperaMainPanel>
            {/*<OperaBottomPanel></OperaBottomPanel>*/}
        </div>;
    }

};

export default Opera;
