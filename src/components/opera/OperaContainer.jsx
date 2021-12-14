import React from "react";
import Preloader from "../common/Preloader";
import Opera from "./Opera";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";
import {updateTaskIdOpera} from "../../redux/operaReducer";

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