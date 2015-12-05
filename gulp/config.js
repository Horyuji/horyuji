// プロジェクトのフォルダ類
const ROOT_DIRS = {
  src: './src',
  test: './test',
  report: './report',
  tmp: './.tmp',
};

const PATHS = {
  script: {
    src: [
      `${ROOT_DIRS.src}/scripts/**/*.js`,
    ],
    watch: []
  },
  test: {
    src: [
      `${ROOT_DIRS.test}/**/*.js`,
    ],
    watch: []
  },
  report: {
    coverage: `${ROOT_DIRS.report}/coverage`,
  },
};

module.exports = {
  env: process.env.NODE_ENV || 'dev',
  rootDirs: ROOT_DIRS,
  paths: PATHS,
};
