import { get } from "../request";
function readArc(parms = {}) {
  return get("/json", parms);
}
function getArtById(parms = {}) {
  return get("/article/getById", parms);
}
export default { readArc, getArtById };
