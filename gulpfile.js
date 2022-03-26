const gulp = require('gulp');
const minify = require('gulp-minify');
const jest = require('gulp-jest').default;
const git = require('gulp-git');

gulp.task('release', () => {
    return gulp.src('jmfcool.js')
    .pipe(minify({
        ext:{
            min:'.min.js'
        },
        noSource: true
    }))
    .pipe(gulp.dest('release'))
});

gulp.task('demo', () => {
    return gulp.src('jmfcool.js')
    .pipe(minify({
        ext:{
            min:'.min.js'
        },
        noSource: true
    }))
    .pipe(gulp.dest('demo'))
});

gulp.task('build', gulp.series('release','demo'));

gulp.task('jest', () => {
    return gulp.src('test').pipe(jest({
      "testEnvironment": "jsdom",
      "verbose": true,
      "automock": false,
      "resetMocks": false,
      "restoreMocks": true,
      "clearMocks": true,
      "resetModules": true
    }));
});

gulp.task('pull', (done) => {
    git.pull('origin', 'main', (err) => {
        if (err) throw err;
    });
    done();
});

gulp.task('add', () => {
    return gulp.src('.')
    .pipe(git.add());
});

gulp.task('commit', () => {
    return gulp.src('.')
      .pipe(git.commit('Update repo from gulp'));
});

gulp.task('push', (done) => {
    git.push('origin', (err) => {
        if (err) throw err;
    });
    done();
});

gulp.task('tags', (done) => {
    git.push('origin', { args: ' --tags' }, (err) => {
        if (err) throw err;
    });
    done();
});

gulp.task('git', gulp.series('add','commit','push'));