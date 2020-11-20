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
              "@text-color-secondary": "rgba(0, 0, 0, 0.38)",
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
