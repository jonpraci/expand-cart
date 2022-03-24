function defaultTask(cb) {
  // place code for your default task here
  cb();
}

exports.default = defaultTask;


const concat = require("gulp-concat");
// const sass = require("gulp-sass");
const sass = require('gulp-sass')(require('sass'));
const { src, dest, watch } = require("gulp");


function css() {
  return src("./src/css/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(dest("./dist/styles/"));
}
exports.css = css;

function js() {
  return src("./src/js/*.js")
    .pipe(concat("script.js"))
    .pipe(dest("./src/assets/script.js"));
}
exports.js = js;

exports.watch = function () {
    watch("./src/css/*.scss", css);
    // watch("./src/*.html", html);
    watch("./src/js/*.js", js);
  };