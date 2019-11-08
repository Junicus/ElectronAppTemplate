const path = require("path");
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin");
const plugins = require("./webpack.plugins");

function srcPath(src) {
  return path.join(__dirname, src);
}

module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: "./src/main/main.ts",
  // Put your normal webpack config below here
  resolve: {
    alias: {
      "@": srcPath("src"),
      "@main": srcPath("src/main"),
      "@renderer": srcPath("src/renderer")
    },
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"]
  },
  module: {
    rules: require("./webpack.rules")
  },
  plugins: [
    new FilterWarningsPlugin({
      exclude: [
        /mongodb/,
        /mssql/,
        /mysql/,
        /mysql2/,
        /oracledb/,
        /pg/,
        /pg-native/,
        /pg-query-stream/,
        /redis/,
        /sqlite3/
      ]
    }),
    ...plugins
  ],
  optimization: {
    minimize: false
  }
};
