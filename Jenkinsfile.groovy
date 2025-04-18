pipeline {
  agent any

  tools {
    nodejs "NodeJS_23" // Use the NodeJS version configured in Jenkins
  }

  environment {
    CYPRESS_CACHE_FOLDER = "${env.WORKSPACE}/.cache/Cypress"
  }

  stages {
    stage('Checkout') {
      steps {
        git branch: 'main', url: 'https://github.com/SandyTechie-ctrl/Cypress-Demo.git'
      }
    }

    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        sh 'npx cypress run'
      }
    }

    stage('Publish HTML Report') {
      steps {
        publishHTML(target: [
          allowMissing: true,
          alwaysLinkToLastBuild: true,
          keepAll: true,
          reportDir: 'cypress/reports/mochawesome',
          reportFiles: 'mochawesome.html',
          reportName: 'Mochawesome Report'
        ])
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'cypress/screenshots/**,cypress/videos/**', allowEmptyArchive: true
    }
  }
}
