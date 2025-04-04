import path from 'node:path';

import { partytownVite } from '@builder.io/partytown/utils';
import legacy from '@vitejs/plugin-legacy';
import glsl from 'vite-plugin-glsl';

const HOST = 'localhost';
const PORT = 3000;

export default {
  base: '/vite-boilerplate/',
  server: {
    host: HOST,
    port: PORT
  },
  plugins: [
    legacy(),
    glsl(),
    partytownVite({
      dest: path.join(__dirname, 'dist', '~partytown')
    })
  ]
};
