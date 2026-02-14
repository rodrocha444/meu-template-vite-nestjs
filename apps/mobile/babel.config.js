module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      // O REANIMATED TEM QUE SER O ÚLTIMO DA LISTA
      "react-native-reanimated/plugin",
    ],
  };
};
