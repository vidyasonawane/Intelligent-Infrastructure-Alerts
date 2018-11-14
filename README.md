# Cloud-automation-manager

IBM Cloud Automation Manager (CAM) is a cloud management solution on IBM Cloud Private (ICP) for deploying cloud infrastructure in multiple clouds with an optimized user experience. 

Cloud Automation Manager helps to create and edit templates and services that implement common business patterns and to deploy them in cloud environment. 
The provisioned services  include deployment of virtual machines across multiple cloud providers.  After they are deployed, users can manage and access the instances from the Cloud Automation Manager user interface.

The provisioned VM’s over their lifetime can encounter multiple issues eg. low storage, thrashing etc. Various cloud providers today have API’s through which these provisioned VM’s can publish  different events and health status periodically. The endeavour of the proposed project is two fold : 

   a) To capture these events (by developing a new solution or leveraging existing IBM Bluemix services like IBM Cloud Event Manager) and linking them to Cloud Automation Manager deployed service Instances
    
   b) Develop a conversation BOT by leveraging IBM Watson API’s that can process natural language queries regarding the health status of the provisioned VM’s, publishing errors and warnings to the user and respond to different events received from event manager. This conversation BOT will be eventually integrated with the user interface of Cloud Automation Manager.

Technical Skills Requirement:
    1. Essentials of Docker, Kubernetes and Microservices.
    2. JavaScript, Node.js,  Loopback

Useful References:
    1. https://console.bluemix.net/docs/services/EventManagement/index.html#event_gettingstarted
    2. https://github.com/IBM-Cloud/cloud-event-management-sample
    3. https://www.ibm.com/support/knowledgecenter/en/SS2L37/product_welcome_cloud_automation_manager.html
