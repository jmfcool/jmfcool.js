import gulp from 'gulp';
import minify from 'gulp-minify';

gulp.task('compress', function() 
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

gulp.task('build', gulp.parallel('compress','demo'));