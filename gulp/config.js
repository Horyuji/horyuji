import ROOT_DIRS        from './config/rootDirs';
import PATHS            from './config/paths';
import BROWSER_SYNC     from './config/browserSyncs';
import SUPPORT_BROWSERS from './config/supportBrowsers';
import PORTS            from './config/ports';

module.exports = {
  env: process.env.NODE_ENV || 'dev',
  rootDirs: ROOT_DIRS,
  paths: PATHS,
  browserSync: BROWSER_SYNC,
  port: PORTS,

  //
  // plugin settings
  //

  autoprefixer: {
    options: {
      browsers: SUPPORT_BROWSERS,
    },
  },
  doiuse: {
    options: {
      browsers: SUPPORT_BROWSERS,
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
