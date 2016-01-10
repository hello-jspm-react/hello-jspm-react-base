import gulp from 'gulp';
import run from 'gulp-sequence';

import clean from './gulp/clean';
import * as server from './gulp/server';
import * as scripts from './gulp/scripts';

gulp.task('clean', () => { clean(); });

gulp.task('serve:dev', () => { server.serveDev(); });
gulp.task('serve:watch', () => { server.serveWatch(); });

gulp.task('serve', (done) => {
  run(['serve:dev', 'serve:watch'], done);
});

gulp.task('js:dist', () => { scripts.dist(); });
gulp.task('js:systemjs', () => { scripts.systemjs(); });

gulp.task('build', (done) => {
  run('clean', ['js:dist', 'js:systemjs'], done);
});
