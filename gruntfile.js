module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },
      all: ['Gruntfile.js', 'script/**/*.js', 'script-tests/**/*.js']
    },
    jasmine: {
      tvpjs: {
        src: 'script/**/*.js',
        options: {
          specs: ['script-tests/**/*test.js'],
          outfile: './SpecRunner.html',
          keepRunner: true
        }
      }
    }
  });

  // Load plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task(s).
  grunt.registerTask('default', ['jshint', 'jasmine']);

};
