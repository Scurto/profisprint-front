const UPDATE_ME= 'UPDATE-ME';

let initState = {
    testText: ''
}

const operaReducer = (state = initState, action) => {
    switch (action.type) {
        case UPDATE_ME: {
            let stateCopy = {...state};
            stateCopy.testText = action.newValue;
            console.log('initState',stateCopy)
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

export default operaReducer;