let basePath = "";

// let arr = window.location.href.split("test-page-host");
// let apiHostTest = "";
// if (arr[1] && arr[1].startsWith("8")) {
//   apiHostTest = "test.com.cn";
// } else {
//   apiHostTest = "test.com.cn";
// }

// let arrDev = window.location.href.split("dev-page-host");
// let apiHostDev = "";
// if (arrDev[1] && arrDev[1].startsWith("8")) {
//   apiHostDev = "dev.com.cn";
// } else {
//   apiHostDev = "dev.com.cn";
// }

if (process.env.NODE_ENV === "development") {
  basePath = `http://dev.com.cn`;
} else if (process.env.NODE_ENV === "test") {
  basePath = "";
} else if (process.env.NODE_ENV === "production") {
  basePath = "";
}
export { basePath };
