/*jshint node:true*/
module.exports = function(grunt) {

// Project configuration.
grunt.initConfig({
	qunit: {
		files: ['test/index.html']
	},
	jshint: {
		options: {
			jshintrc: '.jshintrc'
		},
		files: [
			'jquery.prettydate.js',
			'i18n/*.js'
		],
		test: {
			options: {
				jshintrc: 'test/.jshintrc'
			},
			files: {
				src: [
					'test/*.js'
				]
			}
		},
		grunt: {
			files: {
				src: [
					'Gruntfile.js'
				]
			}
		}
	}
});

grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-qunit');

grunt.registerTask('default', ['jshint', 'qunit']);

};
