'use strict';

const chai = require('chai');
const expect = require('chai').expect;
chai.use(require('chai-http'));
const { app } = require('../../index.js'); // Our app
var fs = require("fs");

const BASE_PATH = '/api/saidcustomers/v1';
const samplePath = '/../../sampleData/v1/saidcustomer.json';
var saidcustomerData;

describe('Testing mochatestings API endpoints', function () {

  beforeEach(function() {
    var saidcustomerFD = fs.readFileSync(__dirname + samplePath);
    saidcustomerData = [];
    if(saidcustomerFD) {
      saidcustomerData = JSON.parse(saidcustomerFD);
    }
  });


                        
  // GET - List all records
  it('GET List of saidcustomers', function () {
    return chai.request(app)
      .get(BASE_PATH)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(data.length).to.be.eql(saidcustomerData.length);
      });
  });
    // GET - List existing record by id
  it('GET Existing saidcustomer by id', function () {
    var myRecord = saidcustomerData[0];
    var uniqueParam = myRecord['id'];
    return chai.request(app)
      .get(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(data).to.be.eql(saidcustomerData[0]);
      });
  });

  // GET - List non-existing record by id
  it('GET Non-Existing saidcustomer by id', function () {
    var uniqueParam = 'randomNotExistingId';
    return chai.request(app)
      .get(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(404);
      });
  });
                    

                                  
  // PUT - Update existing record
  it('PUT Existing saidcustomer', function () {
    return chai.request(app)
      .put(BASE_PATH + '/'+saidcustomerData[0]['id'])
      .send(saidcustomerData[0])
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(saidcustomerData[0]);
      });
  });      

    // PUT - Update non-existing record
    it('PUT Non-Existing saidcustomer', function () {
      var uniqueParam = 'randomNotExistingId';
      return chai.request(app)
        .put(BASE_PATH + '/'+uniqueParam)
        .send(saidcustomerData[0])
        .then(function (res) {
          expect(res).to.have.status(404);
        });
    });  

      

                            
  // POST - Add new record
  it('POST New saidcustomer', function () {
    return chai.request(app)
      .post(BASE_PATH)
      .send(saidcustomerData[0])
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(saidcustomerData[0]);
      });
  }); 

            

                
  // PATCH - Semi-update existing record
  it('PATCH Existing saidcustomer', function () {
    var updatedSting = JSON.stringify(saidcustomerData[0]);
    var updatedRecord = JSON.parse(updatedSting);
    var uniqueParam = updatedRecord['id'];
    delete updatedRecord['id'];
    return chai.request(app)
      .patch(BASE_PATH + '/'+uniqueParam)
      .send(updatedRecord)
      .then(function (res) {
        var data = res.body;
        expect(res).to.have.status(200);
        expect(data).to.be.eql(saidcustomerData[0]);
      });
  }); 

                        

          
  // DELETE - Delete existing record
  it('Delete Existing saidcustomer', function () {
    var recordToDelete = saidcustomerData[0];
    var uniqueParam = recordToDelete['id'];
    return chai.request(app)
      .delete(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(204);
      });
  });    

  // DELETE - Delete non-existing record
  it('Delete Non-Existing saidcustomer', function () {
    var uniqueParam = 'randomNotExistingId';
    return chai.request(app)
      .delete(BASE_PATH + '/'+uniqueParam)
      .then(function (res) {
        expect(res).to.have.status(404);
      });
  });     

                              

      
});