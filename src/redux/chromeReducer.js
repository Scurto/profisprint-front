const TEST_CLICK = 'TEST_CLICK';

let initState = {}

const chromeReducer = (state = initState, action) => {
    switch (action.type) {
        case TEST_CLICK: {
            let stateCopy = {...state};



            console.log('state= ' + stateCopy);

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

export default chromeReducer;