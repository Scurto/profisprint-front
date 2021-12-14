import React from 'react';
import css from './RightPanelHeader.module.css';


const RightPanelHeader = (props) => {

    return (
        <div>
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
        </div>
    );
};

export default RightPanelHeader;