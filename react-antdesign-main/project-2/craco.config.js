const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@primary-color": "#1DA57A",
              "@border-color-base": "#09f",
              "@text-color": "#0f9",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
