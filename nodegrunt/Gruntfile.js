module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    uglify: {
      build: {
        src: ['js/libs/*.js', 'js/*.js'], // input
        dest: 'js/build/global.min.js' // output
      }
    },

    sass: {                              
      dist: {                            
        options: {                       
          style: 'compressed'
        },
        files: {                         
          'css/build/global.css': 'css/global.scss',       
        }
      }
    },

    connect: {  
      server: {
        options: {
          port: 8000,
          base: './',
          keepalive: true
        }
      }
    },

  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Load the plugin that provides the "connect" task.
  grunt.loadNpmTasks('grunt-contrib-connect');
 
  // Default task(s).
  grunt.registerTask('default', ['uglify', 'sass']);

  grunt.registerTask('dev', ['connect']);

};