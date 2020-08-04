import path from "path";
const modulesFile = require.context("./modules/", true, /\.js$/);
let modules = {};
modulesFile.keys().map((file) => {
  let fileName = path.basename(file, ".js");
  modules[fileName] = modulesFile(file).default;
});

export default modules;
