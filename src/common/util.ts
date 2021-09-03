// import { Base64 } from "js-base64";

function isPC() {
  let ua = window.navigator.userAgent;
  let mobile_rule = /(iPhone|iPod|Android|ios|iPad)/i; // 匹配主流移动机型
  return !ua.match(mobile_rule) && window.location.search !== "?channel=h5";
}

// import WebService from './WebService'
function getCookie(name) {
  // eslint-disable-next-line one-var
  let arr,
    reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  // eslint-disable-next-line no-cond-assign
  if ((arr = document.cookie.match(reg))) {
    return unescape(arr[2]);
  } else {
    return null;
  }
}

function getQueryVariable(variable) {
  let query = window.location.search.substring(1);
  let vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    let pair = vars[i].split("=");
    if (pair[0] === variable) {
      return pair[1];
    }
  }
  return false;
}

function setCookie(name, value) {
  let Days = 30;
  let exp = new Date();
  exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
  if (window.location.href.lastIndexOf("33de9.com.co") > -1) {
    document.cookie =
      name +
      "=" +
      escape(value) +
      ";expires=" +
      exp.toUTCString() +
      ";path=/;domain=" +
      "33de9.com.co";
  } else if (window.location.href.lastIndexOf("33e9yunxing.com") > -1) {
    document.cookie =
      name +
      "=" +
      escape(value) +
      ";expires=" +
      exp.toUTCString() +
      ";path=/;domain=" +
      "33e9yunxing.com";
  } else {
    document.cookie =
      name + "=" + escape(value) + ";expires=" + exp.toUTCString() + ";path=/";
  }
}

// function b64ToUtf8(str) {
//   let p = str.length % 4 ? 4 - (str.length % 4) : 0;
//   for (let i = p; i > 0; i--) {
//     str += "=";
//   }
//   str.replace(/_/g, "+").replace(/-/g, "/");
//   if (window.atob) {
//     return window.atob(str);
//   } else {
//     return Base64.decode(str);
//   }
// }

function setLocalStorage(name, value) {
  window.localStorage.setItem(name, value);
}

function setSessionStorage(name, value) {
  window.sessionStorage.setItem(name, value);
}

function getSessionStorage(name) {
  return window.sessionStorage.getItem(name);
}

function getLocalStorage(name) {
  return window.localStorage.getItem(name);
}
// function sendLog (params) {
//   WebService.sendLogs(params)
// }
function getRandomStr() {
  let array = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",

    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
  ];
  let str =
    array[Math.floor(Math.random() * Math.floor(62))] +
    array[Math.floor(Math.random() * Math.floor(62))] +
    array[Math.floor(Math.random() * Math.floor(62))];
  return str;
}

// function deepCopy(obj, cache = []) {
//   // just return if obj is immutable value
//   if (obj === null || typeof obj !== "object") {
//     return obj;
//   }

//   // if obj is hit, it is in circular structure
//   const hit = find(cache, (c) => c.original === obj);
//   if (hit) {
//     return hit.copy;
//   }

//   const copy = Array.isArray(obj) ? [] : {};
//   // put the copy into cache at first
//   // because we want to refer it in recursive deepCopy
//   cache.push({
//     original: obj,
//     copy
//   });

//   Object.keys(obj).forEach((key) => {
//     copy[key] = deepCopy(obj[key], cache);
//   });

//   return copy;
// }

function convertBase64UrlToBlob(urlData) {
  let bytes = window.atob(urlData); // 去掉url的头，并转换为byte
  // 处理异常,将ascii码小于0的转换为大于0
  let ab = new ArrayBuffer(bytes.length);
  let ia = new Uint8Array(ab);
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }
  return new Blob([ab], {
    type: "image/png",
  });
}

function dateTimeFormatter(data) {
  let date = new Date(data);
  let m =
    date.getMonth() + 1 > 9 ? date.getMonth() + 1 : `0${date.getMonth() + 1}`;
  let d = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  let h = date.getHours() > 9 ? date.getHours() : `0${date.getHours()}`;
  let M = date.getMinutes() > 9 ? date.getMinutes() : `0${date.getMinutes()}`;
  let S = date.getSeconds() > 9 ? date.getSeconds() : `0${date.getSeconds()}`;
  return date.getFullYear() + "-" + m + "-" + d + " " + h + ":" + M + ":" + S;
}

//减法
function Subtr(arg1, arg2) {
  let r1, r2, m, n;
  try {
    r1 = arg1.toString().split(".")[1].length;
  } catch (e) {
    r1 = 0;
  }
  try {
    r2 = arg2.toString().split(".")[1].length;
  } catch (e) {
    r2 = 0;
  }
  m = Math.pow(10, Math.max(r1, r2));
  n = r1 >= r2 ? r1 : r2;
  return ((arg1 * m - arg2 * m) / m).toFixed(n);
}

/**
 *
 * @param {*} data
 * @param {String} unit 默认为 ms 毫秒; s 秒
 * @returns
 */
function getUnixTimeStamp(data, unit = "ms") {
  if (unit === "ms") {
    return new Date(data).getTime();
  }
  if (unit === "s") {
    return new Date(data).getTime() / 1000;
  }
}

export {
  // deepCopy,
  getCookie,
  // sendLog,
  getQueryVariable,
  setCookie,
  setLocalStorage,
  getLocalStorage,
  getSessionStorage,
  setSessionStorage,
  getRandomStr,
  convertBase64UrlToBlob,
  // b64ToUtf8,
  dateTimeFormatter,
  Subtr,
  isPC,
  getUnixTimeStamp,
};
