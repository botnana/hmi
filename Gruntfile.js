module.exports = function (grunt) {
    grunt.initConfig({
        copy: {
            main: {
               files: [
                   {expand: true, cwd: "node_modules/d3/", src: "d3.min.js", dest: "build/js/"},
                   {expand: true, cwd: "assets/img", src: "*.*", dest: "build/img"},
                   {expand: true, cwd: "assets/", src: "*.*", dest: "build/"},
                   {expand: true, cwd: "node_modules/purecss", src: "pure-min.css", dest: "build/"}
               ] 
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-webpack');
}
