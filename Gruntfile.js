module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      all: ['Gruntfile.js', 'src/**/*.js', 'tests/**/*.js'],
      options: {
        curly: true,
        eqeqeq: true
      }
    },

    watch: {
      files: ['Gruntfile.js', 'src/**/*.js', 'tests/**/*.js'],
      tasks: ['jshint', 'mochaTest'],
      options: {
        atBegin: true
      }
    },

    mochaTest: {
      src: ['tests/*-test.js']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
};
