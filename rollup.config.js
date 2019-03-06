import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  output: {
    name: "GraphqlCrab",
    format: 'umd',
    file: 'dist/index.js',
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    })
  ]
};