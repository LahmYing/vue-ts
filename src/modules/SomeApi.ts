import axios from "axios";
// import { basePath } from "../config/apiHost";

// function resolvePath(path) {
//   return basePath + path;
// }

let SomeApi = {
  async a(params) {
    const data = await axios.get("/api/a", {
      params: params,
    });
    return data;
  },

  /**
   * @param {*} params
   * @returns
   */
  async b(params) {
    const data = await axios.post("/api/b", params);
    return data;
  },

  /**
   * @param {*} params
   * @returns
   */
  async modify(params) {
    const data = await axios.post("/api/modify", params);
    return data;
  },

  /**
   * @param {*} params
   * @returns
   */
  async create(params) {
    const data = await axios.post("/api/create", params);
    return data;
  },
};

export default SomeApi;
