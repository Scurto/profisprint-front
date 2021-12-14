import {taskAPI} from "../api/api";
import audioFile from "../assets/audio/audio.wav";

const UPDATE_TASK_ID_TEXT = 'UPDATE-TASK-ID-TEXT';
const UPDATE_COUNT_OF_VIDEO = 'UPDATE-COUNT-OF-VIDEO';
const UPDATE_COUNT_OF_ADVERTISE = 'UPDATE-COUNT-OF-ADVERTISE';
const UPDATE_COUNT_OF_ADVERTISE_MOVE = 'UPDATE-COUNT-OF-ADVERTISE-MOVE';
const UPDATE_VIDEO_TIMER = 'UPDATE-VIDEO-TIMER';
const UPDATE_ADVERTISE_TIMER = 'UPDATE-ADVERTISE-TIMER';
const UPDATE_CHANNEL_ID = 'UPDATE-CHANNEL-ID';
const UPDATE_CUSTOMER_ID = 'UPDATE-CUSTOMER-ID';
const UPDATE_STRATEGY = 'UPDATE-STRATEGY';
const UPDATE_VIDEO_STRATEGY = 'UPDATE-VIDEO-STRATEGY';
const UPDATE_LAST_USED_VIDEOS = 'UPDATE-LAST-USED-VIDEOS';
const UPDATE_DOMAIN = 'UPDATE-DOMAIN';
const UPDATE_VIDEO_ID = 'UPDATE-VIDEO-ID';
const UPDATE_START_TIME = 'UPDATE-START-TIME';
const UPDATE_END_TIME = 'UPDATE-END-TIME';

const UPDATE_FINAL_RESULT_TEXTAREA = 'UPDATE-FINAL-RESULT-TEXTAREA';
const ADD_TO_FINAL_RESULT_TEXTAREA = 'ADD-TO-FINAL-RESULT-TEXTAREA';
const CLEAR_FINAL_RESULT_TEXTAREA = 'CLEAR-FINAL-RESULT-TEXTAREA';
const UPDATE_PRE_FINAL_RESULT_TEXTAREA = 'UPDATE-PRE-FINAL-RESULT-TEXTAREA';
const ADD_TO_PRE_FINAL_RESULT_TEXTAREA = 'ADD-TO-PRE-FINAL-RESULT-TEXTAREA';
const CLEAR_PRE_FINAL_RESULT_TEXTAREA = 'CLEAR-PRE-FINAL-RESULT-TEXTAREA';

const SET_DATA_BY_TASK_ID = 'SET-DATA-BY-TASK-ID';
const SET_TASK_DATA = 'SET-TASK-DATA';
const GET_TASK_DATA = 'GET-TASK-DATA';

const PREFIX = 'https://www.youtube.com/watch?v=';


let initState = {
    taskIdText: '',
    countOfVideoText: '',
    countOfAdvertiseText: '',
    countOfAdvertiseMoveText: '',
    preFinalTextArea: '',
    finalTextArea: '',
    videoTimer: '',
    advertiseTimer: '',
    channelId: '',
    customerId: '',
    domain: '',
    strategy: '',
    videoStrategy: '',
    videoIdText: '',
    startTime: '',
    endTime: '',
    lastUsedVideos: '',
    hideScreenTaskContainer: 'n',
    task: null
}

const screenTaskReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_TASK_ID_TEXT: {
            let stateCopy = {...state};
            stateCopy.taskIdText = action.newValue;
            return stateCopy;
        }
        case UPDATE_COUNT_OF_VIDEO: {
            let stateCopy = {...state};
            stateCopy.countOfVideoText = action.newValue;
            return stateCopy;
        }
        case UPDATE_COUNT_OF_ADVERTISE: {
            let stateCopy = {...state};
            stateCopy.countOfAdvertiseText = action.newValue;
            return stateCopy;
        }
        case UPDATE_COUNT_OF_ADVERTISE_MOVE: {
            let stateCopy = {...state};
            stateCopy.countOfAdvertiseMoveText = action.newValue;
            return stateCopy;
        }
        case UPDATE_VIDEO_TIMER: {
            let stateCopy = {...state};
            stateCopy.videoTimer = action.newValue;
            return stateCopy;
        }
        case UPDATE_ADVERTISE_TIMER: {
            let stateCopy = {...state};
            stateCopy.advertiseTimer = action.newValue;
            return stateCopy;
        }
        case UPDATE_CHANNEL_ID: {
            let stateCopy = {...state};
            stateCopy.channelId = action.newValue;
            return stateCopy;
        }
        case UPDATE_CUSTOMER_ID: {
            let stateCopy = {...state};
            stateCopy.customerId = action.newValue;
            return stateCopy;
        }
        case UPDATE_STRATEGY: {
            let stateCopy = {...state};
            stateCopy.strategy = action.newValue;
            return stateCopy;
        }
        case UPDATE_VIDEO_STRATEGY: {
            let stateCopy = {...state};
            stateCopy.videoStrategy = action.newValue;
            return stateCopy;
        }

        case UPDATE_DOMAIN: {
            let stateCopy = {...state};
            stateCopy.domain = action.newValue;
            return stateCopy;
        }
        case UPDATE_VIDEO_ID: {
            let stateCopy = {...state};
            stateCopy.videoIdText = action.newValue;
            return stateCopy;
        }
        case UPDATE_LAST_USED_VIDEOS: {
            let stateCopy = {...state};
            stateCopy.lastUsedVideos = action.newValue;
            return stateCopy;
        }
        case UPDATE_START_TIME: {
            let stateCopy = {...state};
            stateCopy.startTime = action.newValue;
            return stateCopy;
        }
        case UPDATE_END_TIME: {
            let stateCopy = {...state};
            stateCopy.endTime = action.newValue;
            return stateCopy;
        }
        case UPDATE_PRE_FINAL_RESULT_TEXTAREA: {
            let stateCopy = {...state};
            stateCopy.preFinalTextArea = action.newValue;
            return stateCopy;
        }
        case ADD_TO_PRE_FINAL_RESULT_TEXTAREA: {
            let stateCopy = {...state};
            stateCopy.preFinalTextArea = stateCopy.preFinalTextArea + action.newValue + '\n';
            return stateCopy;
        }
        case CLEAR_PRE_FINAL_RESULT_TEXTAREA: {
            let stateCopy = {...state};
            stateCopy.preFinalTextArea = '';
            return stateCopy;
        }
        case UPDATE_FINAL_RESULT_TEXTAREA: {
            let stateCopy = {...state};
            stateCopy.finalTextArea = action.newValue;
            return stateCopy;
        }
        case ADD_TO_FINAL_RESULT_TEXTAREA: {
            let stateCopy = {...state};
            stateCopy.finalTextArea = stateCopy.finalTextArea + action.newValue + '\n';
            return stateCopy;
        }
        case CLEAR_FINAL_RESULT_TEXTAREA: {
            let stateCopy = {...state};
            stateCopy.finalTextArea = '';
            return stateCopy;
        }
        case SET_DATA_BY_TASK_ID: {
            let stateCopy = {...state};
            stateCopy.countOfVideoText = action.countOfVideo;
            stateCopy.countOfAdvertiseText = action.countOfAdvertise;
            stateCopy.countOfAdvertiseMoveText = action.countOfAdvertiseMove;
            stateCopy.videoTimer = action.videoTimer;
            stateCopy.advertiseTimer = action.advertiseTimer;
            stateCopy.channelId = action.channelId;
            stateCopy.customerId = action.customerId;
            stateCopy.domain = action.domain;
            stateCopy.strategy = action.strategy;
            stateCopy.videoStrategy = action.videoStrategy;
            return stateCopy;
        }
        case SET_TASK_DATA: {
            console.log('SET_TASK_DATA', action.task)
            let stateCopy = {...state};
            stateCopy.task = action.task;
            return stateCopy;
        }
        case GET_TASK_DATA: {
            let stateCopy = {...state};
            return stateCopy;
        }

        default: return state;
    }
}

export let updateNewPostTextCreator = (newTaskId) => {
    return {
        type: UPDATE_TASK_ID_TEXT,
        newValue: newTaskId
    }
}

