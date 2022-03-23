import gulp from 'gulp';
import minify from 'gulp-minify';
import bump from 'gulp-bump';

gulp.task('compress', function() 
{
    return gulp.src('jmfcool.js')
    .pipe(minify({
        ext:{
            src:'.js',
            min:'.min.js'
        }
    }))
    .pipe(gulp.dest('dist'))
});

gulp.task('major', function()
{
    return gulp.src('./package.json').pipe(bump({type:'major'})).pipe(gulp.dest('./'));
});

gulp.task('minor', function()
{
    return gulp.src('./package.json').pipe(bump({type:'minor'})).pipe(gulp.dest('./'));
});

gulp.task('patch', function()
{
    return gulp.src('./package.json').pipe(bump({type:'patch'})).pipe(gulp.dest('./'));
});

gulp.task('build', gulp.parallel('compress'));