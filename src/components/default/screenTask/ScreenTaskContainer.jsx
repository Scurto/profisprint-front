import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import ScreenTask from "./ScreenTask";
import HeaderContainer from "../header/HeaderContainer";
import {
    updateNewPostTextCreator,
    getScreenDataByTaskId,
    fetchScreenTask,
    updateScreenCountOfAdvertiseMoveCreator,
    updateScreenCountOfVideoCreator,
    updateScreenCountOfAdvertiseCreator,
    updateScreenVideoTimerCreator,
    updateScreenAdvertiseTimerCreator,
    processScreenTask
} from "../../../redux/screenTaskReducer";

class ScreenTaskContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return <div>
            <HeaderContainer />
            <ScreenTask {...this.props}></ScreenTask>
        </div>
    }
}

const mapStateToProps = (state) => {
    return {
        screenTaskPage: state.screenTaskPage,
        operaPage: state.operaPage
    }
}

export default connect(mapStateToProps, {getScreenDataByTaskId, fetchScreenTask, processScreenTask, updateNewPostTextCreator,
    updateScreenCountOfAdvertiseCreator, updateScreenCountOfVideoCreator, updateScreenCountOfAdvertiseMoveCreator, updateScreenVideoTimerCreator, updateScreenAdvertiseTimerCreator})(ScreenTaskContainer);