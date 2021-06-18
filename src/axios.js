import axios from "axios";
import Element from "element-ui";
import router from "./router";
// axios.defaults.baseURL = "127.0.0.1:3000/api/v1"
const request = axios.create({
  timeout: 5000,
  headers: {
    // "Accept":"text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    // "Access-Control-Allow-Origin":"*",
    // "Content-Type": "application/json; charset=utf-8",
     
  },
});

request.interceptors.request.use((config) => {
    // config.headers['Access-Control-Allow-Origin'] = 'http://172.22.204.72:3000';
//   config.headers["Authorization"] = localStorage.getItem("token"); //请求头带上token
  return config;
});

request.interceptors.response.use(
  (response) => {
    let res = response.data;
    console.log("response");
    console.log(res);
    if (res.code === 200) {
      return response;
      
    } else {
      Element.Message.error(!res.msg ? "系统异常" : res.msg);
    //   Element.Message.error("aaaa");
      return Promise.reject(response.data.msg);
    }
  },
  (error) => {
    console.log(error);
    if (error.response.data) {
      error.message = error.response.data.msg;
    }
    if (error.response.status === 401) {
      router.push("/login");
    }
    // Element.Message.error(error.message, { duration: 3 * 1000 });
    return Promise.reject(error);
  }
);

export default request;
