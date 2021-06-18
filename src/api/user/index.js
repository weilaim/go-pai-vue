import axios from 'axios';

// 登录账号 
const  login = form => axios.post('/api/v1/user/login', form).then(res => res.data);

//注册账号
const register = regform => axios.post('/api/v1/user/register',regform).then(res => res.data)

// 创建视频
const postVideo = form => axios.post('/api/v1/videos', form).then(res => res.data)
export {
    login,
    register,
    postVideo,
}