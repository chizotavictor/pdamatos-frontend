pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "git pull origin master"
                sh "npm install"
                sh "rm -rf dist/"
                sh "npm run build"
            }
        }
    }
}
