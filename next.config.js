module.exports = {
  exportTrailingSlash: true,
  exportPathMap: function () {
    defaultPathMap, { dev, src, outDir };
    return {
      "/": { page: "/" },
    };
  },
};
