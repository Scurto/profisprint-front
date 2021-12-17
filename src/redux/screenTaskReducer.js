import {screenTaskAPI, taskAPI} from "../api/api";
import {updateTaskOpera} from "./operaReducer";
const SCREEN_UPDATE_TASK_ID_TEXT = 'SCREEN-UPDATE-TASK-ID-TEXT';

const SCREEN_SET_DATA_BY_TASK_ID = 'SCREEN-SET-DATA-BY-TASK-ID';


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
        case SCREEN_UPDATE_TASK_ID_TEXT: {
            let stateCopy = {...state};
            stateCopy.taskIdText = action.newValue;
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
            channelId: screenTaskPage.channelId,
            customerId: screenTaskPage.customerId,
            domain: screenTaskPage.domain,
            strategy: screenTaskPage.strategy,
            videoStrategy: screenTaskPage.videoStrategy
        }

        screenTaskAPI.fetchTask(fetchData).then(resp => {
            let task = resp.data;
            dispatch(updateTaskOpera(task));
            console.log('task', task)
            // dispatch(clearPreFinalResultTextareaCreator());
            // dispatch(clearFinalResultTextareaCreator());
            // dispatch(setTaskData(task));
            // dispatch(updateLastUsedVideosCreator(resp.data.lastUsedVideos))
            //
            // switch (simpleTaskPage.strategy) {
            //     case '1':
            //         fetchTaskFunction1Strategy(dispatch, task);
            //         break;
            //     case '2':
            //         fetchTaskFunction2Strategy(dispatch, task);
            //         break;
            //     default:
            //         fetchTaskFunction2Strategy(dispatch, task);
            //         break;
            // }
        })
    }
}

export let updateNewPostTextCreator = (newTaskId) => {
    return {
        type: SCREEN_UPDATE_TASK_ID_TEXT,
        newValue: newTaskId
    }
}


export default screenTaskReducer;