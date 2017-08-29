const gulp = require('gulp')
    // 编译less
const less = require('gulp-less')
    // 添加hash版本号
const rev = require('gulp-rev-append')
    // 压缩css
const cleanCSS = require('gulp-clean-css')
    // 压缩js
const uglify = require('gulp-uglify')
    // 压缩图片
const imagemin = require('gulp-imagemin')
    // 为css添加前缀
const autoprefixer = require('gulp-autoprefixer')
const babel = require('gulp-babel')
const browserify = require('gulp-browserify')
const sourcemaps = require('gulp-sourcemaps');

//让gulp碰到错误不停止
function swallowError(error) {
    // If you want details of the error in the console
    console.error(error.toString())

    this.emit('end')
}

// 编译less
gulp.task('less', function() {
        // 将你的默认的任务代码放在这
        // 将less文件 输出 为 css文件
        // gulp.src('./less/**').pipe(less())
        //     //添加前缀
        //     .pipe(autoprefixer({
        //         browsers: ['last 2 versions'],
        //         cascade: false
        //     }))
        //     // 压缩css
        //     .pipe(cleanCSS({ compatibility: 'ie8' }))
        //     //打包出来
        //     .pipe(gulp.dest('./dist/css'))
        return gulp.src('./less/*.less')
            .pipe(less())
            .on('error', swallowError)
            .pipe(gulp.dest('./css'))
    })
    // 压缩css
gulp.task('uglifyCss', function() {
        // 将你的默认的任务代码放在这
        // 将less文件 输出 为 css文件
        return gulp.src('./css/**')
            // 添加前缀
            .pipe(autoprefixer({
                browsers: ['last 2 versions'],
                cascade: false
            }))
            // 压缩css
            .pipe(cleanCSS({ compatibility: 'ie8' }))
            // 打包出来
            .pipe(gulp.dest('./dist/css'))
    })
    // 开发模式编译babel
gulp.task('es6toes5', function() {
        return gulp.src('./es6js/*.js')

        .pipe(sourcemaps.init())

        // es6 -> es5
        .pipe(babel({
                presets: ['env']
            }))
            .on('error', swallowError)
            // 压缩js    
            // .pipe(uglify())
            // 引入requirejs
            .pipe(browserify())
            .pipe(sourcemaps.write())
            // 输出编译后的结果
            .pipe(gulp.dest('./js'))
    })
    // 压缩js
gulp.task('uglify', function() {
    // 获取要压缩的js

    return gulp.src('./js/*.js')
        // es6 -> es5
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(browserify())
        // 输出压缩后的结果
        .pipe(gulp.dest('./dist/js'))
})

// lib库放置位置
gulp.task('lib', function() {
    // 获取要压缩的js
    return gulp.src('./libs/**')
        // 压缩js    
        .pipe(uglify())

    // 输出结果
    .pipe(gulp.dest('./dist/libs'))
})

// 压缩图片
gulp.task('imagemin', () => gulp.src('./imgs/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/imgs'))
)

// 添加版本号，清除页面引用缓存
gulp.task('hash1', function() {
    return gulp.src('./index.html')
        .pipe(rev())
        .pipe(gulp.dest('./dist'))
});
gulp.task('hash2', function() {
    return gulp.src('./html/*.html')
        .pipe(rev())
        .pipe(gulp.dest('./dist/html'))
});
// 生产模式
gulp.task('pro', ['uglifyCss', 'uglify', 'imagemin', 'lib', 'hash1', 'hash2'], function() {
        gulp.watch('./css/*.css', ['uglifyCss'])
        gulp.watch('./js/*.js', ['uglify'])
        gulp.watch('./imgs/*', ['imagemin'])
        gulp.watch('./lib/**', ['lib'])
        gulp.watch('./index.html', ['hash1'])
        gulp.watch('./html/*.html', ['hash2'])
    })
    // 开发模式
gulp.task('default', ['less', 'es6toes5'], function() {
    gulp.watch('./less/*.less', ['less'])
    gulp.watch('./es6js/*.js', ['es6toes5'])
})