const CracoLessPlugin = require("craco-less");

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              "@font-family": "'Kanit', sans-serif",
              "@card-padding-base": 0,
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
