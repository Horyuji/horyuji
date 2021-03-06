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
  iconfont: {
    svg: [
      `${ROOT_DIRS.iconfont}/**/*.svg`,
    ],
    css: `${ROOT_DIRS.src}/assets/css/*.pcss`,
    dist: `${ROOT_DIRS.src}/assets/css`,
  },
  font: {
    dist: `${ROOT_DIRS.dist}/fonts`,
    src: [
      `${ROOT_DIRS.src}/fonts/*.?(svg|ttf|eot|woff|woff2)`,
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
  image: {
    src: [
      `${ROOT_DIRS.src}/assets/**`,
    ],
  },
};

export { PATHS as default };
