var express = require('express');
var gulp = require('gulp');

var app = express();
app.use('/', express.static('public'));

gulp.task('express', function() {
    var server = app.listen(3005, function() {
        console.log("server started at port 3005");
    });
});

gulp.task('default', ['express']);
