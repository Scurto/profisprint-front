import React from 'react';
import css from './OperaBottomPanel.module.css';
import bottomPanelFull from "../../../assets/img/bottomPanelFull.PNG";


const OperaBottomPanel = () => {
    return (
        <img className={css.imgWidth} src={bottomPanelFull}/>
    );
};

export default OperaBottomPanel;