module.exports = function (grunt) {
	'use strict';
	grunt.initConfig({
		sass: {
			dist: {
				files: {
					'css/main.css': 'sass/main.scss'
				}
			}
		},
		autoprefixer: {
			options: {
			  // autoprefixed options
				browsers: ['last 5 versions']
			},
			dist: {
			  //  targeted files
				files: {
					'css/main.css': 'css/main.css'
				}
			}
		},
		watch: {
			css: {
				files: ['sass/**/*.scss'],
				tasks: ['sass'],
				options: {
					livereload: true
				}
			}
          
          /*autoprefix: {
            files: ['css/main.css'],
			tasks: ['autoprefixer'],
          }*/
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
};