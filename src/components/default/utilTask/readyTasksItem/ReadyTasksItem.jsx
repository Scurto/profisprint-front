import React from 'react';
import css from './ReadyTasksItem.module.css';

class ReadyTasksItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className={css.divTableRow}>
            <div className={css.divTableCol200} align="center">{this.props.taskId}</div>
            <div className={css.divTableCol200} align="center">{this.props.date}</div>
            <div className={css.divTableCol} align="center">{this.props.channelId}</div>
            <div className={css.divTableCol200} align="center">{this.props.customerId}</div>
            <div className={css.divTableUrlCol} align="center">{this.props.domainUrl}</div>
            <button onClick={() => {this.props.relatedTask(this.props)}}>RelatedTask</button>
        </div>
    }
}


export default ReadyTasksItem;
