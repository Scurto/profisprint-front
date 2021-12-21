import {screenTaskAPI, taskAPI} from "../api/api";
import {updateTaskOpera} from "./operaReducer";
import audioFile from "../assets/audio/audio.wav";
const SCREEN_UPDATE_TASK_ID_TEXT = 'SCREEN-UPDATE-TASK-ID-TEXT';
const SCREEN_SET_DATA_BY_TASK_ID = 'SCREEN-SET-DATA-BY-TASK-ID';
const SCREEN_UPDATE_COUNT_OF_VIDEO = 'SCREEN-UPDATE-COUNT-OF-VIDEO';
const SCREEN_UPDATE_COUNT_OF_ADVERTISE = 'SCREEN-UPDATE-COUNT-OF-ADVERTISE';
const SCREEN_UPDATE_COUNT_OF_ADVERTISE_MOVE = 'SCREEN-UPDATE-COUNT-OF-ADVERTISE-MOVE';
const SCREEN_UPDATE_VIDEO_TIMER = 'SCREEN-UPDATE-VIDEO-TIMER';
const SCREEN_UPDATE_ADVERTISE_TIMER = 'SCREEN-UPDATE-ADVERTISE-TIMER';
const SCREEN_UPDATE_START_TIME = 'SCREEN-UPDATE-START-TIME';
const SCREEN_UPDATE_END_TIME = 'SCREEN-UPDATE-END-TIME';

const SCREEN_UPDATE_TASK = 'SCREEN-UPDATE-TASK';

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
    task: {
        navList: [],
        resultList:[],
        date: {
            'time': null,
            'date': null
        }
    }
}

