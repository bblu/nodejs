
module.exports = function (grunt) {  

    // Project configuration.  
    grunt.initConfig({  
        connect: {
            server: {
                options: {
                    port: 8000,
                    //hostname: '*',
                    base: ['.'],
                    keepalive:true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.registerTask('default',['connect']);
}
