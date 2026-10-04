const gulp = require("gulp");
const { src, dest, watch, series, parallel } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const concat = require("gulp-concat");
const uglify = require("gulp-uglify-es").default;
const sourcemaps = require("gulp-sourcemaps");
const browserSync = require("browser-sync").create();
const clean = require("gulp-clean");

function styles() {
  return src("src/scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(concat("output.css"))
    .pipe(dest("src/css"))
    .pipe(browserSync.stream());
}

function cssCompressed() {
  return src("src/css/style.min.css")
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(dest("src/css"));
}

function scripts() {
  return src([
    "src/data/**/*.js",
    "src/js/hook/**/*.js",
    "src/js/*.js",
    "!src/js/main.min.js",
  ])
    .pipe(concat("main.min.js"))
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(sourcemaps.write())
    .pipe(dest("src/js"))
    .pipe(browserSync.stream());
}

function watching() {
  watch(["src/scss/*.scss"], styles);
  watch(["src/css/style.min.css"], styles).on("change", browserSync.reload);
  watch(["src/data/**/*.js"], scripts);
  watch(["src/js/hook/*.js"], scripts);
  watch(["src/js/main.js"], scripts);
  watch(["src/**/*.html"]).on("change", browserSync.reload);
}

function browser() {
  browserSync.init({
    server: {
      baseDir: "src/",
    },
  });
}

function cleanDist() {
  return src("dist").pipe(clean());
}

function building() {
  return src(
    [
      "src/css/style.min.css",
      "src/js/main.min.js",
      "src/**/*.html",
      "src/img/**/*",
    ],
    {
      base: "src",
    }
  ).pipe(dest("dist"));
}

exports.styles = styles;
exports.scripts = scripts;
exports.watching = watching;
exports.browser = browser;
exports.building = building;

exports.build = series(cleanDist, cssCompressed, building);
exports.default = parallel(styles, scripts, watching, browser);
