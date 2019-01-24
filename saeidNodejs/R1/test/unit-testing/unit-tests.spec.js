'use strict';

const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-http'));
const { app } = require('../../index.js'); // Our app
var fs = require("fs");

const BASE_PATH = '/api/saeidNodejsCustomers/v1';
const samplePath = '/../../sampleData/v1/saeidNodejsCustomer.json';
var saeidNodejsCustomerData;

describe('Testing mochatestings API endpoints', function () {

  beforeEach(function() {
    var saeidNodejsCustomerFD = fs.readFileSync(__dirname + samplePath);
    saeidNodejsCustomerData = [];
    if(saeidNodejsCustomerFD) {
      saeidNodejsCustomerData = JSON.parse(saeidNodejsCustomerFD);
    }
  });


                        
  // GET - List all records
  it('GET List of saeidNodejsCustomers', function () {
    return chai.request(app)
      .get(BASE_PATH)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(data.length).to.be.eql(saeidNodejsCustomerData.length);
      });
  });
    // GET - List existing record by id
  it('GET Existing saeidNodejsCustomer by id', function () {
    var myRecord = saeidNodejsCustomerData[0];
    var uniqueParam = myRecord['id'];
    return chai.request(app)
      .get(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(data).to.be.eql(saeidNodejsCustomerData[0]);
      });
  });

  // GET - List non-existing record by id
  it('GET Non-Existing saeidNodejsCustomer by id', function () {
    var uniqueParam = 'randomNotExistingId';
    return chai.request(app)
      .get(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(404);
      });
  });
                    

                                  
  // PUT - Update existing record
  it('PUT Existing saeidNodejsCustomer', function () {
    return chai.request(app)
      .put(BASE_PATH + '/'+saeidNodejsCustomerData[0]['id'])
      .send(saeidNodejsCustomerData[0])
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(saeidNodejsCustomerData[0]);
      });
  });      

    // PUT - Update non-existing record
    it('PUT Non-Existing saeidNodejsCustomer', function () {
      var uniqueParam = 'randomNotExistingId';
      return chai.request(app)
        .put(BASE_PATH + '/'+uniqueParam)
        .send(saeidNodejsCustomerData[0])
        .then(function (res) {
          expect(res).to.have.status(404);
        });
    });  

      

                            
  // POST - Add new record
  it('POST New saeidNodejsCustomer', function () {
    return chai.request(app)
      .post(BASE_PATH)
      .send(saeidNodejsCustomerData[0])
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(saeidNodejsCustomerData[0]);
      });
  }); 

            

                
  // PATCH - Semi-update existing record
  it('PATCH Existing saeidNodejsCustomer', function () {
    var updatedSting = JSON.stringify(saeidNodejsCustomerData[0]);
    var updatedRecord = JSON.parse(updatedSting);
    var uniqueParam = updatedRecord['id'];
    delete updatedRecord['id'];
    return chai.request(app)
      .patch(BASE_PATH + '/'+uniqueParam)
      .send(updatedRecord)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(saeidNodejsCustomerData[0]);
      });
  }); 

                        

          
  // DELETE - Delete existing record
  it('Delete Existing saeidNodejsCustomer', function () {
    var recordToDelete = saeidNodejsCustomerData[0];
    var uniqueParam = recordToDelete['id'];
    return chai.request(app)
      .delete(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(204);
      });
  });    

  // DELETE - Delete non-existing record
  it('Delete Non-Existing saeidNodejsCustomer', function () {
    var uniqueParam = 'randomNotExistingId';
    return chai.request(app)
      .delete(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(404);
      });
  });     

                              

      
});