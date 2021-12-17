import React from 'react';
import css from './HeaderTabPanel.module.css';
import operaLeftMenuIcon from "../../../../assets/img/opera/topNavBar/operaLeftMenuIcon.PNG";
import operaRightMenuIcon from "../../../../assets/img/opera/topNavBar/operaRightMenuIcon.PNG";
import plus from "../../../../assets/img/opera/topNavBar/plus.PNG";
import close from "../../../../assets/img/opera/close.svg";
import history from "../../../../assets/img/opera/history.svg";
import {faviconAPI} from "../../favicon";

function getFavicon(value) {
    return faviconAPI.getFavicon(value);
}

const HeaderTabPanel = (props) => {

    let tabWidth = 200
    let labelWidth = 138;

    if (props.operaPage.task.navList.length+1 > 7) {
        tabWidth = (1650 - 300) / props.operaPage.task.navList.length+1;
        labelWidth = tabWidth - 62;
    }

    let tabList = props.operaPage.task.navList.map((value,index) => {
        let icon = value.icon

        return <div className={css.fakeTab} style={{width: tabWidth+'px'}}>
           <div className={css.favicon} style={getFavicon(icon)} />
           <div className={css.label} style={{width: labelWidth+'px'}}>{value.title}<div className={css.shadow}></div></div>
           <div className={css.closeFavicon} style={getFavicon('close')} />
            {props.operaPage.task.navList.length - 1 != index ?
                <div className={css.delimiter} /> :
                <div />
            }
        </div>
    });

    return (
        <div className={css.tabs}>
            <div className={css.tab}>
                <img src={operaLeftMenuIcon}/>
            </div>
            {tabList}
            <div className={css.historyTab} style={{width: tabWidth+'px'}}>
                <div className={css.historyFavicon} style={getFavicon('history')}></div>
                <div className={css.label} style={{width: labelWidth+'px'}}>История</div>
                <div className={css.closeFavicon} style={getFavicon('close')}></div>
            </div>
            <div className={css.tab}>
                <img src={plus}/>
            </div>
            <div className={css.tabRight}>
                <img src={operaRightMenuIcon}/>
            </div>
        </div>
    );
};

export default HeaderTabPanel;