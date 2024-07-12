import axios from "axios";

// 请求拦截器
axios.interceptors.request.use(config => {
    // 添加请求头
    config.headers.Authorization = localStorage.getItem('token') || ''
    return config;
}, error => {
    return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(response => {
    return response
})
