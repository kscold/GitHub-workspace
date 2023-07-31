const path = require("./paths");

module.exports = {
  mode: "production",
  entry: path.ssrIndex.Js,
  target: "node",
  output: {
    path: path.ssrBuild,
    filename: "server.js",
    chunkFilename: "js/[name].chunk.js",
    publicPath: path.publicUrlOrPath,
  },
};
