pipeline {
  agent any

  tools {
    nodejs "NodeJS_23" // Make sure this is defined in Jenkins > Global Tool Configuration
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

    stage('Verify Environment') {
      steps {
        sh 'node -v'
        sh 'npm -v'
        sh 'npx cypress --version'
      }
    }

    stage('Install Dependencies') {
      steps {
        // Clean install ensures a fresh and consistent setup
        sh 'npm ci || npm install'
      }
    }

    stage('Run Cypress Tests') {
      steps {
        // Run with mochawesome reporter (must be configured in your package.json)
        sh 'npx cypress run'
      }
    }

    stage('Publish HTML Report') {
      steps {
        script {
          // Check if mochawesome report folder exists before publishing
          if (fileExists('cypress/reports/mochawesome/mochawesome.html')) {
            publishHTML(target: [
              allowMissing: false,
              alwaysLinkToLastBuild: true,
              keepAll: true,
              reportDir: 'cypress/reports/mochawesome',
              reportFiles: 'mochawesome.html',
              reportName: 'Mochawesome Report'
            ])
          } else {
            echo 'No mochawesome report found to publish.'
          }
        }
      }
    }
  }

  post {
    always {
      echo "Archiving screenshots and videos (if any)..."
      archiveArtifacts artifacts: 'cypress/screenshots/**,cypress/videos/**', allowEmptyArchive: true
    }
    failure {
      echo "Build failed. Check logs for details."
    }
  }
}
