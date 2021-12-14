import React from 'react';
import css from './LeftPanel.module.css';


const LeftPanel = (props) => {

    return (
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
    );
};

export default LeftPanel;