import path from 'path';

const config = {};

config.ports = {
  dev: 3000,
  watch: 9111
};

config.paths = {
  src: {},
  dist: {}
};

config.paths.src.base = 'src';
config.paths.src.main = path.join(config.paths.src.base, 'client', 'main');
config.paths.src.systemjs = ['jspm_packages/system.js'];

config.paths.dist.base = 'dist';
config.paths.dist.js = path.join(config.paths.dist.base, 'js');
config.paths.dist.app = 'app.js';

export default config;
