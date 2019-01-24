'use strict';
var fs = require("fs");
/*
* This file will not be changed by the generator
*/
var samplePath = '/sampleData/v1/Saidcustomer.json';
var bodyParam = 'saidcustomers/v1'; 
     


exports.getSaidcustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var SaidcustomerFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var SaidcustomerData = [];
    if(SaidcustomerFD) {
        SaidcustomerData = JSON.parse(SaidcustomerFD);
    }
    cb(null, SaidcustomerData);
}
exports.getSaidcustomerById = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var id = args['id'] ? args['id'].value: null;
    var SaidcustomerFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var SaidcustomerData = [];
    if(SaidcustomerFD) {
        SaidcustomerData = JSON.parse(SaidcustomerFD);
    }
    var myRecord;
    for(var i=0;i<SaidcustomerData.length;i++) {
        if(SaidcustomerData[i]['id'] == id) {
             myRecord = SaidcustomerData[i];
             break;
        }
    }
    cb(null, myRecord);
}





exports.putSaidcustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var id = args['id'] ? args['id'].value: null;
   var body = args[bodyParam].value;
   var SaidcustomerFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var SaidcustomerData = [];
   if(SaidcustomerFD) {
       SaidcustomerData = JSON.parse(SaidcustomerFD);
   }
   var myRecord;
   for(var i=0;i<SaidcustomerData.length;i++) {
       if(SaidcustomerData[i]['id'] == id) {
            SaidcustomerData[i] = Object.assign(SaidcustomerData[i],body);
            myRecord = SaidcustomerData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(SaidcustomerData));
   cb(null, myRecord);
}


exports.postSaidcustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var body = args[bodyParam].value;
    var SaidcustomerFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var SaidcustomerData = [];
    if(SaidcustomerFD) {
        SaidcustomerData = JSON.parse(SaidcustomerFD);
    }
    SaidcustomerData.push(body);

    fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(SaidcustomerData));
    cb(null, body);
}


exports.patchSaidcustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var id = args['id'] ? args['id'].value: null;
   var body = args[bodyParam].value;
   var SaidcustomerFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var SaidcustomerData = [];
   if(SaidcustomerFD) {
       SaidcustomerData = JSON.parse(SaidcustomerFD);
   }
   var myRecord;
   for(var i=0;i<SaidcustomerData.length;i++) {
       if(SaidcustomerData[i]['id'] == id) {
            SaidcustomerData[i] = Object.assign(SaidcustomerData[i],body);
            myRecord = SaidcustomerData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(SaidcustomerData));
   cb(null, myRecord);
}



exports.deleteSaidcustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var id = args['id'] ? args['id'].value: null;
   //var body = args[bodyParam].value;
   var SaidcustomerFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var SaidcustomerData = [];
   if(SaidcustomerFD) {
       SaidcustomerData = JSON.parse(SaidcustomerFD);
   }
   var found = false;
   for(var i=0;i<SaidcustomerData.length;i++) {
       if(SaidcustomerData[i]['id'] == id) {
            SaidcustomerData.splice(i,1);
            found = true;
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(SaidcustomerData));
   if(found) {
    cb(null, true);
   }
   else {
    cb(null, false);
   }
}


