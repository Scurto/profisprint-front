import React from "react";
import UtilTask from "./UtilTask";
import * as axios from "axios";
import {connect} from "react-redux";
import {relatedTask, testClickCreator, updateReadyTasksDataCreator} from "../../../redux/utilTaskReducer";
import {taskAPI} from "../../../api/api";
import HeaderContainer from "../header/HeaderContainer";

class UtilTaskContainer extends React.Component {

    componentDidMount() {
        taskAPI.getTasksForProcess().then(resp => {
            this.props.updateReadyTasksDataCreator(resp.data);
        })
    }

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <HeaderContainer />
            <UtilTask {...this.props}></UtilTask>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        utilTaskPage: state.utilTaskPage
    }
}

export default connect(mapStateToProps, {updateReadyTasksDataCreator, relatedTask})(UtilTaskContainer);