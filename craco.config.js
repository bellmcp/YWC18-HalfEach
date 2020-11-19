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
              "@breadcrumb-base-color": "#fff",
              "@breadcrumb-last-item-color": "#fff",
              "@breadcrumb-link-color": "#fff",
              "@breadcrumb-link-color-hover": "#fff",
              "@breadcrumb-separator-color": "#fff",
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
