import * as axios from "axios";

const baseUrl = 'http://localhost:8830';
// const baseUrlJava = 'http://localhost:8830/api/1.0';
// const apiKey = '382354d6-c04e-478a-b623-652838360af2';

// const instance = axios.create({
//     withCredentials: true,
//     headers: {'API-KEY' : apiKey}
// });

export const taskAPI = {

    getTaskById(taskId) {
        console.log('getTaskById = ' + taskId);
        return axios.get(baseUrl + "/getDataByTaskId", { params: { taskId: taskId } });
    },
    fetchTask(fetchData) {
        return axios.post(baseUrl + "/fetchTask", fetchData);
    },

    processTask(processData) {
        return axios.post(baseUrl + "/processTask", processData);
    },
    getGclid() {
        return axios.get(baseUrl + "/gclid", { params: {} });
    },
    getTasksForProcess() {
        return axios.get(baseUrl + "/simpleTaskReady", { params: {} });
    }
}

export const screenTaskAPI = {

    getTaskById(taskId) {
        console.log('getTaskById = ' + taskId);
        return axios.get(baseUrl + "/screen/getDataByTaskId", {params: {taskId: taskId}});
    },
    fetchTask(fetchData) {
        return axios.post(baseUrl + "/screen/fetchTask", fetchData);
    },
    processTask(processData) {
        return axios.post(baseUrl + "/screen/processTask", processData);
    },
    getScreenTasksForProcess() {
        return axios.get(baseUrl + "/screen/screenTaskReady", { params: {} });
    }
}

export const authAPI = {
    // authMe() {
    //     return axios.get(baseUrl + `/auth/me`);
    // }
}
