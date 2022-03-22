import gulp from 'gulp';
import minify from 'gulp-minify';

gulp.task('compress', function(exit) 
{
    gulp.src('jmfcool.js')
    .pipe(minify({
        ext:{
            min:'.min.js'
        }
    }))
    .pipe(gulp.dest('./'))
    exit();
});

gulp.task('build', gulp.parallel('compress'));