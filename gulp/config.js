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
    watch: [
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
  bower: {
    watch: 'bower.json',
  },
  css: {
    src: [
      `${ROOT_DIRS.src}/**/*.css`,
    ],
    watch: [
      `${ROOT_DIRS.src}/**/*.css`,
    ],
  },
};

const SUPPORT_BROWERS = [
  'last 3 version',
  'ie >= 9',
  'Android 4.0',
];

module.exports = {
  env: process.env.NODE_ENV || 'dev',
  rootDirs: ROOT_DIRS,
  paths: PATHS,
  port: {
    dev: 9000,
  },

  //
  // plugin settings
  //

  autoprefixer: {
    options: {
      browsers: SUPPORT_BROWERS,
    },
  },
  doiuse: {
    options: {
      browsers: SUPPORT_BROWERS,
    },
  },
  stylelint: {
    options: {},
  },
  csswring: {
    options: {

      // https://github.com/hail2u/node-csswring#preservehacks
      preserveHacks: true,

      // https://github.com/hail2u/node-csswring#removeallcomments
      removeAllComments: true,
    },
  },
  'postcss-reporter': {
    options: {
      clearMessages: true,
    },
  },
};
