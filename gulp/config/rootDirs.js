const cwd = process.cwd();

const ROOT_DIRS = {
  dist: `${cwd}/dist`,
  gulp: `${cwd}/gulp`,
  report: `${cwd}/report`,
  src: `${cwd}/src`,
  tmp: `${cwd}/.tmp`,
  bower: `${cwd}/bower_components`,
  node: `${cwd}/node_modules`,
};

export { ROOT_DIRS as default };