const screenTaskReducer = (state = initState, action) => {
    switch (action.type) {
        case SCREEN_UPDATE_TASK_ID_TEXT: {
            let stateCopy = {...state};
            stateCopy.taskIdText = action.newValue;
            return stateCopy;
        }
        case SCREEN_UPDATE_COUNT_OF_VIDEO: {
            let stateCopy = {...state};
            stateCopy.countOfVideoText = action.newValue;
            return stateCopy;
        }
        case SCREEN_UPDATE_COUNT_OF_ADVERTISE: {
            let stateCopy = {...state};
            stateCopy.countOfAdvertiseText = action.newValue;
            return stateCopy;
        }
        case SCREEN_UPDATE_COUNT_OF_ADVERTISE_MOVE: {
            let stateCopy = {...state};
            stateCopy.countOfAdvertiseMoveText = action.newValue;
            return stateCopy;
        }
        case SCREEN_UPDATE_VIDEO_TIMER: {
            let stateCopy = {...state};
            stateCopy.videoTimer = action.newValue;
            return stateCopy;
        }
        case SCREEN_UPDATE_ADVERTISE_TIMER: {
            let stateCopy = {...state};
            stateCopy.advertiseTimer = action.newValue;
            return stateCopy;
        }

        case SCREEN_UPDATE_TASK: {
            let stateCopy = {...state};
            stateCopy.task = action.newValue;
            return stateCopy;
        }

        case SCREEN_UPDATE_START_TIME: {
            let stateCopy = {...state};
            stateCopy.startTime = action.newValue;
            return stateCopy;
        }
        case SCREEN_UPDATE_END_TIME: {
            let stateCopy = {...state};
            stateCopy.endTime = action.newValue;
            return stateCopy;
        }

        case SCREEN_SET_DATA_BY_TASK_ID: {
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
        default: return state;
    }
}

export let setDataByTaskId = (task) => {
    return {
        type: SCREEN_SET_DATA_BY_TASK_ID,
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

export let updateScreenCountOfAdvertiseCreator = (newCountOfAdvertise) => {
    return {
        type: SCREEN_UPDATE_COUNT_OF_ADVERTISE,
        newValue: newCountOfAdvertise
    }
}

export let updateScreenCountOfVideoCreator = (newCountOfVideo) => {
    return {
        type: SCREEN_UPDATE_COUNT_OF_VIDEO,
        newValue: newCountOfVideo
    }
}

export let updateScreenCountOfAdvertiseMoveCreator = (newCountOfAdvertiseMove) => {
    return {
        type: SCREEN_UPDATE_COUNT_OF_ADVERTISE_MOVE,
        newValue: newCountOfAdvertiseMove
    }
}

export let updateScreenVideoTimerCreator = (updateVideoTimer) => {
    return {
        type: SCREEN_UPDATE_VIDEO_TIMER,
        newValue: updateVideoTimer
    }
}

export let updateScreenAdvertiseTimerCreator = (updateAdvertiseTimer) => {
    return {
        type: SCREEN_UPDATE_ADVERTISE_TIMER,
        newValue: updateAdvertiseTimer
    }
}

export const getScreenDataByTaskId = (taskId) => {
    return (dispatch) => {
        screenTaskAPI.getTaskById(taskId).then(resp => {
            dispatch(setDataByTaskId(resp.data));
        })
    }
}

export const fetchScreenTask = (screenTaskPage) => {
    return (dispatch) => {
        let fetchData = {
            taskId: screenTaskPage.taskIdText,
            countOfVideo: screenTaskPage.countOfVideoText,
            countOfAdvertise: screenTaskPage.countOfAdvertiseText,
            countOfAdvertiseMove: screenTaskPage.countOfAdvertiseMoveText,
            videoTimer: screenTaskPage.videoTimer,
            advertiseTimer: screenTaskPage.advertiseTimer,
            channelId: screenTaskPage.channelId,
            customerId: screenTaskPage.customerId,
            domain: screenTaskPage.domain,
            strategy: screenTaskPage.strategy,
            videoStrategy: screenTaskPage.videoStrategy
        }

        screenTaskAPI.fetchTask(fetchData).then(resp => {
            let task = resp.data;
            dispatch(updateTaskOpera(task));
            dispatch(updateTask(task));
            console.log('task', task)
        })
    }
}

export const processScreenTask = (screenTaskPage) => {

    return (dispatch) => {
        processScreenTaskFunction(dispatch, screenTaskPage);
    }
}

async function processScreenTaskFunction(dispatch, screenTaskPage) {
    let task = screenTaskPage.task;
    let videoTimer = screenTaskPage.videoTimer * 1000;
    let advertiseTimer = screenTaskPage.advertiseTimer * 1000;
    let fixedTimer = 30 * 1000;
    let forFinishTimer = 60 * 1000;

    dispatch(updateStartTimeCreator(getFormattedDate(new Date())));
    let timerForTask= 0
    for (let i =0; i< task.resultList.length; i++) {
        if (task.resultList[i].type === 'video') {
            timerForTask = timerForTask + videoTimer;
        }
        if (task.resultList[i].type === 'advertise') {
            timerForTask = timerForTask + advertiseTimer;
        }
        if (task.resultList[i].type === 'fixed') {
            timerForTask = timerForTask + fixedTimer;
        }
    }
    dispatch(updateEndTimeCreator(getFormattedDate(new Date(Date.now() + (timerForTask + forFinishTimer)))));

    for (let i =0; i< task.resultList.length; i++) {
        if (task.resultList[i].type === 'video') {
            window.open(PREFIX + task.resultList[i].url, "_blank",'noopener,noreferrer')
            await timer(videoTimer);
        }
        if (task.resultList[i].type === 'advertise') {
            await timer(advertiseTimer);
        }
        if (task.resultList[i].type === 'fixed') {
            await timer(fixedTimer);
        }
    }

    let processData = {
        taskId: screenTaskPage.taskIdText,
        customerId: screenTaskPage.customerId,
        domain: screenTaskPage.domain,
        taskInfo: screenTaskPage.task.resultList
    }
    console.log('processData', processData)
    screenTaskAPI.processTask(processData).then(resp => {
        // dispatch(addToFinalResultTextareaCreator('\n' + '-----DONE-----'));
        new Audio(audioFile).play();
    })

}

export let updateNewPostTextCreator = (newTaskId) => {
    return {
        type: SCREEN_UPDATE_TASK_ID_TEXT,
        newValue: newTaskId
    }
}
export let updateTask = (task) => {
    return {
        type: SCREEN_UPDATE_TASK,
        newValue: task
    }
}

export let updateStartTimeCreator = (startTime) => {
    return {
        type: SCREEN_UPDATE_START_TIME,
        newValue: startTime
    }
}

export let updateEndTimeCreator = (endTime) => {
    return {
        type: SCREEN_UPDATE_END_TIME,
        newValue: endTime
    }
}

const timer = ms => new Promise(res => setTimeout(res, ms))

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


export default screenTaskReducer;