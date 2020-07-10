module.exports = {
  exportTrailingSlash: true,
  exportPathMap: async function (defaultPathMap, { dev, src, outDir }) {
    return {
      "/": { page: "/" },
    };
  },
};
