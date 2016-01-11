import express from 'express';
import watcher from 'chokidar-socket-emitter';

import config from './config';

export function serveDev() {
  const app = express();
  app.use(express.static('.'));
  app.listen(config.ports.dev, () => {
    console.log('express listening on %s', config.ports.dev);
  });
}

export function serveWatch() {
  watcher({ port: config.ports.watch, path: config.paths.src.base });
}

export function serveDist() {
  const app = express();
  app.use(express.static(config.paths.dist.public));
  app.listen(config.ports.dist, () => {
    console.log('express listening on %s', config.ports.dist);
  });
}
