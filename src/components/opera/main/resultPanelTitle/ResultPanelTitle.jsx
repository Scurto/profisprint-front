import React from 'react';
import css from './ResultPanelTitle.module.css';


const ResultPanelTitle = (props) => {
    let date = new Date();
    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let weekDay = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];

    let month = months[date.getMonth()]
    let day = weekDay[date.getDay() - 1]
    let year = date.getFullYear();
    let localDate = date.getDate();


    return (
        <div>
            <h2 className={css.resultPanelTitle}>Сегодня - {day}, {localDate} {month} {year} г.</h2>
        </div>
    );
};

export default ResultPanelTitle;