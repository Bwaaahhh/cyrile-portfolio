module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        sass: {                              // Nom de la tâche
            dist: {                            // Nom de la sous-tâche
                options: {                       // Options
                    style: 'compressed'
                },
                files: {                         // Liste des fichiers
                    'src/app/app.component.css': 'scss/style.scss'       // 'destination': 'source'
                }
            }
        },

        watch:{
            dist:{
                files : ['scss/*.scss'],
                tasks: ['sass:dist'],
                options:{ spawn: false}
            }
        }
    });

  // Import du package
  //grunt.loadNpmTasks('grunt-contrib-sass')

  // Redéfinition de la tâche `default` qui est la tâche lancée dès que vous lancez Grunt sans rien spécifier.
  // Note : ici, nous définissons sass comme une tâche à lancer si on lance la tâche `default`.
  grunt.registerTask('default', ['watch:dist']);
};
