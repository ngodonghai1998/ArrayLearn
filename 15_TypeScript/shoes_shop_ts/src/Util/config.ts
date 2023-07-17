import axios, { InternalAxiosRequestConfig } from "axios";

//setup hằng số
export const DOMAIN = 'https://shop.cyberlearn.vn';
export const TOKEN = 'accessToken';
export const userLogin = 'userLogin';
export const TOKEN_CYBERSOFT = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJOb2RlSlMgMzMiLCJIZXRIYW5TdHJpbmciOiIwNi8wMi8yMDI0IiwiSGV0SGFuVGltZSI6IjE3MDcxNzc2MDAwMDAiLCJuYmYiOjE2ODk2OTk2MDAsImV4cCI6MTcwNzMyNTIwMH0.Ti8xtGGllk9j0u36EAuC9HOWsXJ7QELlIx8X5mDHaEE`;

export const {getStoreJson, setStoreJson, getStore, setStore} = {
    getStoreJson: (name:string): any => {
        if (localStorage.getItem(name)) {
            const strResult:string | null | any = localStorage.getItem(name);
            return JSON.parse(strResult);
        }
        return undefined;
    },
    setStoreJson: (name:string, data: any):void => {
        const strJSON = JSON.stringify(data);
        localStorage.setItem(name, strJSON);
    },
    getStore: (name:string): string | null => {
        return localStorage.getItem(name);
    },
    setStore: (name:string, data:string): void => {
        localStorage.setItem(name, data);
    }, 
}

//interceptor
export const http = axios.create({
    baseURL: DOMAIN,
    timeout: 30000,
});

http.interceptors.request.use((config:InternalAxiosRequestConfig<any>) => {
    
    config.headers = {
        Authorization: `Bearer ${getStore(TOKEN)}`,
    return config;
})



















