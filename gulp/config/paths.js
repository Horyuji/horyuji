import ROOT_DIRS from './rootDirs';

const PATHS = {
  gulp: {
    src: [
      `${ROOT_DIRS.gulp}/**/*.js`,
    ],
    watch: [
      `${ROOT_DIRS.gulp}/**/*.js`,
    ],
  },
  script: {
    src: [
      `${ROOT_DIRS.src}/**/!(*spec|*mock).es6`,
    ],
    watch: [
      `${ROOT_DIRS.src}/**/!(*spec|*mock).es6`,
    ],
  },
  test: {
    src: [
      `${ROOT_DIRS.src}/**/(*spec|*mock).es6`,
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
  bower: {
    watch: 'bower.json',
  },
  css: {
    src: [
      `${ROOT_DIRS.src}/**/*.pcss`,
    ],
    watch: [
      `${ROOT_DIRS.src}/**/*.pcss`,
    ],
  },
};

export { PATHS as default };
