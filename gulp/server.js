import express from 'express';

import config from './config';

export function serveDev() {
  const app = express();
  app.use(express.static('.'));
  app.listen(config.ports.dev, () => {
    console.log('express listening on %s', config.ports.dev);
  });
}
