// generated by @ng-toolkit/serverless
const awsServerlessExpress = require('aws-serverless-express');
const server = require('./dist/server');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');

const binaryMimeTypes = [
  'application/javascript',
  'application/json',
  'application/octet-stream',
  'application/xml',
  'image/jpeg',
  'image/png',
  'image/gif',
  'text/comma-separated-values',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml',
  'image/x-icon',
  'image/svg+xml',
    'application/x-font-ttf'
];

server.app.use(awsServerlessExpressMiddleware.eventContext());

const serverProxy = awsServerlessExpress.createServer(server.app, null, binaryMimeTypes);
module.exports.universal = (event, context) => awsServerlessExpress.proxy(serverProxy, event, context);


function doC(){
  return new Promise(function(resolve,reject){
      var request = require('request');
      var fileUrl = "https://terriblytinytales.com/test.txt";
      request.get(fileUrl, function (error, response, body) {
          if (!error && response.statusCode == 200) {
              var data = body;
              resolve(data.toString())
              // Continue with your processing here.
          }
          else
          {
              console.log(error);
          }
      });
  })
}

function calc(data_array,number){
  var counts = {}; //We are going to count occurrence of item here
  
  for(var i = 0, len = data_array.length; i < len; i++)
  {   
      if(data_array[i] != '' )
      {
          var word = data_array[i];
          if(counts[word] === undefined){ //if count[word] doesn't exist
          counts[word] = 1;    //set count[word] value to 1
          }else{                  //if exists
          counts[word] = counts[word] + 1; //increment existing value
          }
      }
  }

  var sortedArray = getSortedKeys(counts);
  
  return sortedArray.slice(0,number);
}

function getSortedKeys(obj) {
  var keys = []; 
  var i=0;
  for(var key in obj) {
     
      keys.push({name:key,val:obj[key]});
  }
  
  return keys.sort(function(a,b) {
      return b.val - a.val;
  });
  
}

module.exports.process = (event,context,callback) => {
  
  doC()
    .then(data => {
          const processeddata = data.replace(/\r?\n|\r|[{()}]|\?|\,/g, " ").split(" ");
          
          var number = event.pathParameters.count;
          const endresult = calc(processeddata,number);
          const response = { 
                      headers: { "Access-Control-Allow-Origin": "*" },
                      body: JSON.stringify(endresult) 
                      };
            callback(null, response);
         
  }).catch(callback);

  

};

//https://j9iskx8qlj.execute-api.ap-south-1.amazonaws.com/dev/helloworld/4