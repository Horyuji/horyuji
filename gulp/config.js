// プロジェクトのフォルダ類
const ROOT_DIRS = {
  dist: './dist',
  gulp: './gulp',
  report: './report',
  src: './src',
  tmp: './.tmp',
};

const PATHS = {
  gulp: {
    src: [
      `${ROOT_DIRS.gulp}/**/*.js`,
    ],
  },
  script: {
    src: [
      `${ROOT_DIRS.src}/**/!(*spec|*mock).js`,
    ],
    watch: [],
  },
  test: {
    src: [
      `${ROOT_DIRS.src}/**/(*spec|*mock).js`,
    ],
    watch: [],
  },
  report: {
    coverage: `${ROOT_DIRS.report}/coverage`,
  },
  html: {
    src: [
      `${ROOT_DIRS.src}/**/*.html`,
    ],
    watch: [
      `${ROOT_DIRS.src}/**/*.html`,
    ],
  },
};

module.exports = {
  env: process.env.NODE_ENV || 'dev',
  rootDirs: ROOT_DIRS,
  paths: PATHS,
};
