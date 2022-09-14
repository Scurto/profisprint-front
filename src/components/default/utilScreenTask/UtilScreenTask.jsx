import React from 'react';
import css from './UtilScreenTask.module.css';
import ReadyTasksItem from "../readyTask/readyTasksItem/ReadyTasksItem";

class UtilScreenTask extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);

        let state = this.props.utilTaskPage;

        let readyTasksList = state.readyTasksScreenData.map(value => {
            return <ReadyTasksItem taskId={value.taskId}
                                   date={value.date}
                                   channelId={value.channelId}
                                   customerId={value.customerId}
                                   domainUrl={value.domainUrl}
                                   relatedTask={this.props.relatedTask}
            />;
        });

        return <div>
            <div className={css.overflow}>
                <div className={css.divTable}>
                    <div className={css.divTableRow}>
                        <div className={css.divTableCol200} align="center">Task ID</div>
                        <div className={css.divTableCol200} align="center">Date</div>
                        <div className={css.divTableCol} align="center">Channel ID</div>
                        <div className={css.divTableCol200} align="center">Customer ID</div>
                        <div className={css.divTableUrlCol} align="center">Domain URL</div>
                    </div>
                    {readyTasksList}
                    {/*{state.readyTasksData.map(value => {*/}
                    {/*    return <div>*/}
                    {/*        <div className={css.divTableUrlCol} align="center">{value.domainUrl}</div>*/}
                    {/*        <button onClick={() => {props.relatedTask(value)}}>RelatedTask</button>*/}
                    {/*    </div>*/}
                    {/*})}*/}
                </div>
            </div>
            RELATED TASKS
            <div className={css.divTable}>
                <div className={css.divTableRow}>
                    <div className={css.divTableCol200} align="center">Task ID</div>
                    <div className={css.divTableCol200} align="center">Date</div>
                    <div className={css.divTableCol} align="center">Channel ID</div>
                    <div className={css.divTableCol200} align="center">Customer ID</div>
                    <div className={css.divTableUrlCol} align="center">Domain URL</div>
                </div>
            </div>
        </div>
    }
}

export default UtilScreenTask;
