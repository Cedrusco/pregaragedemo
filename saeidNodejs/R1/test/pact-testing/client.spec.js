'use strict';

const path = require('path');
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const { Pact } = require('@pact-foundation/pact');
const expect = chai.expect;
var fs = require("fs");
chai.use(chaiAsPromised);

const config = require('../../configuration/config');
const LOG_LEVEL = process.env.LOG_LEVEL || 'WARN';
const MOCK_SERVER_PORT = config.MOCK_SERVER_PORT;

const BASE_PATH = '/api/saeidNodejsCustomers/v1';
var samplePath = '/../../sampleData/v1/saeidNodejsCustomer.json';

describe('Pact', () => {
  const provider = new Pact({
    consumer: 'Client Service',
    provider: 'API Service',
    port: MOCK_SERVER_PORT,
    log: path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
    dir: path.resolve(process.cwd(), 'pacts'),
    logLevel: LOG_LEVEL,
    spec: 2
  })

  // Define the list of expected records (Read from the sample data file)
  const expectedRecords = JSON.parse(fs.readFileSync(__dirname + samplePath));


  // Setup a Mock Server before unit tests run.
  // This server acts as a Test Double for the real Provider API.
  // We then call addInteraction() for each test to configure the Mock Service
  // to act like the Provider
  // It also sets up expectations for what requests are to come, and will fail
  // if the calls are not seen.
  before(() => provider.setup())

  // After each individual test (one or more interactions)
  // we validate that the correct request came through.
  // This ensures what we _expect_ from the provider, is actually
  // what we've asked for (and is what gets captured in the contract)
  afterEach(() => provider.verify())

  // Configure and import client API
  // Note that we update the API endpoint to point at the Mock Service
  process.env.API_HOST = `http://localhost:${MOCK_SERVER_PORT}`
  const client = require('./dummyClient')

  // Verify service client works as expected.
  //
  // Note that we don't call the client API endpoints directly, but
  // use unit-style tests that test the collaborating function behaviour -
  // we want to test the function that is calling the external service.

              describe('when a call to list all records from the API Service is made', () => {
    describe('and there are records in the sample data', () => {
      before(() =>
        provider.addInteraction({
          state: 'Has some records',
          uponReceiving: 'a request for all records',
          withRequest: {
            method: 'GET',
            path: BASE_PATH
          },
          willRespondWith: {
            status: 200,
            headers: {
              'Content-Type': 'application/json'
            },
            body: expectedRecords
          }
        }))

      it('returns a list of records', done => {
        client.getsaeidNodejsCustomer((error,response)=>{
          var parsedData = JSON.parse(response.body);
          expect(parsedData.length == expectedRecords.length);
          done();
        });
      })
    })
  })
    describe('when a call to the API Service is made to retreive a single record by ID', () => {
    describe('and there is an record in the data with that ID', () => {
      before(() => provider.addInteraction({
        state: 'Has a record with ID '+expectedRecords[0]['id'],
        uponReceiving: 'a request for a record with ID '+expectedRecords[0]['id'],
        withRequest: {
          method: 'GET',
          path: BASE_PATH+'/'+expectedRecords[0]['id']
        },
        willRespondWith: {
          status: 200,
          headers: {
            'Content-Type': 'application/json'
          },
          body: expectedRecords[0]
        }
      }))

      it('returns the record', done => {
        client.getsaeidNodejsCustomerById(expectedRecords[0]['id'],(error,response)=>{
          var parsedData = JSON.parse(response.body);
          expect(parsedData).to.have.deep.property('id', expectedRecords[0]['id']);

          done();
        })

      })
    })

    describe('and there no records in the database', () => {
      before(() => provider.addInteraction({
        state: 'Has no records',
        uponReceiving: 'a request for a record with ID Non-Existing',
        withRequest: {
          method: 'GET',
          path: BASE_PATH+'/NonExisting'
        },
        willRespondWith: {
          status: 404
        }
      }))

      it('returns a 404', done => {
        client.getsaeidNodejsCustomerById('NonExisting',(error,response)=>{
          expect(response.statusCode).to.be.eql(404);
          done();
        })
      })
    })
  });
    
  
      

        
  
      describe('when a call to the API Service is made to update a single record by ID', () => {
      describe('and there is a record in the data with that ID', () => {
        before(() => provider.addInteraction({
          state: 'Has a record with ID '+expectedRecords[0]['id'],
          uponReceiving: 'a request to update a record with ID '+expectedRecords[0]['id'],
          withRequest: {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            path: BASE_PATH+'/'+expectedRecords[0]['id'],
            body: expectedRecords[0]
          },
          willRespondWith: {
            status: 200,
            headers: {
              'Content-Type': 'application/json'
            },
            body: expectedRecords[0]
          }
        }))
  
        it('returns the updated record', done => {
          client.putsaeidNodejsCustomer(expectedRecords[0]['id'], expectedRecords[0], (error,response)=>{
            var parsedData = JSON.parse(response.body);
            expect(parsedData).to.have.deep.property('id', expectedRecords[0]['id']);
            done();
          })
  
        })
      })
  
      describe('and there no records in the database with that ID', () => {
        before(() => provider.addInteraction({
          state: 'Has no records with that ID',
          uponReceiving: 'a request to update a record with ID Non-Existing',
          withRequest: {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            path: BASE_PATH+'/NonExisting',
            body: expectedRecords[0]
          },
          willRespondWith: {
            status: 404
          }
        }))
  
        it('returns a 404', done => {
          client.putsaeidNodejsCustomer('NonExisting', expectedRecords[0], (error,response)=>{
            expect(response.statusCode).to.be.eql(404);
            done();
          })
        })
      })
    });
      

        
      describe('when a call to the API Service is made to post a record', () => {
      describe('and the record abides by the required schema', () => {
        before(() => provider.addInteraction({
          state: 'Has some records',
          uponReceiving: 'a request for adding a new record',
          withRequest: {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            path: BASE_PATH,
            body: expectedRecords[0]
          },
          willRespondWith: {
            status: 200,
            headers: {
              'Content-Type': 'application/json'
            },
            body: expectedRecords[0]
          }
        }))
  
        it('returns the newly added record', done => {
          client.postsaeidNodejsCustomer(expectedRecords[0],(error,response)=>{
            var parsedData = JSON.parse(response.body);
            expect(parsedData).to.have.deep.property('id', expectedRecords[0]['id']);
            done();
          });
  
        });
      });

      describe('and the record is invalid with respect to the schema', () => {
        before(() => provider.addInteraction({
          state: 'Has some records',
          uponReceiving: 'a request for adding an invalid record',
          withRequest: {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            path: BASE_PATH,
            body: {
              'dummyKey': 'dummyValue'
            }
          },
          willRespondWith: {
            status: 400
          }
        }))
  
        it('returns 400 error', done => {
          client.postsaeidNodejsCustomer({ 'dummyKey': 'dummyValue' },(error,response)=>{
            expect(response.statusCode).to.be.eql(400);
            done();
          });
  
        });
      });
    });
  
      

        
  
        describe('when a call to the API Service is made to semi-update a single record by ID', () => {
      var semiRecordString = JSON.stringify(expectedRecords[0]);
      var semiRecord = JSON.parse(semiRecordString);
      delete semiRecord['id'];
      describe('and there is an record in the data with that ID', () => {
        before(() => provider.addInteraction({
          state: 'Has a record with ID '+expectedRecords[0]['id'],
          uponReceiving: 'a request to semi-update a record with ID '+expectedRecords[0]['id'],
          withRequest: {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            path: BASE_PATH+'/'+expectedRecords[0]['id'],
            body: semiRecord
          },
          willRespondWith: {
            status: 200,
            headers: {
              'Content-Type': 'application/json'
            },
            body: expectedRecords[0]
          }
        }))
  
        it('returns the updated record', done => {
          client.patchsaeidNodejsCustomer(expectedRecords[0]['id'], semiRecord, (error,response)=>{
            var parsedData = JSON.parse(response.body);
            expect(parsedData).to.have.deep.property('id', expectedRecords[0]['id']);
            done();
          })
  
        })
      })
  
      describe('and there no records in the database with that ID', () => {
        before(() => provider.addInteraction({
          state: 'Has no records with that ID',
          uponReceiving: 'a request to semi-update a record with ID Non-Existing',
          withRequest: {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            path: BASE_PATH+'/NonExisting',
            body: semiRecord
          },
          willRespondWith: {
            status: 404
          }
        }))
  
        it('returns a 404', done => {
          client.patchsaeidNodejsCustomer('NonExisting', semiRecord, (error,response)=>{
            expect(response.statusCode).to.be.eql(404);
            done();
          })
        })
      })
    });
    

        
  
          describe('when a call to the API Service is made to delete a single record by ID', () => {
      describe('and there is a record in the data with that ID', () => {
        before(() => provider.addInteraction({
          state: 'Has a record with ID '+expectedRecords[0]['id'],
          uponReceiving: 'a request to delete a record with ID '+expectedRecords[0]['id'],
          withRequest: {
            method: 'DELETE',
            path: BASE_PATH+'/'+expectedRecords[0]['id']
          },
          willRespondWith: {
            status: 204
          }
        }))
  
        it('returns 204', done => {
          client.deletesaeidNodejsCustomer(expectedRecords[0]['id'], (error,response)=>{
            expect(response.statusCode).to.be.eql(204);
            done();
          })
  
        })
      })
  
      describe('and there no records in the database with that ID', () => {
        before(() => provider.addInteraction({
          state: 'Has no records with that ID',
          uponReceiving: 'a request to delete a record with ID Non-Existing',
          withRequest: {
            method: 'DELETE',
            path: BASE_PATH+'/NonExisting'
          },
          willRespondWith: {
            status: 404
          }
        }))
  
        it('returns a 404', done => {
          client.deletesaeidNodejsCustomer('NonExisting', (error,response)=>{
            expect(response.statusCode).to.be.eql(404);
            done();
          })
        })
      })
    });
  

      // Write pact files
  after(() => {
    return provider.finalize()
  });
});