const { babel } = require('@rollup/plugin-babel');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const { terser } = require('rollup-plugin-terser'); // 压缩

const pkg = require('./package.json');
const fileName = `umd-${pkg.version}.js`;
const banner = `/*! ${pkg.name} ${pkg.version} */`;

const config = {
  input: './src/index.ts',
  output: {
    dir: 'umd',
    format: 'umd',
    name: 'AntDesignIcons4',
    entryFileNames: fileName,
    banner: banner,
  },
  plugins: [
    nodeResolve({
      extensions: ['.ts']
    }),
    babel({
      babelHelpers: 'bundled',
      extensions: ['.ts'],
    }),
    terser()
  ]
};

module.exports = config;