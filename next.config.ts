import type { NextConfig } from 'next';
import path from 'node:path';

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  }, 
  sassOptions: {
    // SCSS/SASS import 시 사용할 경로를 지정
    includePaths: [path.join(__dirname, 'app/styles')],
  },
};

export default nextConfig;
