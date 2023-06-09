import axiosInstance from '../axiosinstance.js';

export const FETCH_USER_A = {
    login: (data) => axiosInstance.post('/AllToken/Login', data),
    getUserInfo: () => axiosInstance.get('/AllToken/GetLoginInfo')
}

