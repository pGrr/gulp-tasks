'use strict';

const { jsInputs, jsOutputDir, jsOutputName } = require('./constants');
const { src, dest } = require('gulp');
const concat = require('gulp-concat');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const { browsersync } = require('./browsersync');

// JS task
function js() {
    return src(jsInputs)
        .pipe(concat('script.js'))
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(uglify())
        .pipe(rename(jsOutputName))
        .pipe(dest(jsOutputDir))
        .pipe(browsersync.stream())
}

module.exports = js;

