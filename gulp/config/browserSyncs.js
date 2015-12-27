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
      '**/*.js',
      '**/*.css',
      '**/*.html',
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
      port: PORTS.report,
      directory: true,
    },
  },
};

export { BROWSER_SYNC as default };
