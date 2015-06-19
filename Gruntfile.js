module.exports = function (grunt) {
	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		connect: {
		  server: {
		    options: {
		      livereload: true,
		      port: 8080,
		      keepalive: false
		    }
		  }
		},
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
		},
		watch: {
			scripts: {
				files: ['css/test.scss'],
				tasks: ['default']
			},
			css: {
				files: 'css/test.css',
			   	tasks: ['css'],
			   	options: {
			   		livereload: true
			   	}
			}
		}
	});

	// Default task(s).
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-http-server');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default');
	grunt.registerTask('server', ['sass', 'uglify', 'watch']);
};