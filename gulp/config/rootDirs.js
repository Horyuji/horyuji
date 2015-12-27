const cwd = process.cwd();

const ROOT_DIRS = {
  dist: `${cwd}/dist`,
  gulp: `${cwd}/gulp`,
  report: `${cwd}/report`,
  src: `${cwd}/src`,
  tmp: `${cwd}/.tmp`,
};

export { ROOT_DIRS as default };
