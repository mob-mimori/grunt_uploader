module.exports = function(grunt) {
  grunt.initConfig({
    watch: {
      files: '**/*',
      options: {
        livereload: true
      }
    },

    connect: {
      uses_defaults: {}
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect','watch']);
};