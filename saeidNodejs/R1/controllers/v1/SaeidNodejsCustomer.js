'use strict';

  
    var paginationService = require('../apistrategies/pagination.js');
       var SaeidNodejsCustomerImplementation = require('../../../implementation/SaeidNodejsCustomerService.js');
    
var SaeidNodejsCustomerData;

        


    module.exports.getSaeidNodejsCustomer = function getSaeidNodejsCustomer (req, res, next) {
    var args = req.swagger.params;
    SaeidNodejsCustomerImplementation.getSaeidNodejsCustomer(args, (error, data) => {
        SaeidNodejsCustomerData = data;
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
    });
};
module.exports.getSaeidNodejsCustomerById = function getSaeidNodejsCustomer (req, res, next) {
    var args = req.swagger.params;
    SaeidNodejsCustomerImplementation.getSaeidNodejsCustomerById(args, (error, data) => {
        SaeidNodejsCustomerData = data;
        if (SaeidNodejsCustomerData && Object.keys(SaeidNodejsCustomerData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                        
            res.writeHead(200);
            res.end(JSON.stringify(SaeidNodejsCustomerData));

        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
    
                
        


    
            module.exports.putSaeidNodejsCustomer = function putSaeidNodejsCustomer (req, res, next) {
    var args = req.swagger.params;
    SaeidNodejsCustomerImplementation.putSaeidNodejsCustomer(args, (error, data) => {
        SaeidNodejsCustomerData = data;
        if (SaeidNodejsCustomerData && Object.keys(SaeidNodejsCustomerData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(SaeidNodejsCustomerData || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
        
        


    
        module.exports.postSaeidNodejsCustomer = function postSaeidNodejsCustomer (req, res, next) {
    var args = req.swagger.params;
    SaeidNodejsCustomerImplementation.postSaeidNodejsCustomer(args, (error, data) => {
        SaeidNodejsCustomerData = data;
        if (SaeidNodejsCustomerData && Object.keys(SaeidNodejsCustomerData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(SaeidNodejsCustomerData || {}, null, 2));
        } else {
            res.writeHead(400);
            res.end();
        }
    });
};
            
        


    
    module.exports.patchSaeidNodejsCustomer = function patchSaeidNodejsCustomer (req, res, next) {
    var args = req.swagger.params;
    SaeidNodejsCustomerImplementation.patchSaeidNodejsCustomer(args, (error, data) => {
        SaeidNodejsCustomerData = data;
        if (SaeidNodejsCustomerData && Object.keys(SaeidNodejsCustomerData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(SaeidNodejsCustomerData || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
                
        module.exports.deleteSaeidNodejsCustomer = function deleteSaeidNodejsCustomer (req, res, next) {
    var args = req.swagger.params;
    SaeidNodejsCustomerImplementation.deleteSaeidNodejsCustomer(args, (error, data) => {
        SaeidNodejsCustomerData = data;
                if(data == true) {
            res.writeHead(204);
            res.end();
        }
        else {
            res.writeHead(404);
            res.end();
        }
    });
};
    


    
                
        
    
