// 引入mockjs
const Mock = require('mockjs')

// 获取mock.Random 对象
const Random = Mock.Random

let Result = {
    code:200,
    msg: '操作成功',
    data:null,
}

/**
    Mock.mock(url,post/get, function(options));
    url 表示要拦截的Ajax 请求类型

 */


//获取验证码图片base64编码以及一个随机码
Mock.mock('/captcha','get',() => {
    Result.data = {
        token: Random.string(32),
        captchaImg: Random.dataImage("120x40","11111")
    }

    return Result
})

//登录的接口
Mock.mock(RegExp('/login*'),'post',(config)=>{
    console.log("mock--------------login");
    Result.code = 200
    Result.msg = "成功"
    return Result
})