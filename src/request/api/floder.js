import { get } from "../request";
function getFloder() {
  return get("/getFloderList");
}

export default {
  getFloder
};
