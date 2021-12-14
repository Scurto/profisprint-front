import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import RightPanelHeader from "./RightPanelHeader";


class RightPanelHeaderContainer extends React.Component {

    componentDidMount() {
    }

    render() {
        return <RightPanelHeader {...this.props}></RightPanelHeader>
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, {})(RightPanelHeaderContainer);