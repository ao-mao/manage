import http from '../utils/request'

// 请求首页数据
export const getData= () =>{
    // 返回promise对象
    return http.get('/home/getData')
}

export const getUserData = () =>{
    return http.get('http://127.0.0.1:4523/m1/2213398-0-default/userManager')
}

