const paths = require("./paths");
const getCSSModuleLocalIdent = require("react-dev-utils/getCSSModuleLocalIdent");

const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const sassRegex = /\.(scss|sass)$/;
const sassModuleRegex = /\.Module\.(scss|sass)$/;

module.exports = {
  mode: "production",
  entry: paths.ssrIndexJs,
  target: "node",
  output: {
    path: paths.ssrBuild,
    filename: "server.js",
    chunkFilename: "js/[name].chunk.js",
    publicPath: paths.publicUrlOrPath,
  },
  module: {
    rules: [
      {
        oneOf: [
          {
            test: /\.(js|mjs|jsx|ts|tsx)$/,
            include: paths.appSrc,
          },
        ],
      },
    ],
  },
};
