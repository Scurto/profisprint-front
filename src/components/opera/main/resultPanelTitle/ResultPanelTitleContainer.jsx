import React from "react";
import * as axios from "axios";
import {connect} from "react-redux";
import ResultPanelTitle from "./ResultPanelTitle";


class ResultPanelTitleContainer extends React.Component {

    componentDidMount() {
    }

    render() {
        return <ResultPanelTitle {...this.props}></ResultPanelTitle>
    }
}

const mapStateToProps = (state) => {
    return {
    }
}

export default connect(mapStateToProps, {})(ResultPanelTitleContainer);