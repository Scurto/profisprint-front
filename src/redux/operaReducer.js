import {taskAPI} from "../api/api";

const UPDATE_TASK_OPERA= 'UPDATE-TASK-OPERA';

let initState = {
    testText: '',
    task: {
        navList: [],
        resultList:[]
    }
}

const operaReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_TASK_OPERA: {
            let stateCopy = {...state};
            stateCopy.task = action.newValue;
            return stateCopy;
        }

        default: return state;
    }
}

export let updateTaskOpera = (task) => {
    return {
        type: UPDATE_TASK_OPERA,
        newValue: task
    }
}

export default operaReducer;