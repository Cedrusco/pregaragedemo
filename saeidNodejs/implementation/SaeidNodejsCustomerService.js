'use strict';
var fs = require("fs");
/*
* This file will not be changed by the generator
*/
var samplePath = '/sampleData/v1/SaeidNodejsCustomer.json';
var bodyParam = 'saeidNodejsCustomers/v1'; 
     


exports.getSaeidNodejsCustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var SaeidNodejsCustomerFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var SaeidNodejsCustomerData = [];
    if(SaeidNodejsCustomerFD) {
        SaeidNodejsCustomerData = JSON.parse(SaeidNodejsCustomerFD);
    }
    cb(null, SaeidNodejsCustomerData);
}
exports.getSaeidNodejsCustomerById = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var id = args['id'] ? args['id'].value: null;
    var SaeidNodejsCustomerFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var SaeidNodejsCustomerData = [];
    if(SaeidNodejsCustomerFD) {
        SaeidNodejsCustomerData = JSON.parse(SaeidNodejsCustomerFD);
    }
    var myRecord;
    for(var i=0;i<SaeidNodejsCustomerData.length;i++) {
        if(SaeidNodejsCustomerData[i]['id'] == id) {
             myRecord = SaeidNodejsCustomerData[i];
             break;
        }
    }
    cb(null, myRecord);
}





exports.putSaeidNodejsCustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var id = args['id'] ? args['id'].value: null;
   var body = args[bodyParam].value;
   var SaeidNodejsCustomerFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var SaeidNodejsCustomerData = [];
   if(SaeidNodejsCustomerFD) {
       SaeidNodejsCustomerData = JSON.parse(SaeidNodejsCustomerFD);
   }
   var myRecord;
   for(var i=0;i<SaeidNodejsCustomerData.length;i++) {
       if(SaeidNodejsCustomerData[i]['id'] == id) {
            SaeidNodejsCustomerData[i] = Object.assign(SaeidNodejsCustomerData[i],body);
            myRecord = SaeidNodejsCustomerData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(SaeidNodejsCustomerData));
   cb(null, myRecord);
}


exports.postSaeidNodejsCustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
    var revision = args.revision ? args.revision.value: 'R1';
    var body = args[bodyParam].value;
    var SaeidNodejsCustomerFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
    var SaeidNodejsCustomerData = [];
    if(SaeidNodejsCustomerFD) {
        SaeidNodejsCustomerData = JSON.parse(SaeidNodejsCustomerFD);
    }
    SaeidNodejsCustomerData.push(body);

    fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(SaeidNodejsCustomerData));
    cb(null, body);
}


exports.patchSaeidNodejsCustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var id = args['id'] ? args['id'].value: null;
   var body = args[bodyParam].value;
   var SaeidNodejsCustomerFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var SaeidNodejsCustomerData = [];
   if(SaeidNodejsCustomerFD) {
       SaeidNodejsCustomerData = JSON.parse(SaeidNodejsCustomerFD);
   }
   var myRecord;
   for(var i=0;i<SaeidNodejsCustomerData.length;i++) {
       if(SaeidNodejsCustomerData[i]['id'] == id) {
            SaeidNodejsCustomerData[i] = Object.assign(SaeidNodejsCustomerData[i],body);
            myRecord = SaeidNodejsCustomerData[i];
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(SaeidNodejsCustomerData));
   cb(null, myRecord);
}



exports.deleteSaeidNodejsCustomer = function(args, cb) {
    /**
    * To Do: Change to your custom implementation
    *
    **/
   var revision = args.revision ? args.revision.value: 'R1';
   var id = args['id'] ? args['id'].value: null;
   //var body = args[bodyParam].value;
   var SaeidNodejsCustomerFD = fs.readFileSync(__dirname +'/../'+revision+samplePath);
   var SaeidNodejsCustomerData = [];
   if(SaeidNodejsCustomerFD) {
       SaeidNodejsCustomerData = JSON.parse(SaeidNodejsCustomerFD);
   }
   var found = false;
   for(var i=0;i<SaeidNodejsCustomerData.length;i++) {
       if(SaeidNodejsCustomerData[i]['id'] == id) {
            SaeidNodejsCustomerData.splice(i,1);
            found = true;
            break;
       }
   }

   fs.writeFileSync(__dirname +'/../'+revision+samplePath,JSON.stringify(SaeidNodejsCustomerData));
   if(found) {
    cb(null, true);
   }
   else {
    cb(null, false);
   }
}


