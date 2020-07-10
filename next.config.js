module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function () {
    return {
      "/out": { page: "/out" },
    };
  },
};
