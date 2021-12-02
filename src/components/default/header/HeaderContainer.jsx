import React from "react";
import Preloader from "../../common/Preloader";
import Header from "./Header";
import * as axios from "axios";
import {connect} from "react-redux";
import {setAuthUserData} from "../../../redux/authReducer";
import {Link} from "react-router-dom";

class HeaderContainer extends React.Component {

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
        return <Header {...this.props}></Header>
        // return <div>The Header</div>
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);