export let updateCountOfAdvertiseCreator = (newCountOfAdvertise) => {
    return {
        type: UPDATE_COUNT_OF_ADVERTISE,
        newValue: newCountOfAdvertise
    }
}

export let updateCountOfVideoCreator = (newCountOfVideo) => {
    return {
        type: UPDATE_COUNT_OF_VIDEO,
        newValue: newCountOfVideo
    }
}

export let updateCountOfAdvertiseMoveCreator = (newCountOfAdvertiseMove) => {
    return {
        type: UPDATE_COUNT_OF_ADVERTISE_MOVE,
        newValue: newCountOfAdvertiseMove
    }
}

export let updateVideoTimerCreator = (updateVideoTimer) => {
    return {
        type: UPDATE_VIDEO_TIMER,
        newValue: updateVideoTimer
    }
}

export let updateAdvertiseTimerCreator = (updateAdvertiseTimer) => {
    return {
        type: UPDATE_ADVERTISE_TIMER,
        newValue: updateAdvertiseTimer
    }
}

export let updateChannelIdCreator = (updateChannelId) => {
    return {
        type: UPDATE_CHANNEL_ID,
        newValue: updateChannelId
    }
}

export let updateCustomerIdCreator = (updateCustomerId) => {
    return {
        type: UPDATE_CUSTOMER_ID,
        newValue: updateCustomerId
    }
}

export let updateDomainCreator = (domain) => {
    return {
        type: UPDATE_DOMAIN,
        newValue: domain
    }
}

export let updateStrategyCreator = (strategy) => {
    return {
        type: UPDATE_STRATEGY,
        newValue: strategy
    }
}

export let updateVideoStrategyCreator = (videoStrategy) => {
    return {
        type: UPDATE_VIDEO_STRATEGY,
        newValue: videoStrategy
    }
}

export let updateLastUsedVideosCreator = (lastUsedVideos) => {
    return {
        type: UPDATE_LAST_USED_VIDEOS,
        newValue: lastUsedVideos
    }
}

export let updateVideoIdCreator = (videoId) => {
    return {
        type: UPDATE_VIDEO_ID,
        newValue: videoId
    }
}

export let updateStartTimeCreator = (startTime) => {
    return {
        type: UPDATE_START_TIME,
        newValue: startTime
    }
}

export let updateEndTimeCreator = (endTime) => {
    return {
        type: UPDATE_END_TIME,
        newValue: endTime
    }
}

export let updateFinalResultTextareaCreator = (newResultValue) => {
    return {
        type: UPDATE_FINAL_RESULT_TEXTAREA,
        newValue: newResultValue
    }
}

export let addToFinalResultTextareaCreator = (newResultValue) => {
    return {
        type: ADD_TO_FINAL_RESULT_TEXTAREA,
        newValue: newResultValue
    }
}

export let clearFinalResultTextareaCreator = () => {
    return {
        type: CLEAR_FINAL_RESULT_TEXTAREA
    }
}

export let updatePreFinalResultTextareaCreator = (newResultValue) => {
    return {
        type: UPDATE_PRE_FINAL_RESULT_TEXTAREA,
        newValue: newResultValue
    }
}

export let addToPreFinalResultTextareaCreator = (newResultValue) => {
    return {
        type: ADD_TO_PRE_FINAL_RESULT_TEXTAREA,
        newValue: newResultValue
    }
}

export let clearPreFinalResultTextareaCreator = () => {
    return {
        type: CLEAR_PRE_FINAL_RESULT_TEXTAREA
    }
}

export let setTaskData = (task) => {
    return {
        type: SET_TASK_DATA,
        task: task
    }
}

export let getTaskData = () => {
    return {
        type: GET_TASK_DATA
    }
}

export let setDataByTaskId = (task) => {
    return {
        type: SET_DATA_BY_TASK_ID,
        countOfVideo: task.countOfVideo,
        countOfAdvertise: task.countOfAdvertise,
        countOfAdvertiseMove: task.countOfAdvertiseMove,
        videoTimer: task.videoTimer,
        advertiseTimer: task.advertiseTimer,
        channelId: task.channelId,
        customerId: task.customerId,
        domain: task.domain,
        strategy: task.strategy,
        videoStrategy: task.videoStrategy
    }
}

