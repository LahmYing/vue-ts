import axios from "axios";
import Message from "view-design/src/components/message";

import SomeApi from "./SomeApi";

axios.interceptors.request.use(
  function (config) {
    config.headers["from-type"] = "1";
    config.timeout = 300000;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    let data: any;

    if (
      (response as any).code === 0 ||
      response.status === 0 ||
      response.status
    ) {
      // 如果是登录接口且登录成功则缓存token
      const url = response.config.url;
      if (url.endsWith("/login/login")) {
        window.localStorage.setItem(
          "xAuthToken",
          response.headers["x-auth-token"]
        );
      }

      data = (response as any).body || response.data;
    } else {
      Promise.reject(data);
    }
    return data;
  },

  function (error) {
    if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "错误请求";
          break;
        case 401:
          error.message = "未授权，请重新登录";
          break;
        case 403:
          error.message = "拒绝访问";
          break;
        case 404:
          error.message = "请求错误,未找到该资源";
          break;
        case 405:
          error.message = "请求方法未允许";
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 500:
          error.message = "服务器端出错";
          break;
        case 501:
          error.message = "网络未实现";
          break;
        case 502:
          error.message = "网络错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网络超时";
          break;
        case 505:
          error.message = "http版本不支持该请求";
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
    } else {
      error.message = "连接到服务器失败";
    }

    if (error.message) {
      Message.error(error.message);
    }
    return Promise.reject(error);
  }
);

let Model = { SomeApi };

export default Model;
