const config = require('../config');
const gulp = require('gulp')
const theo = require('gulp-theo')


// Transform design/props.json to dist/props.scss:
gulp.src(config.paths.tokens, '*.json')
  .pipe(theo.plugin({
    transform: { type: 'web' },
    format: { type: 'scss' }
  }))
 .pipe(gulp.dest( config.paths.dist ))

