module.exports = function(grunt) {

  var config = grunt.file.readJSON('GruntConfig.json');
  grunt.initConfig({

    sftp:{
      exec:{
        files:{'./':'index.html'},
        options: {
          // IPアドレス、ログイン情報、サーバー上のパスを指定
          path: config.sftp_path,
          host: config.sftp_host,
          username: config.sftp_user,
          password: config.sftp_key_password,
          privateKey: grunt.file.read(config.sftp_key_path),
          passphrase: config.sftp_key_password,
          port: config.sftp_port
        }
      }
    },

    watch: {
      files: '**/*',
      options: {
        livereload: true
      },
      tasks: [
        'sftp:exec'
      ]
    },

    connect: {
      uses_defaults: {}
    }
  });

  grunt.loadNpmTasks('grunt-ssh');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.registerTask('default', ['connect','watch']);
};