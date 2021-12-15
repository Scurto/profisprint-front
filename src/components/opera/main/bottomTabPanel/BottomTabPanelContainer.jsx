import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import BottomTabPanel from "./BottomTabPanel";


class BottomPanelContainer extends React.Component {

    componentDidMount() {
    }

    render() {
        return <BottomTabPanel {...this.props}></BottomTabPanel>
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, {})(BottomPanelContainer);