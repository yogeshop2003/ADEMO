def COLOR_MAP = [
    'SUCCESS': 'good', 
    'FAILURE': 'danger',
]

def url = 'https://link-visual.qa.webcluesstaging.com/'

pipeline {
    agent any
	  environment {     
       DOCKERHUB_CREDENTIALS= credentials('registry.webcluesinfotech.com-credentials')  
         }    
       stages {
          stage('Checkout Code') {
              steps {
                  checkout scm
               }
            }
          stage('Cloning Git'){
            steps {
              git([url: 'https://github.com/CodezerosDev/link-visual-web.git', branch: 'qa', credentialsId: 'Codezerosdev-git'])

                  }
             }		  
          stage("Create Docker Image"){
            steps {
			  sh 'curl -o .env file:///home/jenkins/projects/link-visual-web/.env'
              sh 'docker build -t registry.webcluesinfotech.com/link-visual-web:$BUILD_NUMBER .'
		      	  sh 'docker image tag registry.webcluesinfotech.com/link-visual-web:$BUILD_NUMBER registry.webcluesinfotech.com/link-visual-web:latest '
			        echo 'Build Image Completed'
                }
		         }
		      stage("Login in Dokcer Registry"){
            steps{
              sh 'echo $DOCKERHUB_CREDENTIALS_PSW | docker login  registry.webcluesinfotech.com -u $DOCKERHUB_CREDENTIALS_USR --password-stdin'
			        echo 'Login Completed'
               }
		        }  
		      stage('Push Image to Docker Hub') {         
            steps{                            
	          sh 'docker push registry.webcluesinfotech.com/link-visual-web:$BUILD_NUMBER'                
			      sh 'docker push registry.webcluesinfotech.com/link-visual-web:latest'
				  sh 'docker rmi registry.webcluesinfotech.com/link-visual-web:$BUILD_NUMBER'
				  sh 'docker rmi registry.webcluesinfotech.com/link-visual-web:latest'
			      echo 'Push Image Completed'       
               }           
            }      
		      stage("Update the image on Kubernetes Deployment"){
            steps{
              sshagent(credentials: ['wdcs-eks-bastion']) {
                  sh '''
                      [ -d ~/.ssh ] || mkdir ~/.ssh && chmod 0700 ~/.ssh
                      ssh-keyscan -t rsa,dsa 35.154.229.152 >> ~/.ssh/known_hosts
                      ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no wdcs-eks-jenkins@35.154.229.152 'kubectl rollout restart deployment -n dev link-visual-web-deploy'
                      '''
                   }   
               }   
            }

        }
	  
	  post {
            always {
                slackSend(
                    channel: '#proj-linkvisual', 
                    message:"Build: *${currentBuild.result}:* JOB ${env.JOB_NAME} build ${env.BUILD_NUMBER} \n More info at: ${env.BUILD_URL} \n Web-Site URL: ${url}",
                    color: COLOR_MAP[currentBuild.result],
                    )

                emailext(
                    subject: "Build Succeded: ${JOB_NAME}-Build# ${BUILD_NUMBER} ${currentBuild.result}", 
                    body: "${currentBuild.result}: ${BUILD_URL}", 
                    attachLog: true, 
                    compressLog: true, 
                    replyTo: 'majaz@webcluesinfotech.com', 
                    to: 'saurabh.kadam@webcluesinfotech.com,soham.jadiya@codezeros.com,baldev@webcluesinfotech.com'
                    ) 
            }
        }
}
