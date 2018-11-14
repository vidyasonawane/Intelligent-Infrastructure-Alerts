# Cloud-automation-manager

IBM Cloud Automation Manager (CAM) is a cloud management solution on IBM Cloud Private (ICP) for deploying cloud infrastructure with an optimised user experience. This infrastructure can be present across different cloud providers.

CAM helps to create and edit templates and services that implement common business patterns and to deploy them in cloud environment.

The provisioned services include deployment of micro services kubernetes containers and virtual machines across multiple cloud providers.  Post deployment, users can manage and access the  instances from the CAM user interface.

The provisioned VM’s  and  microservice containers over their lifetime can encounter multiple issues eg. low storage, thrashing, crashing of containers etc. The provisioned VM’s and containers publish different events and health status periodically. The endeavour of the proposed project is two fold

1. Leveraging IBM Cloud Event Manager to capture these events and direct them to deployed service instances of CAM

2. Develop a conversation BOT by leveraging IBM Watson API’s that can process natural language queries regarding the health status of the provisioned VM’s/ containers, publishing errors and warnings to the user and respond to different events received from event manager. 
