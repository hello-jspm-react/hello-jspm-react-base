import gulp from 'gulp';

import * as server from './gulp/server';

gulp.task('serve:dev', () => { server.serveDev(); });
