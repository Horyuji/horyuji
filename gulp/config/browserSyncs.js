import PORTS     from './ports';
import PATHS     from './paths';
import ROOT_DIRS from './rootDirs';

const BROWSER_SYNC = {
  namespace: {
    dev: 'livereload',
    report: 'report',
  },
  dev: {
    notify: true,
    port: PORTS.dev,
    files: [
      /** match pattern : https://github.com/es128/anymatch  */
      new RegExp(`${ROOT_DIRS.src}/*\.html`),
      new RegExp(`${ROOT_DIRS.tmp}/*\.(js|css|html)`),
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
    notify: true,
    files: [
      /** match pattern : https://github.com/es128/anymatch  */
      new RegExp(`${PATHS.report.coverage}/*\.(js|css|html)`),
    ],
    server: {
      baseDir: `${PATHS.report.coverage}`,
      port: PORTS.report,
      directory: true,
    },
  },
};

export { BROWSER_SYNC as default };
