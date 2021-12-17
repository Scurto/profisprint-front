import React from "react";
import Opera from "./Opera";
import * as axios from "axios";
import {connect} from "react-redux";

class OperaContainer extends React.Component {

    componentDidMount() {

    }

    render() {
        return <Opera {...this.props}></Opera>
    }
}

const mapStateToProps = (state) => {
    return {
        screenTaskPage: state.screenTaskPage,
        operaPage: state.operaPage
    }
}

export default connect(mapStateToProps, {})(OperaContainer);