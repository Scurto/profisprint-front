import React from "react";
import Chrome from "./Chrome";
import * as axios from "axios";
import {connect} from "react-redux";
import {testClickCreator} from "../../redux/chromeReducer";

class ChromeContainer extends React.Component {

    componentDidMount() {
        // axios.get(`http://localhost:8830/test`).then(resp => {
        //     console.log(resp.data);
        // })
    }

    render() {
        return <Chrome {...this.props}></Chrome>
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

export default connect(mapStateToProps, mapDispatchToProps)(ChromeContainer);