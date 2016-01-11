import path from 'path';

const config = {};

config.ports = {
  dev: 3000,
  watch: 9111,
  dist: 8080
};

config.paths = {
  src: {},
  dist: {}
};

config.paths.src.base = 'src';
config.paths.src.main = path.join(config.paths.src.base, 'client', 'main');
config.paths.src.systemjs = ['jspm_packages/system.js'];
config.paths.src.html = 'index.html';
config.paths.src.libs = 'react + react-dom';
config.paths.src.libsRev = 'react - react-dom';

config.paths.dist.base = 'dist';
config.paths.dist.public = path.join(config.paths.dist.base, 'public');
config.paths.dist.js = path.join(config.paths.dist.public, 'js');
config.paths.dist.app = 'app.js';
config.paths.dist.lib = 'lib.js';

config.htmlReplace = {
  js: ['/js/system.js', '/js/config.js', '/js/lib.js', '/js/app.js'],
  entry_point: `<script>System.import("${config.paths.src.main}");</script>`
};

export default config;
