import React from "react";
import Preloader from "../../common/Preloader";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../../redux/authReducer";
import {Link} from "react-router-dom";
import ScreenTask from "./ScreenTask";
import {
    fetchTask,
    getDataByTaskId,
    processTask,
    updateAdvertiseTimerCreator,
    updateChannelIdCreator,
    updateCountOfAdvertiseCreator,
    updateCountOfAdvertiseMoveCreator,
    updateCountOfVideoCreator,
    updateCustomerIdCreator, updateDomainCreator,
    updateNewPostTextCreator, updateStrategyCreator, updateVideoStrategyCreator,
    updateVideoTimerCreator
} from "../../../redux/simpleTaskReducer";
import {updateTaskIdOpera} from "../../../redux/operaReducer";
import Opera from "../../opera/Opera";
import HeaderContainer from "../header/HeaderContainer";

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

export default connect(mapStateToProps, {updateNewPostTextCreator, updateCountOfVideoCreator, updateCountOfAdvertiseCreator, updateCountOfAdvertiseMoveCreator,
    updateVideoTimerCreator, updateAdvertiseTimerCreator, updateChannelIdCreator, updateCustomerIdCreator, updateDomainCreator, updateStrategyCreator, updateVideoStrategyCreator,
    getDataByTaskId, processTask, fetchTask, updateTaskIdOpera})(ScreenTaskContainer);