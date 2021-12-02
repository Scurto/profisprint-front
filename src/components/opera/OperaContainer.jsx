import React from "react";
import Preloader from "../common/Preloader";
import Opera from "./Opera";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../redux/authReducer";

class OperaContainer extends React.Component {

    componentDidMount() {
        // axios.get(`http://localhost:8830/test`).then(resp => {
        //     console.log(resp.data);
        // })
    }

    render() {
        return <Opera {...this.props}></Opera>
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, {setAuthUserData})(OperaContainer);