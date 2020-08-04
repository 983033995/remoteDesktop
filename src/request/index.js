import path from "path";
let apiFiles = require.context("./api/", true, /\.js$/);
let api = {};
apiFiles.keys().map((file) => {
  let fileName = path.basename(file, ".js");
  api[fileName] = apiFiles(file).default;
});
export default api;
