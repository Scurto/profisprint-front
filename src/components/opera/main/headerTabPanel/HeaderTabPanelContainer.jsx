import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import HeaderTabPanel from "./HeaderTabPanel";


class HeaderTabPanelContainer extends React.Component {

    componentDidMount() {
    }

    render() {
        return <HeaderTabPanel {...this.props}></HeaderTabPanel>
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, {})(HeaderTabPanelContainer);