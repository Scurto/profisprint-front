import React from 'react';
import css from './SimpleTask.module.css';
import YouTube from "react-youtube";

class SimpleTask extends React.Component {

    constructor(props) {
        super(props);
    }

    onKeyPressed(e) {
        console.log(e.key);
    }

    getDataByTaskId = () => {
        this.props.getDataByTaskId(this.props.simpleTaskPage.taskIdText);
    };
    fetchTask = () => {
        console.log('fetchTask', this.props);
        this.props.fetchTask(this.props.simpleTaskPage);
    };
    processTask = () => {
        console.log('processTask', this.props)
        this.props.processTask(this.props.simpleTaskPage);
    };

    onTaskIdChange = (e) => {
        let text = e.target.value;
        this.props.updateNewPostTextCreator(text);
    };
    onCountOfVideoChange = (e) => {
        let text = e.target.value;
        this.props.updateCountOfVideoCreator(text);
    };
    onCountOfAdvertiseChange = (e) => {
        let text = e.target.value;
        this.props.updateCountOfAdvertiseCreator(text);
    };
    onCountOfAdvertiseMoveChange = (e) => {
        let text = e.target.value;
        this.props.updateCountOfAdvertiseMoveCreator(text);
    };
    onVideoTimerChange = (e) => {
        let text = e.target.value;
        this.props.updateVideoTimerCreator(text);
    };
    onAdvertiseTimerChange = (e) => {
        let text = e.target.value;
        this.props.updateAdvertiseTimerCreator(text);
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


        return <div>
            <div>
                {/*<textarea ref={newPostRef} value={state.newPostText} onChange={onPostChange}></textarea>*/}
                {/*<input value={state.taskId} onChange={onTaskIdChange}/>*/}
                <input placeholder="Task Id" value={this.props.simpleTaskPage.taskIdText} onChange={this.onTaskIdChange}/>
                <button onClick={this.getDataByTaskId}>Get data</button>
                <button onClick={this.fetchTask}>FetchTask</button>
                <button onClick={this.processTask}>ProcessTask</button>
            </div>
            <p></p>
            <div className={css.fieldBlock}>
                <div className={css.fieldBlockMargin}>
                    <div>
                        <p className={css.fieldTitle}>Count of videos</p>
                        <input placeholder="Count of videos" value={this.props.simpleTaskPage.countOfVideoText} onChange={this.onCountOfVideoChange}/>
                    </div>
                    <div>
                        <p className={css.fieldTitle}>Count of advertise</p>
                        <input placeholder="Count of advertise" value={this.props.simpleTaskPage.countOfAdvertiseText} onChange={this.onCountOfAdvertiseChange}/>
                    </div>
                    <div>
                        <p className={css.fieldTitle}>Count of move</p>
                        <input placeholder="Count of move" value={this.props.simpleTaskPage.countOfAdvertiseMoveText} onChange={this.onCountOfAdvertiseMoveChange}/>
                    </div>
                </div>

                <div className={css.fieldBlockMargin}>
                    <div>
                        <p className={css.fieldTitle}>Video Timer</p>
                        <input placeholder="Video Timer" value={this.props.simpleTaskPage.videoTimer} onChange={this.onVideoTimerChange}/>
                    </div>
                    <div>
                        <p className={css.fieldTitle}>Advertise Timer</p>
                        <input placeholder="Advertise Timer" value={this.props.simpleTaskPage.advertiseTimer} onChange={this.onAdvertiseTimerChange}/>
                    </div>
                </div>
                <div className={css.fieldBlockMargin}>
                    <div>
                        <p className={css.fieldTitle}>Channel id</p>
                        <input placeholder="Channel id" value={this.props.simpleTaskPage.channelId} onChange={this.onChannelIdChange}/>
                    </div>
                    <div>
                        <p className={css.fieldTitle}>Customer id</p>
                        <input placeholder="Customer id" value={this.props.simpleTaskPage.customerId} onChange={this.onCustomerIdChange}/>
                    </div>
                    <div>
                        <p className={css.fieldTitle}>Domain</p>
                        <input placeholder="Domain" value={this.props.simpleTaskPage.domain} onChange={this.onDomainChange}/>
                    </div>
                </div>
                <div className={css.fieldBlockMargin}>
                    <div>
                        <p className={css.fieldTitle}>Strategy</p>
                        <input placeholder="Strategy" value={this.props.simpleTaskPage.strategy} onChange={this.onStrategyChange}/>
                    </div>
                    <div>
                        <p className={css.fieldTitle}>Video strategy</p>
                        <input placeholder="Video strategy" value={this.props.simpleTaskPage.videoStrategy} onChange={this.onVideoStrategyChange}/>
                    </div>
                    <div>
                        <p className={css.fieldTitle}>MyChannelName: drago ustymenko</p>
                    </div>
                    <div>
                        <p className={css.fieldTitle}>MyChannelUrl: https://www.youtube.com/channel/UCr-Jo1ckws9L7Cswes-1SBg</p>
                    </div>
                    <div>
                        <p className={css.fieldTitle}>StartTime: {this.props.simpleTaskPage.startTime}</p>
                    </div>
                    <div>
                        <p className={css.fieldTitle}>EndTime: {this.props.simpleTaskPage.endTime}</p>
                    </div>
                    <div onKeyDown={this.onKeyPressed} tabIndex={0}>
                        <p className={css.fieldTitle}>Last used videos: {this.props.simpleTaskPage.lastUsedVideos}</p>
                    </div>
                </div>
                <div className={css.videoBlock}>
                    <YouTube videoId={this.props.simpleTaskPage.videoIdText} opts={opts} />
                </div>

            </div>

            <div className={css.resultBlock}>
                <textarea className={css.resultTextarea} placeholder="Pre Final Text Area" value={this.props.simpleTaskPage.preFinalTextArea}/>
                <textarea className={css.resultTextarea} placeholder="Final Text Area" value={this.props.simpleTaskPage.finalTextArea}/>
            </div>
        </div>
    }

}

export default SimpleTask;
