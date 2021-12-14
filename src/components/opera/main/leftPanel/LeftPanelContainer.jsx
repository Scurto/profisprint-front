import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import LeftPanel from "./LeftPanel";


class LeftPanelContainer extends React.Component {

    componentDidMount() {
    }

    render() {
        return <LeftPanel {...this.props}></LeftPanel>
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, {})(LeftPanelContainer);