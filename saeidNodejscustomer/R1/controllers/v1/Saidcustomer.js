'use strict';

  
    var paginationService = require('../apistrategies/pagination.js');
       var SaidcustomerImplementation = require('../../../implementation/SaidcustomerService.js');
    
var SaidcustomerData;

        


    module.exports.getSaidcustomer = function getSaidcustomer (req, res, next) {
    var args = req.swagger.params;
    SaidcustomerImplementation.getSaidcustomer(args, (error, data) => {
        SaidcustomerData = data;
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
    });
};
module.exports.getSaidcustomerById = function getSaidcustomer (req, res, next) {
    var args = req.swagger.params;
    SaidcustomerImplementation.getSaidcustomerById(args, (error, data) => {
        SaidcustomerData = data;
        if (SaidcustomerData && Object.keys(SaidcustomerData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                        
            res.writeHead(200);
            res.end(JSON.stringify(SaidcustomerData));

        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
    
                
        


    
            module.exports.putSaidcustomer = function putSaidcustomer (req, res, next) {
    var args = req.swagger.params;
    SaidcustomerImplementation.putSaidcustomer(args, (error, data) => {
        SaidcustomerData = data;
        if (SaidcustomerData && Object.keys(SaidcustomerData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(SaidcustomerData || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
        
        


    
        module.exports.postSaidcustomer = function postSaidcustomer (req, res, next) {
    var args = req.swagger.params;
    SaidcustomerImplementation.postSaidcustomer(args, (error, data) => {
        SaidcustomerData = data;
        if (SaidcustomerData && Object.keys(SaidcustomerData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(SaidcustomerData || {}, null, 2));
        } else {
            res.writeHead(400);
            res.end();
        }
    });
};
            
        


    
    module.exports.patchSaidcustomer = function patchSaidcustomer (req, res, next) {
    var args = req.swagger.params;
    SaidcustomerImplementation.patchSaidcustomer(args, (error, data) => {
        SaidcustomerData = data;
        if (SaidcustomerData && Object.keys(SaidcustomerData).length > 0) {
                        res.setHeader('Content-Type', 'application/json');
                                        res.writeHead(200);
            res.end(JSON.stringify(SaidcustomerData || {}, null, 2));
        } else {
            res.writeHead(404);
            res.end();
        }
    });
};
                
        module.exports.deleteSaidcustomer = function deleteSaidcustomer (req, res, next) {
    var args = req.swagger.params;
    SaidcustomerImplementation.deleteSaidcustomer(args, (error, data) => {
        SaidcustomerData = data;
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
    


    
                
        
    
