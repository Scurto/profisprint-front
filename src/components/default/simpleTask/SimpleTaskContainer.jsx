import React from "react";
import Preloader from "../../common/Preloader";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../../redux/authReducer";
import {Link} from "react-router-dom";
import SimpleTask from "./SimpleTask";
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

class SimpleTaskContainer extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(resp => {
        //     if(resp.data.resultCode === 0) {
        //         let {id, login, email} = resp.data.data;
        //         console.log(id)
        //         console.log(email)
        //         console.log(login)
        //         this.props.setAuthUserData(id, email, login);
        //     }
        // })
    }

    render() {
        // return <Header {...this.props}></Header>
        return <SimpleTask {...this.props}></SimpleTask>
    }
}

const mapStateToProps = (state) => {
    return {
        simpleTaskPage: state.simpleTaskPage
    }
}

export default connect(mapStateToProps, {updateNewPostTextCreator, updateCountOfVideoCreator, updateCountOfAdvertiseCreator, updateCountOfAdvertiseMoveCreator,
    updateVideoTimerCreator, updateAdvertiseTimerCreator, updateChannelIdCreator, updateCustomerIdCreator, updateDomainCreator, updateStrategyCreator, updateVideoStrategyCreator,
    getDataByTaskId, processTask, fetchTask})(SimpleTaskContainer);