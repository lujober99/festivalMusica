import { src, dest, watch , series} from 'gulp'
import * as dartSass from 'sass' 
import gulpSass from 'gulp-sass'


const sass = gulpSass(dartSass)

export function js(done){

    src('src/img/js/app.js')
        .pipe(dest('build/js'))

    done()
}

export function css(done){
    src('src/img/scss/app.scss', {sourcemaps: true})
        .pipe( sass().on('error', sass.logError) )
        .pipe( dest('build/css', {sourcemaps: true}) )

    done()

}

export function dev() {
    watch('src/img/scss/**/*.scss', css)
    watch('src/img/js/**/*.js', js)
}

export default series(js, css, dev)