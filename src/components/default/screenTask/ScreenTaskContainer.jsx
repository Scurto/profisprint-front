import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import ScreenTask from "./ScreenTask";
import HeaderContainer from "../header/HeaderContainer";
import {
    updateNewPostTextCreator,
    getScreenDataByTaskId, fetchScreenTask
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

export default connect(mapStateToProps, {getScreenDataByTaskId, fetchScreenTask, updateNewPostTextCreator})(ScreenTaskContainer);