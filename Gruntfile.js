module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {                         
		          'css/test.css': 'css/test.scss'       
		       }
	   		}
		},

		uglify: {
			options: {
				banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy‐mm‐dd") %> */\n'
			},
			target: {
				src: 'js/main.js',
				dest: 'js/main.min.js'
			}
		}
	});

	// Default task(s).
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.registerTask('default', ['sass', 'uglify']);
};