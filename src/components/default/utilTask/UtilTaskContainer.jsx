import React from "react";
import UtilTask from "./UtilTask";
import * as axios from "axios";
import {connect} from "react-redux";
import {testClickCreator} from "../../../redux/utilTaskReducer";

class UtilTaskContainer extends React.Component {

    componentDidMount() {
        // axios.get(`http://localhost:8830/test`).then(resp => {
        //     console.log(resp.data);
        // })
    }

    render() {
        return <UtilTask {...this.props}></UtilTask>
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        testClick: () => {
            dispatch(testClickCreator());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UtilTaskContainer);