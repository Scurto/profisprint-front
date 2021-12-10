import {taskAPI} from "../api/api";
import {addToFinalResultTextareaCreator} from "./simpleTaskReducer";

const TEST_CLICK = 'TEST_CLICK';
const UPDATE_READY_TASKS_DATA = 'UPDATE_READY_TASKS_DATA';

let initState = {
    readyTasksData: []
}

const utilTaskReducer = (state = initState, action) => {
    switch (action.type) {
        case TEST_CLICK: {
            let stateCopy = {...state};
            console.log('state= ' + stateCopy);
            return stateCopy;
        }
        case UPDATE_READY_TASKS_DATA: {
            let stateCopy = {...state};
            stateCopy.readyTasksData = action.newValue;
            return stateCopy;
        }
        default: return state;
    }
}

export let testClickCreator = () => {
    return {
        type: TEST_CLICK
    }
}

export let updateReadyTasksDataCreator = (readyTasksData) => {
    return {
        type: UPDATE_READY_TASKS_DATA,
        newValue: readyTasksData
    }
}

export const relatedTask = (value) => {
    console.log('value', value);
    return (dispatch) => {
        taskAPI.getGclid().then(resp => {
            console.log(resp)
        })

    }
}

export default utilTaskReducer;