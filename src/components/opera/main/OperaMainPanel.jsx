import React from 'react';
import css from './OperaMainPanel.module.css';
import mainPannel from "../../../assets/img/mainPannel.jpg";
import topPanel from "../../../assets/img/topPanel.PNG";
import urlPannel from "../../../assets/img/urlPannel.PNG";
import deleteHistoryPanel from "../../../assets/img/deleteHistoryPanel.PNG";
import leftPanel from "../../../assets/img/leftPanel.PNG";
import bottomPanelFull from "../../../assets/img/bottomPanelFull.PNG";
import youtube_favicon from "../../../assets/img/favicon/youtube_favicon.png";


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
            <div className={css.topPanel}>
                <img className={css.imgWidth} src={topPanel}/>
            </div>
            <div className={css.urlPannel}>
                <img className={css.imgWidth} src={urlPannel}/>
            </div>
            <div className={css.deleteHistoryPanel}>
                <img className={css.imgWidth} src={deleteHistoryPanel}/>
            </div>
            <div className={css.middlePanel}>
                <div className={css.leftPanelStyle}>
                    <ul>
                        <li className={css.selected} tabIndex="1">
                            <div className={css.label}>Сегодня</div>
                        </li>
                        <li className={css.disabled}>
                            <div className={css.label}>Вчера</div>
                        </li>
                        <li className={css.disabled}>
                            <div className={css.label}>Старые</div>
                        </li>
                    </ul>
                </div>
                <div className={css.rightPanelStyle}>
                    <h1 className={css.filtersTitle}>Искать в истории</h1>
                    <div className={css.filters}>
                        <div className={css.search1Wrapper}>
                            <input className={css.search1} type="search" autoComplete="off" incremental="" placeholder="Введите ключевое слово" tabIndex="1"/>
                        </div>
                        <div className={css.dateInputWrapper}>
                            <div className={css.dateInput}>
                                <span className={css.calendarIcon}></span>
                                <div className="value">Выбрать даты</div>
                            </div>
                        </div>
                        <div className={css.clearHistoryButtonWrapper}>
                            <button className={css.clearHistoryButton} disabled="" tabIndex="1">Очистить историю ниже</button>
                        </div>
                    </div>
                    <div className={css.resultPanelWrapper}>
                        <h2 className={css.resultPanelTitle}>Сегодня - понедельник, 13 декабря 2021 г.</h2>
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