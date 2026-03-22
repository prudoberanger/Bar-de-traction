import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';

export default {
  input: 'src/speed-insights.js',
  output: {
    file: 'dist/speed-insights.js',
    format: 'iife',
    name: 'SpeedInsights'
  },
  plugins: [
    resolve(),
    terser()
  ]
};
