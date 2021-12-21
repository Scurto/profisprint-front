import React from 'react';
import css from './BottomTabPanel.module.css';
import bottomPanelFull from "../../../../assets/img/bottomPanelFull.PNG";
import bottomLeftPanel from "../../../../assets/img/opera/bottomBar/bottomLeftPanel.PNG";
import bottomRightPanel from "../../../../assets/img/opera/bottomBar/bottomRightPanel.PNG";


const BottomTabPanel = (props) => {

    // let date = new Date();
    // let time = (date.getHours()<10?'0':'') + date.getHours() + ':' + (date.getMinutes()<10?'0':'') + date.getMinutes();
    // let localDate = date.getDate() + '.' + (date.getMonth()+1) + '.' + date.getFullYear()
    let time = props.operaPage.task.date.time;
    let localDate = props.operaPage.task.date.date;
    // console.log('BottomTabPanel', props)
    return (
        <div className={css.bottomPanelFull}>
            <img className={css.bottomLeftPanel} src={bottomLeftPanel}/>
            <div className={css.bottomClockPanel}>
                <div>{time}</div>
                <div>{localDate}</div>
            </div>
            <img className={css.bottomRightPanel} src={bottomRightPanel}/>
        </div>
    );
};

export default BottomTabPanel;


// gamevvtv - https://vk.com/public203883547
// https://away.vk.com/away.php
// vmgametv - YouTube - https://www.youtube.com/channel/UCEUjUp43XOOI2iphTpO3HBQ/videos