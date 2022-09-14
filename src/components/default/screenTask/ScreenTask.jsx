import React from 'react';
import css from './ScreenTask.module.css';
import YouTube from "react-youtube";
import {Link, NavLink} from "react-router-dom";

class ScreenTask extends React.Component {

    constructor(props) {
        super(props);
    }

    onKeyPressed(e) {
        console.log(e.key);
    }

    getDataByTaskId = () => {
        this.props.getScreenDataByTaskId(this.props.screenTaskPage.taskIdText);
    };
    fetchTask = () => {
        console.log('fetchTask', this.props);
        this.props.fetchScreenTask(this.props.screenTaskPage);
    };
    processTask = () => {
        console.log('processTask', this.props);
        this.props.processScreenTask(this.props.screenTaskPage);
    };

    onTaskIdChange = (e) => {
        let text = e.target.value;
        this.props.updateNewPostTextCreator(text);
    };
    onCountOfVideoChange = (e) => {
        let text = e.target.value;
        this.props.updateScreenCountOfVideoCreator(text);
    };
    onCountOfAdvertiseChange = (e) => {
        let text = e.target.value;
        this.props.updateScreenCountOfAdvertiseCreator(text);
    };
    onCountOfAdvertiseMoveChange = (e) => {
        let text = e.target.value;
        this.props.updateScreenCountOfAdvertiseMoveCreator(text);
    };
    onVideoTimerChange = (e) => {
        let text = e.target.value;
        this.props.updateScreenVideoTimerCreator(text);
    };
    onAdvertiseTimerChange = (e) => {
        let text = e.target.value;
        this.props.updateScreenAdvertiseTimerCreator(text);
    };
    onChannelIdChange = (e) => {
        let text = e.target.value;
        this.props.updateChannelIdCreator(text);
    };
    onCustomerIdChange = (e) => {
        let text = e.target.value;
        this.props.updateCustomerIdCreator(text);
    };
    onDomainChange = (e) => {
        let text = e.target.value;
        this.props.updateDomainCreator(text);
    };
    onStrategyChange = (e) => {
        let text = e.target.value;
        this.props.updateStrategyCreator(text);
    };
    onVideoStrategyChange = (e) => {
        let text = e.target.value;
        this.props.updateVideoStrategyCreator(text);
    };



    render() {
        const opts = {
            height: '200',
            width: '400',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                // https://www.npmjs.com/package/react-youtube
                autoplay: 1,
            },
        };



        let previewList = this.props.screenTaskPage.task.resultList.map((value,index) => {
            return <div className={css.previewBlock}>
                <div>{value.time}</div>
                <div>-</div>
                <div>{value.title}</div>
                <div>-</div>
                <div>{value.text}</div>
                <div>-</div>
                <div>{value.type}</div>
            </div>
        });


        return <div className={css.screenPageDefStyle}>
            <div>
                <input placeholder="Task Id" value={this.props.screenTaskPage.taskIdText} onChange={this.onTaskIdChange}/>
                <button onClick={this.getDataByTaskId}>Get data</button>
                <button onClick={this.fetchTask}>FetchTask</button>
                <button onClick={this.processTask}>ProcessTask</button>
                <Link to={'/opera'} className="btn btn-primary">
                    OPERA
                </Link>
            </div>
            <p></p>
            <div className={css.fieldBlock}>
                <div className={css.fieldBlockMargin}>
                    <div>
                        <p className={css.fieldTitle}>Count of videos</p>
                        <input placeholder="Count of videos" value={this.props.screenTaskPage.countOfVideoText} onChange={this.onCountOfVideoChange}/>
                    </div>
                    <div>
                        <p className={css.fieldTitle}>Count of advertise</p>
                        <input placeholder="Count of advertise" value={this.props.screenTaskPage.countOfAdvertiseText} onChange={this.onCountOfAdvertiseChange}/>
                    </div>
                    <div>
                        <p className={css.fieldTitle}>Count of move</p>
                        <input placeholder="Count of move" value={this.props.screenTaskPage.countOfAdvertiseMoveText} onChange={this.onCountOfAdvertiseMoveChange}/>
                    </div>
                </div>

                <div className={css.fieldBlockMargin}>
                    <div>
                        <p className={css.fieldTitle}>Video Timer</p>
                        <input placeholder="Video Timer" value={this.props.screenTaskPage.videoTimer} onChange={this.onVideoTimerChange}/>
                    </div>
                    <div>
                        <p className={css.fieldTitle}>Advertise Timer</p>
                        <input placeholder="Advertise Timer" value={this.props.screenTaskPage.advertiseTimer} onChange={this.onAdvertiseTimerChange}/>
                    </div>
                </div>
                <div className={css.fieldBlockMargin}>
                    <div>
                        <p className={css.fieldTitle}>Channel id</p>
                        <input placeholder="Channel id" value={this.props.screenTaskPage.channelId} onChange={this.onChannelIdChange}/>
                    </div>
                    <div>
                        <p className={css.fieldTitle}>Customer id</p>
                        <input placeholder="Customer id" value={this.props.screenTaskPage.customerId} onChange={this.onCustomerIdChange}/>
                    </div>
                    <div>
                        <p className={css.fieldTitle}>Domain</p>
                        <input placeholder="Domain" value={this.props.screenTaskPage.domain} onChange={this.onDomainChange}/>
                    </div>
                </div>
                <div className={css.fieldBlockMargin}>
                    <div>
                        <p className={css.fieldTitle}>Strategy</p>
                        <input placeholder="Strategy" value={this.props.screenTaskPage.strategy} onChange={this.onStrategyChange}/>
                    </div>
                    <div>
                        <p className={css.fieldTitle}>Video strategy</p>
                        <input placeholder="Video strategy" value={this.props.screenTaskPage.videoStrategy} onChange={this.onVideoStrategyChange}/>
                    </div>
                    <div>
                        <p className={css.fieldTitle}>MyChannelName: drago ustymenko</p>
                    </div>
                    <div>
                        <p className={css.fieldTitle}>MyChannelUrl: https://www.youtube.com/channel/UCr-Jo1ckws9L7Cswes-1SBg</p>
                    </div>
                    <div>
                        <p className={css.fieldTitle}>StartTime: {this.props.screenTaskPage.startTime}</p>
                    </div>
                    <div>
                        <p className={css.fieldTitle}>EndTime: {this.props.screenTaskPage.endTime}</p>
                    </div>
                    <div>
                        <p className={css.fieldTitle}>Last used videos: {this.props.screenTaskPage.lastUsedVideos}</p>
                    </div>
                    <div>
                        <p className={css.fieldTitle}>Task status: {this.props.screenTaskPage.taskStatus}</p>
                    </div>
                </div>
            </div>
            <div>
                {/*{previewList}*/}
            </div>
            <div className={css.divTable}>
                <div className={css.divTableRow}>
                    <div className={css.divTableCol} align="center">Time</div>
                    <div className={css.divTableCol} align="center">Title</div>
                    <div className={css.divTableCol} align="center">Type</div>
                    <div className={css.divTextTableCol} align="center">Text</div>

                    {/*<div className={css.divTableCol} align="center">Domain URL</div>*/}
                </div>
                {this.props.screenTaskPage.task.resultList.map((value,index) => {
                    return <div className={css.divTableRow}>
                        <div className={css.divTableCol} align="center">{value.time}</div>
                        <div className={css.divTableCol} align="center">{value.title}</div>
                        <div className={css.divTableCol} align="center">{value.type}</div>
                        <div className={css.divTextTableCol} align="center">{value.text}</div>

                    </div>
                })}
            </div>
        </div>
    }

}

export default ScreenTask;
