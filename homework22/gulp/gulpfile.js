const {task , src , dest,series,watch} = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

const sass = require('gulp-sass')(require('sass'));
task('js:build',()=>{
    return src('src/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(dest('dist'));
})
task('scss:build',()=>{
    return src('src/*.scss')
        .pipe(sass({outputStyle:'compressed'}).on('error',sass.logError))
        .pipe(dest('dist'));
})
task('default', series('js:build','scss:build'))
task('watch',()=>{
    watch('src/*scss',series('scss:build'));
    watch('src/*.js',series('js:build'));
})
