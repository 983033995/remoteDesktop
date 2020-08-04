import { post, get } from "../request";
const config = {
  "Content-Type": "application/json; charset=UTF-8"
};

function upload(params = {}) {
  return post("/sss", params, config);
}

function createArt(params = {}) {
  return post("/article/create", params);
}
function articleAll() {
  return get("/articleAll");
}
export default { upload, createArt, articleAll };
