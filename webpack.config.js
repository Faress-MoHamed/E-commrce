import CompressionPlugin from "compression-webpack-plugin";

export const plugins = [
  new CompressionPlugin({
    test: /\.(js|css|html|svg)$/,
    filename: "[path][base].gz",
  }),
];
