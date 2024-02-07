// Learn more https://docs.expo.io/guides/customizing-metro

const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

module.exports = {
  resolver: {
    // Add any extra node modules path here
    extraNodeModules: {
      // Map your aliases here
      "@": `${__dirname}/src`,
    },
    // Add any extra path here
    sourceExts: [...defaultConfig.resolver.sourceExts, "jsx", "tsx"],
  },
};
