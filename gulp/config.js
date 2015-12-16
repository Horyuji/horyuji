const PORT = {
  dev: 9000,
};

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

const BROWSER_SYNC = {
  dev: {
    notify: true,
    port: PORT.dev,
    files: [
      `${ROOT_DIRS.tmp}/**/*.js`,
      `${ROOT_DIRS.src}/**/*.html`,
      `${ROOT_DIRS.src}/**/*.css`,
    ],
    server: {
      baseDir: [
        ROOT_DIRS.src,
        ROOT_DIRS.tmp,
      ],
      routes: {
        '/bower_components': 'bower_components',
      },
    },
  },
  report: {
    server: {
      baseDir: `${PATHS.report.coverage}`,
      port: 9001,
      directory: true,
    },
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
  browserSync: BROWSER_SYNC,
  port: {
    dev: PORT.dev,
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