export const getDataByTaskId = (taskId) => {

    return (dispatch) => {
        taskAPI.getTaskById(taskId).then(resp => {
            dispatch(setDataByTaskId(resp.data));
        })
    }
}

const timer = ms => new Promise(res => setTimeout(res, ms))

export const fetchTask = (simpleTaskPage) => {
    return (dispatch) => {
        let fetchData = {
            taskId: simpleTaskPage.taskIdText,
            countOfVideo: simpleTaskPage.countOfVideoText,
            countOfAdvertise: simpleTaskPage.countOfAdvertiseText,
            countOfAdvertiseMove: simpleTaskPage.countOfAdvertiseMoveText,
            channelId: simpleTaskPage.channelId,
            customerId: simpleTaskPage.customerId,
            domain: simpleTaskPage.domain,
            strategy: simpleTaskPage.strategy,
            videoStrategy: simpleTaskPage.videoStrategy
        }

        taskAPI.fetchTask(fetchData).then(resp => {
            let task = resp.data;
            dispatch(clearPreFinalResultTextareaCreator());
            dispatch(clearFinalResultTextareaCreator());
            dispatch(setTaskData(task));
            dispatch(updateLastUsedVideosCreator(resp.data.lastUsedVideos))

            switch (simpleTaskPage.strategy) {
                case '1':
                    fetchTaskFunction1Strategy(dispatch, task);
                    break;
                case '2':
                    fetchTaskFunction2Strategy(dispatch, task);
                    break;
                default:
                    fetchTaskFunction2Strategy(dispatch, task);
                    break;
            }
        })
    }
}

export const processTask = (simpleTaskPage) => {


    return (dispatch) => {
        switch (simpleTaskPage.strategy) {
            case "1":
                processTaskFunction1Strategy(dispatch, simpleTaskPage);
                break;
            case "2":
                processTaskFunction2Strategy(dispatch, simpleTaskPage);
                break;
            default:
                processTaskFunction2Strategy(dispatch, simpleTaskPage);
                break;
        }
    }
}

function getFormattedDate(date) {
    let localDate = date.getDate();
    let month = date.getMonth()+1;
    let year = date.getFullYear();

    let hour = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds()
    let stringDate = localDate+'/'+month+'/'+year + ' ' + hour+':'+minutes+':'+seconds;
    return stringDate;
}

async function processTaskFunction1Strategy(dispatch, simpleTaskPage) {

    let task = simpleTaskPage.task;
    let videoTimer = simpleTaskPage.videoTimer * 1000;
    let advertiseTimer = simpleTaskPage.advertiseTimer * 1000;

    let videoLength = task.videos.length;
    let advertiseLength = task.advertise.length;

    dispatch(updateStartTimeCreator(getFormattedDate(new Date())));
    let timerForAdvertiseMove = 0
    for (let i =0; i< advertiseLength; i++) {
        timerForAdvertiseMove = timerForAdvertiseMove + task.advertise[i].advertiseMoveList.length * advertiseTimer;
    }
    dispatch(updateEndTimeCreator(getFormattedDate(new Date(Date.now() + (videoTimer*videoLength) + (advertiseTimer*advertiseLength) + (timerForAdvertiseMove)))));

    for (let i = 0; i < videoLength; i++) {
        dispatch(addToFinalResultTextareaCreator('\n' + PREFIX + task.videos[i]));
        dispatch(updateVideoIdCreator(task.videos[i]));
        window.open(PREFIX + task.videos[i], "_blank",'noopener,noreferrer')
        await timer(videoTimer);
        if(advertiseLength > 0) {
            taskAPI.getGclid().then(resp => {
                dispatch(addToFinalResultTextareaCreator(task.advertise[i].main + resp.data));
            })

            await timer(advertiseTimer);
            for (let j = 0; j < task.advertise[i].advertiseMoveList.length; j++) {
                dispatch(addToFinalResultTextareaCreator(task.advertise[i].advertiseMoveList[j]));
                await timer(advertiseTimer);
            }
            advertiseLength--;
        }
    }

    let processData = {
        taskId: simpleTaskPage.taskIdText,
        customerId: simpleTaskPage.customerId,
        domain: simpleTaskPage.domain,
        taskInfo: simpleTaskPage.task
    }

    taskAPI.processTask(processData).then(resp => {
        dispatch(addToFinalResultTextareaCreator('\n' + '-----DONE-----'));
        new Audio(audioFile).play();
    })
}

