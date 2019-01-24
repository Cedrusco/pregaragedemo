'use strict';
  var SaeidNodejsCustomerFD = require('../../sampleData/v1/SaeidNodejsCustomer.json');
  var SaeidNodejsCustomerData = SaeidNodejsCustomerFD;


var Promise = require('bluebird');
var paginationService = require('../apistrategies/pagination.js');
 

exports.getSaeidNodejsCustomer = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(SaeidNodejsCustomerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, SaeidNodejsCustomerData).then(function(result) {
        res.writeHead(200, {
            "Total": result.total,
            "Per-Page": result.pageSize,
            "Total-Pages": result.totalPages
        });
        res.end(JSON.stringify(result.pagedData));
    }).catch(function(error) {
        res.end(JSON.stringify(error));
    });
                        } else {
      res.end();
  }
}





exports.putSaeidNodejsCustomer = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(SaeidNodejsCustomerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(SaeidNodejsCustomerData[Object.keys(SaeidNodejsCustomerData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postSaeidNodejsCustomer = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(SaeidNodejsCustomerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(SaeidNodejsCustomerData[Object.keys(SaeidNodejsCustomerData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchSaeidNodejsCustomer = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(SaeidNodejsCustomerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(SaeidNodejsCustomerData[Object.keys(SaeidNodejsCustomerData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteSaeidNodejsCustomer = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(SaeidNodejsCustomerData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(SaeidNodejsCustomerData[Object.keys(SaeidNodejsCustomerData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


