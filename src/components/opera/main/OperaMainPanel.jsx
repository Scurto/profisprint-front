import React from 'react';
import css from './OperaMainPanel.module.css';
import mainPannel from "../../../assets/img/mainPannel.jpg";
import topPanel from "../../../assets/img/topPanel.PNG";
import urlPannel from "../../../assets/img/urlPannel.PNG";
import deleteHistoryPanel from "../../../assets/img/deleteHistoryPanel.PNG";
import leftPanel from "../../../assets/img/leftPanel.PNG";
import bottomPanelFull from "../../../assets/img/bottomPanelFull.PNG";
import youtube_favicon from "../../../assets/img/favicon/youtube_favicon.png";
import ResultPanelTitleContainer from "./resultPanelTitle/ResultPanelTitleContainer";
import RightPanelHeaderContainer from "./rightPanelHeader/ResultPanelTitleContainer";
import LeftPanelContainer from "./leftPanel/LeftPanelContainer";
import HeaderTabPanelContainer from "./headerTabPanel/HeaderTabPanelContainer";


function getFavicon() {
    return youtube_favicon;
}

const OperaMainPanel = () => {
    let sectionStyle = {
        backgroundImage: `url(${getFavicon()})`
    };
    // let sectionStyle = {
    //     backgroundImage: `url(${require("../../../assets/img/favicon/youtube_favicon.png")})`
    // };


    return (<div className={css.operaMainPanel}>
            {/*<div className={css.topPanel}>*/}
            {/*    <img className={css.imgWidth} src={topPanel}/>*/}
            {/*</div>*/}
            <HeaderTabPanelContainer></HeaderTabPanelContainer>
            <div className={css.urlPannel}>
                <img className={css.imgWidth} src={urlPannel}/>
            </div>
            <div className={css.deleteHistoryPanel}>
                <img className={css.imgWidth} src={deleteHistoryPanel}/>
            </div>
            <div className={css.middlePanel}>
                <LeftPanelContainer></LeftPanelContainer>
                <div className={css.rightPanelStyle}>
                    <RightPanelHeaderContainer></RightPanelHeaderContainer>
                    <div className={css.resultPanelWrapper}>
                        <ResultPanelTitleContainer></ResultPanelTitleContainer>
                        <div className={css.resultPanel}>
                            <div className={css.visitGroup}>
                                <a className={css.visitEntry} title="" href="" target="" tabIndex="1">
                                    <span className={css.visitTime}>17:15</span>
                                    {/*<div className={css.visitFavicon} style={{backgroundImage: `url(${favicon})`}}></div>*/}
                                    <div className={css.visitFavicon} style={sectionStyle}></div>

                                    {/*<div style={{background: `url(${favicon})`}}></div>*/}
                                    <span className={css.visitUrl}>www.youtube.com</span>
                                    <span className={css.visitTitle}>ХАЛЯВА КС ГО — ЗАБЕРИ СВОЮ ХАЛЯВУ НА САЙТЕ ggDrop БЕСПЛАТНЫЕ КЕЙСЫ CS GO - YouTube</span>
                                </a>
                            </div>
                            <div className={css.visitGroup}>
                                <a className={css.visitEntry} title="" href="" target="" tabIndex="1">
                                    <span className={css.visitTime}>17:15</span>
                                    {/*<div className={css.visitFavicon} style={{backgroundImage: `url(${favicon})`}}></div>*/}
                                    <div className={css.visitFavicon} style={sectionStyle}></div>

                                    {/*<div style={{background: `url(${favicon})`}}></div>*/}
                                    <span className={css.visitUrl}>www.youtube.com</span>
                                    <span className={css.visitTitle}>Akela🥺Rhene Ke Aadat_cry_Ise Sad Shayari WhatsApp status 😞 FF||#broken - YouTube</span>
                                </a>
                            </div>
                            <div className={css.visitGroup}>
                                <a className={css.visitEntry} title="" href="" target="" tabIndex="1">
                                    <span className={css.visitTime}>17:15</span>
                                    {/*<div className={css.visitFavicon} style={{backgroundImage: `url(${favicon})`}}></div>*/}
                                    <div className={css.visitFavicon} style={sectionStyle}></div>

                                    {/*<div style={{background: `url(${favicon})`}}></div>*/}
                                    <span className={css.visitUrl}>www.youtube.com</span>
                                    <span className={css.visitTitle}>ХАЛЯВА КС ГО — ЗАБЕРИ СВОЮ ХАЛЯВУ НА САЙТЕ ggDrop БЕСПЛАТНЫЕ КЕЙСЫ CS GO - YouTube</span>
                                </a>
                            </div>
                            <div className={css.visitGroup}>
                                <a className={css.visitEntry} title="" href="" target="" tabIndex="1">
                                    <span className={css.visitTime}>17:15</span>
                                    {/*<div className={css.visitFavicon} style={{backgroundImage: `url(${favicon})`}}></div>*/}
                                    <div className={css.visitFavicon} style={sectionStyle}></div>

                                    {/*<div style={{background: `url(${favicon})`}}></div>*/}
                                    <span className={css.visitUrl}>www.youtube.com</span>
                                    <span className={css.visitTitle}>ХАЛЯВА КС ГО — ЗАБЕРИ СВОЮ ХАЛЯВУ НА САЙТЕ ggDrop БЕСПЛАТНЫЕ КЕЙСЫ CS GO - YouTube</span>
                                </a>
                            </div>
                            <div className={css.visitGroup}>
                                <a className={css.visitEntry} title="" href="" target="" tabIndex="1">
                                    <span className={css.visitTime}>17:15</span>
                                    {/*<div className={css.visitFavicon} style={{backgroundImage: `url(${favicon})`}}></div>*/}
                                    <div className={css.visitFavicon} style={sectionStyle}></div>

                                    {/*<div style={{background: `url(${favicon})`}}></div>*/}
                                    <span className={css.visitUrl}>www.youtube.com</span>
                                    <span className={css.visitTitle}>ХАЛЯВА КС ГО — ЗАБЕРИ СВОЮ ХАЛЯВУ НА САЙТЕ ggDrop БЕСПЛАТНЫЕ КЕЙСЫ CS GO - YouTube</span>
                                </a>
                            </div>
                            <div className={css.visitGroup}>
                                <a className={css.visitEntry} title="" href="" target="" tabIndex="1">
                                    <span className={css.visitTime}>17:15</span>
                                    {/*<div className={css.visitFavicon} style={{backgroundImage: `url(${favicon})`}}></div>*/}
                                    <div className={css.visitFavicon} style={sectionStyle}></div>

                                    {/*<div style={{background: `url(${favicon})`}}></div>*/}
                                    <span className={css.visitUrl}>www.youtube.com</span>
                                    <span className={css.visitTitle}>ХАЛЯВА КС ГО — ЗАБЕРИ СВОЮ ХАЛЯВУ НА САЙТЕ ggDrop БЕСПЛАТНЫЕ КЕЙСЫ CS GO - YouTube</span>
                                </a>
                            </div>
                            <div className={css.visitGroup}>
                                <a className={css.visitEntry} title="" href="" target="" tabIndex="1">
                                    <span className={css.visitTime}>17:15</span>
                                    {/*<div className={css.visitFavicon} style={{backgroundImage: `url(${favicon})`}}></div>*/}
                                    <div className={css.visitFavicon} style={sectionStyle}></div>

                                    {/*<div style={{background: `url(${favicon})`}}></div>*/}
                                    <span className={css.visitUrl}>www.youtube.com</span>
                                    <span className={css.visitTitle}>ХАЛЯВА КС ГО — ЗАБЕРИ СВОЮ ХАЛЯВУ НА САЙТЕ ggDrop БЕСПЛАТНЫЕ КЕЙСЫ CS GO - YouTube</span>
                                </a>
                            </div>
                            <div className={css.visitGroup}>
                                <a className={css.visitEntry} title="" href="" target="" tabIndex="1">
                                    <span className={css.visitTime}>17:15</span>
                                    {/*<div className={css.visitFavicon} style={{backgroundImage: `url(${favicon})`}}></div>*/}
                                    <div className={css.visitFavicon} style={sectionStyle}></div>

                                    {/*<div style={{background: `url(${favicon})`}}></div>*/}
                                    <span className={css.visitUrl}>www.youtube.com</span>
                                    <span className={css.visitTitle}>ХАЛЯВА КС ГО — ЗАБЕРИ СВОЮ ХАЛЯВУ НА САЙТЕ ggDrop БЕСПЛАТНЫЕ КЕЙСЫ CS GO - YouTube</span>
                                </a>
                            </div>
                            <div className={css.visitGroup}>
                                <a className={css.visitEntry} title="" href="" target="" tabIndex="1">
                                    <span className={css.visitTime}>17:15</span>
                                    {/*<div className={css.visitFavicon} style={{backgroundImage: `url(${favicon})`}}></div>*/}
                                    <div className={css.visitFavicon} style={sectionStyle}></div>

                                    {/*<div style={{background: `url(${favicon})`}}></div>*/}
                                    <span className={css.visitUrl}>www.youtube.com</span>
                                    <span className={css.visitTitle}>ХАЛЯВА КС ГО — ЗАБЕРИ СВОЮ ХАЛЯВУ НА САЙТЕ ggDrop БЕСПЛАТНЫЕ КЕЙСЫ CS GO - YouTube</span>
                                </a>
                            </div>
                            <div className={css.visitGroup}>
                                <a className={css.visitEntry} title="" href="" target="" tabIndex="1">
                                    <span className={css.visitTime}>17:15</span>
                                    {/*<div className={css.visitFavicon} style={{backgroundImage: `url(${favicon})`}}></div>*/}
                                    <div className={css.visitFavicon} style={sectionStyle}></div>

                                    {/*<div style={{background: `url(${favicon})`}}></div>*/}
                                    <span className={css.visitUrl}>www.youtube.com</span>
                                    <span className={css.visitTitle}>ХАЛЯВА КС ГО — ЗАБЕРИ СВОЮ ХАЛЯВУ НА САЙТЕ ggDrop БЕСПЛАТНЫЕ КЕЙСЫ CS GO - YouTube</span>
                                </a>
                            </div>
                            <div className={css.visitGroup}>
                                <a className={css.visitEntry} title="" href="" target="" tabIndex="1">
                                    <span className={css.visitTime}>17:15</span>
                                    {/*<div className={css.visitFavicon} style={{backgroundImage: `url(${favicon})`}}></div>*/}
                                    <div className={css.visitFavicon} style={sectionStyle}></div>

                                    {/*<div style={{background: `url(${favicon})`}}></div>*/}
                                    <span className={css.visitUrl}>www.youtube.com</span>
                                    <span className={css.visitTitle}>ХАЛЯВА КС ГО — ЗАБЕРИ СВОЮ ХАЛЯВУ НА САЙТЕ ggDrop БЕСПЛАТНЫЕ КЕЙСЫ CS GO - YouTube</span>
                                </a>
                            </div>
                            <div className={css.visitGroup}>
                                <a className={css.visitEntry} title="" href="" target="" tabIndex="1">
                                    <span className={css.visitTime}>17:15</span>
                                    {/*<div className={css.visitFavicon} style={{backgroundImage: `url(${favicon})`}}></div>*/}
                                    <div className={css.visitFavicon} style={sectionStyle}></div>

                                    {/*<div style={{background: `url(${favicon})`}}></div>*/}
                                    <span className={css.visitUrl}>www.youtube.com</span>
                                    <span className={css.visitTitle}>ХАЛЯВА КС ГО — ЗАБЕРИ СВОЮ ХАЛЯВУ НА САЙТЕ ggDrop БЕСПЛАТНЫЕ КЕЙСЫ CS GO - YouTube</span>
                                </a>
                            </div>
                            <div className={css.visitGroup}>
                            <a className={css.visitEntry} title="" href="" target="" tabIndex="1">
                                <span className={css.visitTime}>17:15</span>
                                {/*<div className={css.visitFavicon} style={{backgroundImage: `url(${favicon})`}}></div>*/}
                                <div className={css.visitFavicon} style={sectionStyle}></div>

                                {/*<div style={{background: `url(${favicon})`}}></div>*/}
                                <span className={css.visitUrl}>www.youtube.com</span>
                                <span className={css.visitTitle}>ХАЛЯВА КС ГО — ЗАБЕРИ СВОЮ ХАЛЯВУ НА САЙТЕ ggDrop БЕСПЛАТНЫЕ КЕЙСЫ CS GO - YouTube</span>
                            </a>
                        </div>
                            <div className={css.visitGroup}>
                                <a className={css.visitEntry} title="" href="" target="" tabIndex="1">
                                    <span className={css.visitTime}>17:15</span>
                                    {/*<div className={css.visitFavicon} style={{backgroundImage: `url(${favicon})`}}></div>*/}
                                    <div className={css.visitFavicon} style={sectionStyle}></div>

                                    {/*<div style={{background: `url(${favicon})`}}></div>*/}
                                    <span className={css.visitUrl}>www.youtube.com</span>
                                    <span className={css.visitTitle}>ХАЛЯВА КС ГО — ЗАБЕРИ СВОЮ ХАЛЯВУ НА САЙТЕ ggDrop БЕСПЛАТНЫЕ КЕЙСЫ CS GO - YouTube</span>
                                </a>
                            </div>
                            <div className={css.visitGroup}>
                                <a className={css.visitEntry} title="" href="" target="" tabIndex="1">
                                    <span className={css.visitTime}>17:15</span>
                                    {/*<div className={css.visitFavicon} style={{backgroundImage: `url(${favicon})`}}></div>*/}
                                    <div className={css.visitFavicon} style={sectionStyle}></div>

                                    {/*<div style={{background: `url(${favicon})`}}></div>*/}
                                    <span className={css.visitUrl}>www.youtube.com</span>
                                    <span className={css.visitTitle}>ХАЛЯВА КС ГО — ЗАБЕРИ СВОЮ ХАЛЯВУ НА САЙТЕ ggDrop БЕСПЛАТНЫЕ КЕЙСЫ CS GO - YouTube</span>
                                </a>
                            </div>
                            <div className={css.visitGroup}>
                                <a className={css.visitEntry} title="" href="" target="" tabIndex="1">
                                    <span className={css.visitTime}>17:15</span>
                                    {/*<div className={css.visitFavicon} style={{backgroundImage: `url(${favicon})`}}></div>*/}
                                    <div className={css.visitFavicon} style={sectionStyle}></div>

                                    {/*<div style={{background: `url(${favicon})`}}></div>*/}
                                    <span className={css.visitUrl}>www.youtube.com</span>
                                    <span className={css.visitTitle}>ХАЛЯВА КС ГО — ЗАБЕРИ СВОЮ ХАЛЯВУ НА САЙТЕ ggDrop БЕСПЛАТНЫЕ КЕЙСЫ CS GO - YouTube</span>
                                </a>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <div className={css.bottomPanelFull}>
                <img className={css.imgWidth} src={bottomPanelFull}/>
            </div>
    </div>
    );
};

export default OperaMainPanel;