async function processTaskFunction2Strategy(dispatch, simpleTaskPage) {

    let task = simpleTaskPage.task;
    let videoTimer = simpleTaskPage.videoTimer * 1000;
    let advertiseTimer = simpleTaskPage.advertiseTimer * 1000;

    let videoLength = task.videos.length;
    let advertiseLength = task.advertise.length;

    dispatch(updateStartTimeCreator(getFormattedDate(new Date())));
    let timerForAdvertiseMove = 0
    for (let i =0; i< advertiseLength; i++) {
        timerForAdvertiseMove = timerForAdvertiseMove + task.advertise[i].advertiseMoveList.length * advertiseTimer;
    }
    dispatch(updateEndTimeCreator(getFormattedDate(new Date(Date.now() + (videoTimer*videoLength) + (advertiseTimer*advertiseLength) + (timerForAdvertiseMove)))));

    for (let i = 0; i < videoLength; i++) {
        dispatch(addToFinalResultTextareaCreator('\n' + PREFIX + task.videos[i]));
        dispatch(updateVideoIdCreator(task.videos[i]));
        window.open(PREFIX + task.videos[i], "_blank",'noopener,noreferrer')
        await timer(videoTimer);
    }

    for (let i = 0; i< advertiseLength; i++) {
        taskAPI.getGclid().then(resp => {
            dispatch(addToFinalResultTextareaCreator('\n' + task.advertise[i].main + resp.data));
        })
        await timer(advertiseTimer);
        for (let j = 0; j < task.advertise[i].advertiseMoveList.length; j++) {
            dispatch(addToFinalResultTextareaCreator(task.advertise[i].advertiseMoveList[j]));
            await timer(advertiseTimer);
        }
    }

    let processData = {
        taskId: simpleTaskPage.taskIdText,
        customerId: simpleTaskPage.customerId,
        domain: simpleTaskPage.domain,
        taskInfo: simpleTaskPage.task
    }

    taskAPI.processTask(processData).then(resp => {
        dispatch(addToFinalResultTextareaCreator('\n' + '-----DONE-----'));
        new Audio(audioFile).play();
    })
}

async function fetchTaskFunction1Strategy(dispatch, task) {
    let videoLength = task.videos.length;
    let advertiseLength = task.advertise.length;

    for (let i = 0; i < videoLength; i++) {
        dispatch(addToPreFinalResultTextareaCreator('\n' + PREFIX + task.videos[i]));
        if(advertiseLength > 0) {
            dispatch(addToPreFinalResultTextareaCreator(task.advertise[i].main));
            for (let j = 0; j < task.advertise[i].advertiseMoveList.length; j++) {
                dispatch(addToPreFinalResultTextareaCreator(task.advertise[i].advertiseMoveList[j]));
            }
            advertiseLength--;
        }
    }
}

async function fetchTaskFunction2Strategy(dispatch, task) {
    let videoLength = task.videos.length;
    let advertiseLength = task.advertise.length;

    for (let i = 0; i < videoLength; i++) {
        dispatch(addToPreFinalResultTextareaCreator('\n' + PREFIX + task.videos[i]));
    }

    for (let i = 0; i < advertiseLength; i++) {
        dispatch(addToPreFinalResultTextareaCreator('\n' + task.advertise[i].main));
        for (let j = 0; j < task.advertise[i].advertiseMoveList.length; j++) {
            dispatch(addToPreFinalResultTextareaCreator(task.advertise[i].advertiseMoveList[j]));
        }
    }
}



export default screenTaskReducer;