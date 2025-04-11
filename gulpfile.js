const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/*.scss') // ARQUIVO FONTE
        .pipe(sass({ outputStyle: 'compressed' })) // PARA O ARQUIVO JÁ VIR COMPRIMIDO
        .pipe(gulp.dest('./dist/css')); // ARQUIVO DE DESTINO
}

exports.default = styles;

exports.watch = function() { // EXECUTAR A FUNÇÃO DE OBSERVADOR
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) // 'ARQUIVO' PARA OBSERVAR E A (FUNÇÃO) PARA EXECUTAR
}