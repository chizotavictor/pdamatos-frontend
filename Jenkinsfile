pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "git checkout master"
                sh "npm install"
                sh "rm -rf dist/"
                sh "npm run build"
            }
        }
    }
}
