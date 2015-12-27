import ROOT_DIRS         from './config/rootDirs';
import PATHS             from './config/paths';
import BROWSER_SYNC      from './config/browserSyncs';
import PORTS             from './config/ports';
import PCSS_AUTOPREFIXER from './config/postcss/autoprefixer';
import PCSS_DOIUSE       from './config/postcss/doiuse';
import PCSS_STYLELINT    from './config/postcss/stylelint';
import PCSS_CSSWRING     from './config/postcss/csswring';
import PCSS_REPORTER     from './config/postcss/postcss-reporter';

module.exports = {
  env: process.env.NODE_ENV || 'dev',
  rootDirs: ROOT_DIRS,
  paths: PATHS,
  browserSync: BROWSER_SYNC,
  port: PORTS,
  /** plugin settings */
  autoprefixer: PCSS_AUTOPREFIXER,
  doiuse: PCSS_DOIUSE,
  stylelint: PCSS_STYLELINT,
  csswring: PCSS_CSSWRING,
  'postcss-reporter': PCSS_REPORTER,
};
