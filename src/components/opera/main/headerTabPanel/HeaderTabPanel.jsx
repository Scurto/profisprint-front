import React from 'react';
import css from './HeaderTabPanel.module.css';
import operaLeftMenuIcon from "../../../../assets/img/opera/topNavBar/operaLeftMenuIcon.PNG";
import operaRightMenuIcon from "../../../../assets/img/opera/topNavBar/operaRightMenuIcon.PNG";
import plus from "../../../../assets/img/opera/topNavBar/plus.PNG";
import youtube_favicon from "../../../../assets/img/favicon/youtube_favicon.png";
import close from "../../../../assets/img/opera/close.svg";
import history from "../../../../assets/img/opera/history.svg";

function getFavicon(value) {
    switch (value) {
        case 'youtube': return youtube_favicon;
        case 'close': return close;
        case 'history': return history;
    }

}

const HeaderTabPanel = (props) => {

    let youtubeIcon = {
        backgroundImage: `url(${getFavicon('youtube')})`
    };
    let closeIcon = {
        backgroundImage: `url(${getFavicon('close')})`
    };
    let historyIcon = {
        backgroundImage: `url(${getFavicon('history')})`
    };

    return (
        <div className={css.tabs}>
            <div className={css.tab}>
                <img className={css.test} src={operaLeftMenuIcon}/>
            </div>
            <div className={css.fakeTab}>
                <div className={css.favicon} style={youtubeIcon}></div>
                <label className={css.label}>YouTube</label>
                <div className={css.delimiter}></div>
                <div className={css.closeFavicon} style={closeIcon}></div>
            </div>
            <div className={css.fakeTab}>
                <div className={css.favicon} style={youtubeIcon}></div>
                {/*<label className={css.label}>ПРОВЕРКА 3 НОВЫХ РЕЖИМОВ НА KNIFEX</label>*/}
                <div className={css.label}>ПРОВЕРКА 3 НОВЫХ РЕЖИМОВ НА KNIFEX</div>
                {/*<div className={css.delimiter}></div>*/}
                <div className={css.closeFavicon} style={closeIcon}></div>
            </div>
            <div className={css.historyTab}>
                <div className={css.historyFavicon} style={historyIcon}></div>
                <label className={css.label}>История</label>
                <div className={css.closeFavicon} style={closeIcon}></div>
            </div>
            <div className={css.tab}>
                <img className={css.test} src={plus}/>
            </div>
            <div className={css.tabRight}>
                <img src={operaRightMenuIcon}/>
            </div>
        </div>
    );
};

export default HeaderTabPanel;