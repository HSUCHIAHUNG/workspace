import { axiosInstance } from '../axiosinstance'

export const FETCH_UPLOADFILE = {
    Create: (data) => axiosInstance.post('/UploadFile/Create', data ),
    GetList : (data) => axiosInstance.post('/UploadFile/GetList', data ),
};