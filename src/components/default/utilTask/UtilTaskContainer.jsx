import React from "react";
import UtilTask from "./UtilTask";
import * as axios from "axios";
import {connect} from "react-redux";
import {relatedTask, testClickCreator, updateReadyTasksDataCreator} from "../../../redux/utilTaskReducer";
import {taskAPI} from "../../../api/api";
import {setDataByTaskId} from "../../../redux/simpleTaskReducer";

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
        return <UtilTask {...this.props}></UtilTask>
    }
}

const mapStateToProps = (state) => {
    return {
        utilTaskPage: state.utilTaskPage
    }
}

export default connect(mapStateToProps, {updateReadyTasksDataCreator, relatedTask})(UtilTaskContainer);