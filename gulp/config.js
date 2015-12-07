// プロジェクトのフォルダ類
const ROOT_DIRS = {
  src: './src',
  report: './report',
  tmp: './.tmp',
  release: './dist',
};

const PATHS = {
  script: {
    src: [
      `${ROOT_DIRS.src}/**/!(*spec|*mock).js`,
    ],
    watch: [
      `${ROOT_DIRS.src}/**/!(*spec|*mock).js`,
    ]
  },
  test: {
    src: [
      `${ROOT_DIRS.src}/**/(*spec|*mock).js`,
    ],
    watch: []
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
