import React from 'react';
import css from './OperaMainPanel.module.css';
import urlPannel from "../../../assets/img/urlPannel.PNG";
import deleteHistoryPanel from "../../../assets/img/deleteHistoryPanel.PNG";
import ResultPanelTitleContainer from "./resultPanelTitle/ResultPanelTitleContainer";
import RightPanelHeaderContainer from "./rightPanelHeader/ResultPanelTitleContainer";
import LeftPanelContainer from "./leftPanel/LeftPanelContainer";
import HeaderTabPanelContainer from "./headerTabPanel/HeaderTabPanelContainer";
import BottomPanelContainer from "./bottomTabPanel/BottomTabPanelContainer";
import {faviconAPI} from "../favicon";


function getFavicon(value) {
    return faviconAPI.getFavicon(value);
}

const OperaMainPanel = (props) => {
    let resultList = props.operaPage.task.resultList.map((value,index) => {
        let icon = value.icon

        return <div className={css.visitGroup}>
            <a className={css.visitEntry} title="" href="" target="" tabIndex="1">
                <span className={css.visitTime}>{value.time}</span>
                <div className={css.visitFavicon} style={getFavicon(icon)} />
                <span className={css.visitUrl}>{value.title}</span>
                <span className={css.visitTitle}>{value.text}</span>
            </a>
        </div>
    });



    return (<div className={css.operaMainPanel}>
            <HeaderTabPanelContainer {...props}></HeaderTabPanelContainer>
            <div className={css.urlPannel}>
                <img className={css.imgWidth} src={urlPannel}/>
            </div>
            <div className={css.deleteHistoryPanel}>
                <img className={css.imgWidth} src={deleteHistoryPanel}/>
            </div>
            <div className={css.middlePanel}>
                <LeftPanelContainer />
                <div className={css.rightPanelStyle}>
                    <RightPanelHeaderContainer />
                    <div className={css.resultPanelWrapper}>
                        <ResultPanelTitleContainer />
                        <div className={css.resultPanel}>
                            {resultList}
                        </div>
                    </div>
                </div>
            </div>
            <BottomPanelContainer {...props}></BottomPanelContainer>
    </div>
    );
};

export default OperaMainPanel;