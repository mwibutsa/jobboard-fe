const path = require("path");

module.exports = {
  plugins: [
    {
      id: "antd",
      plugin: require("craco-antd"),
      options: {
        customizeThemeLessPath: path.join(
          __dirname,
          "/src/theme/antd.theme.less"
        ),
        lessLoaderOptions: {
          lessOptions: {
            noIeCompat: true,
          },
        },
      },
    },
  ],
};
