pipeline {
    // Le decimos a Jenkins que use el agente permanente que configuraremos.
    agent {
        label 'cypress-agent'
    }

    stages {
        // Etapa 1: Clonar el repositorio
        stage('Source') {
            steps {
                git branch: 'main', url: 'https://github.com/Exodiel/pipeline-e2e-jenkins.git'
            }
        }

        // Etapa 2: Instalar dependencias de forma limpia para CI
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        
        // Etapa 3: "Construir" la aplicación
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
      
        // Etapa 4: Ejecutar pruebas unitarias
        stage('Unit tests') {
            steps {
                sh 'npm run test:unit'
            }
        }

        // Etapa 5: Ejecutar pruebas de API
        stage('API tests') {
            steps {
                sh 'npm run test:api'
            }
        }

        // Etapa 6: Ejecutar las pruebas End-to-End REALES
        stage('E2E tests') {
            steps {
                // Este comando inicia el servidor, espera a que esté listo y luego corre los tests de Cypress
                sh 'npm run test:e2e'
            }
        }
    }
    
    post {
        always {
            // Archiva y publica los reportes de Jest y de Cypress
            junit 'results/*.xml'
            archiveArtifacts artifacts: 'results/*.xml', allowEmptyArchive: true
            cleanWs()
        }
        
        failure {
            echo "PIPELINE FAILED: Simulating email notification for Job '${env.JOB_NAME}' - Build #${env.BUILD_NUMBER}"
        }
    }
}