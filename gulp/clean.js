import del from 'del';

import config from './config';

export default function() {
  return del.sync([
    config.paths.dist.base + '/**/*'
  ]);
}
