import React from "react";
import UtilScreenTask from "./UtilScreenTask";
import * as axios from "axios";
import {connect} from "react-redux";
import {
    relatedTask,
    testClickCreator,
    updateReadyTasksScreenDataCreator
} from "../../../redux/utilTaskReducer";
import {screenTaskAPI} from "../../../api/api";
import HeaderContainer from "../header/HeaderContainer";

class UtilScreenTaskContainer extends React.Component {

    componentDidMount() {
        screenTaskAPI.getScreenTasksForProcess().then(resp => {
            this.props.updateReadyTasksScreenDataCreator(resp.data);
        })
    }

    constructor(props) {
        super(props);
    }

    render() {
        return <div>
            <HeaderContainer />
            <UtilScreenTask {...this.props}></UtilScreenTask>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        utilTaskPage: state.utilTaskPage
    }
}

export default connect(mapStateToProps, {updateReadyTasksScreenDataCreator, relatedTask})(UtilScreenTaskContainer);