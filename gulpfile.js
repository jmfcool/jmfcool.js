const gulp = require('gulp');
const minify = require('gulp-minify');
const jest = require('gulp-jest').default;
const git = require('gulp-git');

gulp.task('release', function() 
{
    return gulp.src('jmfcool.js')
    .pipe(minify({
        ext:{
            min:'.min.js'
        },
        noSource: true
    }))
    .pipe(gulp.dest('release'))
});

gulp.task('demo', function() 
{
    return gulp.src('jmfcool.js')
    .pipe(minify({
        ext:{
            min:'.min.js'
        },
        noSource: true
    }))
    .pipe(gulp.dest('demo'))
});

gulp.task('build', gulp.parallel('release','demo'));

gulp.task('jest', function () {
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

gulp.task('add', function(){
    return gulp.src('.')
    .pipe(git.add());
});

gulp.task('commit', function(){
    return gulp.src('.')
      .pipe(git.commit('Update repo from gulp'));
});

gulp.task('push', function(){
    git.push('origin', function (err) 
    {
        if (err) throw err;
    });
});

gulp.task('git', gulp.parallel('add','commit','push'));