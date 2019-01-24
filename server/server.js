'use strict';

var loopback = require('loopback');
var boot = require('loopback-boot');
var app = module.exports = loopback();
var request = require("request");

var app = module.exports = loopback();

app.start = function() {

  console.log("-----------------Start---------------");
  eventManagement();
//polling 
   // console.log("*********************************************************************************************************************************");
   // setInterval(eventManagement, 3000);   //after every 5 sec.
   // console.log("*********************************************************************************************************************************");
  
  // start the web server
  return app.listen(function() {
    app.emit('started');
    var baseUrl = app.get('url').replace(/\/$/, '');
    console.log('Web server listening at: %s', baseUrl);
    if (app.get('loopback-component-explorer')) {
      var explorerPath = app.get('loopback-component-explorer').mountPath;
      console.log('Browse your REST API at %s%s', baseUrl, explorerPath);
    }
  });
}; //end of app.start

function eventManagement()
{
  console.log("-----------------In the eventManagement function---------------");
  var username = "503601870/gostanbumdoq";
  var password = "SsD3xZZYl/RQW9Q/BmElErts+6aKX5AB";
  var odmObj;
  var responseFromOdm;

  var auth = "Basic " + new Buffer(username + ":" + password).toString("base64"); 
  console.log("auth: ", auth);

  const options = {
         headers: {'Authorization': auth},
         uri: 'https://ibmeventmgt-bm-api.mybluemix.net/api/incidentquery/v1/ce23eaa0-1e2e-11e9-991f-d2cb4d98ce5a/events',
         json: true
                    }
  request(options,function(err, response)
    {
      if(err)
      {
        console.log("err",err);
      }
      else
      {
        var JSON1 = response.body;
        console.log("======JSON from CEM =======",JSON1);
        console.log(" Data type of JSON1 : ",typeof JSON1); //object

        var jsonString = JSON.stringify(JSON1, null, 4);
        console.log("======String of JSON from CEM =======",jsonString);
        console.log(" Data type of jsonString : ",typeof jsonString); //string

        var splitString = jsonString.split("},\n    {\n");
        //console.log(splitString);

        splitString[0] = splitString[0].slice(8);
        console.log("#########################",splitString);
        // //console.log("....after....",splitString[0]);
        // //console.log(".................",splitString[1]);

        // //console.log("................",splitString[0]);
        console.log(" +++++++++++++++++++++++++++++++++++++++++ Number of events (Length of splitString) : ",splitString.length);

         for (var i = 0; i < splitString.length; i++)
         {
       
              var attributes = splitString[i].split(",\n");
              console.log("---------- attributes ----------",attributes);

              var deduplicationKey = attributes[0].trim();
              console.log("-------------deduplicationKey--------------- : ", deduplicationKey);

              var displayId = attributes[1].trim();
              console.log("------------- displayId------------- : ",displayId);

              var eventState = attributes[2].trim();
              var State = "\"State\":" + eventState.slice(13);
              console.log(" -------------State------------- : ",State);

              var firstOccurrence = attributes[3].trim();
              var First_Occurrence = "\"FirstOccurrence\":" + firstOccurrence.slice(18);
              console.log(" -------------First_Occurrence------------- : ",First_Occurrence);

              var flapping = attributes[4].trim();
              var Flapping = "\"Flapping\":" + flapping.slice(11);
              console.log(" -------------Flapping------------- : ",Flapping);

              var incidentUuid = attributes[5].trim();
              var incidentId = "\"incidentId\":" + incidentUuid.slice(15);
              console.log(" -------------incidentId------------- : ",incidentId);

              var ID = attributes[6].trim();
              var instanceId = "\"instanceId\": " + ID.slice(16);
              console.log(" -------------instanceId------------- : ", instanceId);

              var lastOccurrence = attributes[7].trim();
              var Last_Occurrence = "\"LastOccurrence\":" + lastOccurrence.slice(17);
              console.log(" -------------Last_Occurrence------------- : ",Last_Occurrence);

              var priority = attributes[8].trim();
              var Priority = "\"Priority\":" + priority.slice(11);
              console.log(" -------------Priority------------- : ",Priority);

              var severity = attributes[18].trim();
              var Event_Severity = "\"EventSeverity\":" + severity.slice(11);
              console.log(" -------------Event_Severity------------- : ",Event_Severity);

              var severity10 = attributes[19].trim();
              var Event_Severity10 = "\"EventSeverity10\":" + severity10.slice(13);
              console.log(" -------------Event_Severity10------------- : ",Event_Severity10);

              var summary = attributes[20].trim();
              var Event_Summary = "\"EventSummary\":" + summary.slice(10);
              console.log(" -------------Event_Summary------------- : ",Event_Summary);

              
              var c = ",";      
              var ds = State.concat(c,First_Occurrence,c,Flapping,c,incidentId,c,instanceId,c,Last_Occurrence,c,Priority,c,Event_Severity,c,Event_Severity10,c,Event_Summary); 

              var dataString = "{"+ ds + "}";
              console.log("------------------------DataString to odm --------------------------------",dataString); 

              var headers1 = 
              {
                'Content-Type': 'application/json',
                'Authorization': 'ApiKey eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzY29wZXMiOlsiZnVsbCJdLCJ1c2VySWQiOiI1YzI0YzM3NzYyMDFiZTAwMTI4MjgyYzMiLCJqdGkiOiI3YTYxYTAwNGZkY2E0MzRkODcyZTBjZDc5YWI0NDgyOSIsInJvbGVzIjpbIlVTRVIiXSwidXNlcm5hbWUiOiJ0ZWphc2hyZWUuc2hldGVAY3VtbWluc2NvbGxlZ2UuaW4ifQ.adkGv2tet6Y21LXTg8OylDK0pbHchy9I55y4ffBaumk'
              };

              var options1 = 
              {
                url:'https://decision-composer.ibm.com/rest/public/v1/execution/5c44242fb8d7f50012271c08/execute/v50',
                method: 'POST',
                headers: headers1,
                body: dataString
              };

              
              request(options1, function(err, response) 
              {
                if (!err) 
                {
                  console.log("--------------response from ODM----------------- : \n", response.body);
                  responseFromOdm = response.body;
                  console.log(" Data type of responseFromOdm : ",typeof responseFromOdm); //string
      

                  odmObj = JSON.parse(responseFromOdm);
                  console.log("--------------- odm obj -------------- \n", odmObj);
                  console.log(" Data type of responseFromOdm : ",typeof odmObj); //object

                  var eventdata = loopback.findModel('EventData');
              if(eventdata)
              {
                eventdata.create(odmObj, function(err,res)
                {
                  if(err)
                  {
                    console.log("Error: ",err);
                  }
                  else
                  {
                    //console.log("persistent model id : ",Incidents.getId(){});
                    console.log("data inserted");
                  }
                });
              }
              else
              {
                console.log("----- error --------");
              }





                } 
                else 
                {
                  console.error('Error: ', err);
                  res.render('error', {
                      message: err.message,
                      error: err
                    });
                }
              })

              



         } //end of for loop 

             

      } //end of else
    }) //end of request to CEM

} //end of eventManagement()

// Bootstrap the application, configure models, datasources and middleware.
// Sub-apps like REST API are mounted via boot scripts.
boot(app, __dirname, function(err) {
  if (err) throw err;

  // start the server if `$ node server.js`
  if (require.main === module)
    app.start();
});
