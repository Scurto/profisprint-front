import React from 'react';
import css from './OperaMainPanel.module.css';
import mainPannel from "../../../assets/img/mainPannel.jpg";
import topPanel from "../../../assets/img/topPanel.PNG";
import urlPannel from "../../../assets/img/urlPannel.PNG";
import deleteHistoryPanel from "../../../assets/img/deleteHistoryPanel.PNG";
import leftPanel from "../../../assets/img/leftPanel.PNG";
import bottomPanelFull from "../../../assets/img/bottomPanelFull.PNG";
import youtube_favicon from "../../../assets/img/favicon/youtube_favicon.png";
import vk_favicon from "../../../assets/img/favicon/vk_favicon.png";
import ResultPanelTitleContainer from "./resultPanelTitle/ResultPanelTitleContainer";
import RightPanelHeaderContainer from "./rightPanelHeader/ResultPanelTitleContainer";
import LeftPanelContainer from "./leftPanel/LeftPanelContainer";
import HeaderTabPanelContainer from "./headerTabPanel/HeaderTabPanelContainer";
import BottomPanelContainer from "./bottomTabPanel/BottomTabPanelContainer";
import close from "../../../assets/img/opera/close.svg";
import history from "../../../assets/img/opera/history.svg";


function getFavicon(value) {
    switch (value) {
        case 'youtube': return youtube_favicon;
        case 'close': return close;
        case 'history': return history;
        case 'vk': return vk_favicon;
    }
}

const OperaMainPanel = (props) => {
    let sectionStyle = {
        backgroundImage: `url(${getFavicon()})`
    };
    let youtubeIcon = {
        backgroundImage: `url(${getFavicon('youtube')})`
    };
    let closeIcon = {
        backgroundImage: `url(${getFavicon('close')})`
    };
    let historyIcon = {
        backgroundImage: `url(${getFavicon('history')})`
    };
    let vkIcon = {
        backgroundImage: `url(${getFavicon('vk')})`
    };

    console.log('OperaMainPanel', props);

    return (<div className={css.operaMainPanel}>
            <HeaderTabPanelContainer {...props}></HeaderTabPanelContainer>
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
                                    <div className={css.visitFavicon} style={youtubeIcon}></div>

                                    {/*<div style={{background: `url(${favicon})`}}></div>*/}
                                    <span className={css.visitUrl}>www.youtube.com</span>
                                    <span className={css.visitTitle}>ХАЛЯВА КС ГО — ЗАБЕРИ СВОЮ ХАЛЯВУ НА САЙТЕ ggDrop БЕСПЛАТНЫЕ КЕЙСЫ CS GO - YouTube</span>
                                </a>
                            </div>
                            <div className={css.visitGroup}>
                                <a className={css.visitEntry} title="" href="" target="" tabIndex="1">
                                    <span className={css.visitTime}>17:15</span>
                                    {/*<div className={css.visitFavicon} style={{backgroundImage: `url(${favicon})`}}></div>*/}
                                    <div className={css.visitFavicon} style={youtubeIcon}></div>

                                    {/*<div style={{background: `url(${favicon})`}}></div>*/}
                                    <span className={css.visitUrl}>www.youtube.com</span>
                                    <span className={css.visitTitle}>Akela🥺Rhene Ke Aadat_cry_Ise Sad Shayari WhatsApp status 😞 FF||#broken - YouTube</span>
                                </a>
                            </div>
                            <div className={css.visitGroup}>
                                <a className={css.visitEntry} title="" href="" target="" tabIndex="1">
                                    <span className={css.visitTime}>17:15</span>
                                    {/*<div className={css.visitFavicon} style={{backgroundImage: `url(${favicon})`}}></div>*/}
                                    <div className={css.visitFavicon} style={youtubeIcon}></div>

                                    {/*<div style={{background: `url(${favicon})`}}></div>*/}
                                    <span className={css.visitUrl}>www.youtube.com</span>
                                    <span className={css.visitTitle}>ХАЛЯВА КС ГО — ЗАБЕРИ СВОЮ ХАЛЯВУ НА САЙТЕ ggDrop БЕСПЛАТНЫЕ КЕЙСЫ CS GO - YouTube</span>
                                </a>
                            </div>
                            <div className={css.visitGroup}>
                                <a className={css.visitEntry} title="" href="" target="" tabIndex="1">
                                    <span className={css.visitTime}>17:15</span>
                                    {/*<div className={css.visitFavicon} style={{backgroundImage: `url(${favicon})`}}></div>*/}
                                    <div className={css.visitFavicon} style={vkIcon}></div>

                                    {/*<div style={{background: `url(${favicon})`}}></div>*/}
                                    <span className={css.visitUrl}>https://away.vk.com/away.php</span>
                                    <span className={css.visitTitle}>https://away.vk.com/away.php</span>
                                </a>
                            </div>



                        </div>
                    </div>
                </div>
            </div>
            <BottomPanelContainer></BottomPanelContainer>
    </div>
    );
};

export default OperaMainPanel;