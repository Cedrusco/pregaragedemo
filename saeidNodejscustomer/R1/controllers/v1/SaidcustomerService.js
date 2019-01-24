'use strict';
  var SaidcustomerFD = require('../../sampleData/v1/Saidcustomer.json');
  var SaidcustomerData = SaidcustomerFD;


var Promise = require('bluebird');
var paginationService = require('../apistrategies/pagination.js');
 

exports.getSaidcustomer = function(args, res, next) {
/**
 * Gets all customers from the system that the user has access to
 *
 * returns List
 **/
  if (Object.keys(SaidcustomerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                                      console.log('Start Pagination......');
    paginationService.getPages(args.pageNumber.value, args.pageSize.value, SaidcustomerData).then(function(result) {
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





exports.putSaidcustomer = function(args, res, next) {
/**
 * Puts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(SaidcustomerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(SaidcustomerData[Object.keys(SaidcustomerData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.postSaidcustomer = function(args, res, next) {
/**
 * Posts all customers from the system that the user has access to
 *
 **/
  if (Object.keys(SaidcustomerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(SaidcustomerData[Object.keys(SaidcustomerData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


exports.patchSaidcustomer = function(args, res, next) {
/**
 * Patchs all customers from the system that the user has access to
 *
 **/
  if (Object.keys(SaidcustomerData).length > 0) {
            res.setHeader('Content-Type', 'application/json');
                    res.end(JSON.stringify(SaidcustomerData[Object.keys(SaidcustomerData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}



exports.deleteSaidcustomer = function(args, res, next) {
/**
* Deletes all customers from the system that the user has access to
*
**/
  if (Object.keys(SaidcustomerData).length > 0) {
      res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(SaidcustomerData[Object.keys(SaidcustomerData)[0]] || {}, null, 2));
  } else {
      res.end();
  }
}


