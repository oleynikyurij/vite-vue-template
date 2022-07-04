import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslint from 'vite-plugin-eslint';
// import svgLoader from 'vite-svg-loader';
import { resolve } from 'path';

export default ({ mode, command }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd(), '') };
  // const env = loadEnv(mode, process.cwd(), '');
  console.log(mode, command, process.env.DB_NAME, process.env.DB_N); // => development serve
  return defineConfig({
    // server: {hmr: {overlay: false}},
    base: process.env.VITE_BASE_PUBLIC_PATH,
    plugins: [eslint({ cache: false, failOnError: false }), vue()],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },
  });
};
