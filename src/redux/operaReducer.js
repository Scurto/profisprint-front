import {taskAPI} from "../api/api";
import {setDataByTaskId} from "./simpleTaskReducer";

const UPDATE_ME= 'UPDATE-ME';
const UPDATE_TASK= 'UPDATE-TASK';

let initState = {
    testText: '',
    task: null
}

const operaReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_ME: {
            let stateCopy = {...state};
            stateCopy.testText = action.newValue;
            console.log('initState',stateCopy)
            return stateCopy;
        }
        case UPDATE_TASK: {
            let stateCopy = {...state};
            stateCopy.task = action.newValue;
            return stateCopy;
        }

        default: return state;
    }
}

export let updateTaskIdOpera = (newTaskId) => {
    console.log('updateTaskIdOpera')
    return {
        type: UPDATE_ME,
        newValue: newTaskId
    }
}

export let updateTask = (task) => {
    return {
        type: UPDATE_TASK,
        newValue: task
    }
}

export const getDataByTaskId = (taskId) => {

    return (dispatch) => {
        let task = {
            navList: [
                {
                    'title': 'title1'
                }
            ],
            resultList: [
                {
                    'title': 'title1',
                    'time': '12:03'
                }
            ]
        }

        dispatch(updateTask(task));

        // taskAPI.getTaskById(taskId).then(resp => {
        //     dispatch(updateTask(resp.data));
        // })
    }
}

export default operaReducer;