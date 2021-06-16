pipeline {
     agent any
     stages {
        stage("Build") {
            steps {
                sh "npm install"
                sh "rm -rf dist/"
                sh "npm run build"
            }
        }
    }
}
