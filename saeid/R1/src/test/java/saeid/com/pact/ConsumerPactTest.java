package saeid.com.pact;

import saeid.com.model.*;

import static junit.framework.TestCase.assertEquals;

import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.junit.Rule;
import org.junit.Test;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;

import au.com.dius.pact.consumer.Pact;
import au.com.dius.pact.consumer.PactProviderRule;
import au.com.dius.pact.consumer.PactVerification;
import au.com.dius.pact.consumer.dsl.PactDslJsonBody;
import au.com.dius.pact.consumer.dsl.PactDslWithProvider;
import au.com.dius.pact.model.PactFragment;
import au.com.dius.pact.model.PactSpecVersion;

public class ConsumerPactTest {

  @Rule
  public PactProviderRule mockProvider = new PactProviderRule("Pact_Provider", "localhost", 8899, PactSpecVersion.V3, this);

  @Pact(provider = "Pact_Provider", consumer = "Pact_Consumer")
  public PactFragment createFragment(PactDslWithProvider builder) {

    ObjectMapper mapper = new ObjectMapper();
    List<Saeid> saeidList = new ArrayList<Saeid>();
    try {
        InputStream inputStream = this.getClass().getResourceAsStream("/sampleData/Saeid.json");
        saeidList = mapper.readValue(inputStream, TypeFactory.defaultInstance().constructCollectionType(List.class, Saeid.class));
        String saeidListString =  mapper.writeValueAsString(saeidList);
        Saeid firstSaeid = saeidList.get(0);
        String firstSaeidString = mapper.writeValueAsString(firstSaeid);

        Map<String, String> headers = new HashMap<String, String>();
        headers.put("content-type", "application/json");
        return builder
                                  .uponReceiving("Get All records")
                    .path("/saeids")
                    .method("GET")
                    .body("")
                .willRespondWith()
                    .status(200)
                    .headers(headers)
                    //.body(saeidListString)
                              .uponReceiving("Get an existing record")
                    .method("GET")
                    .path("/saeids/"+firstSaeid.getCustomerId())
                    .body("")
                .willRespondWith()
                    .status(200)
                    .headers(headers)
                    //.body(firstSaeidString)
                .uponReceiving("Get Non-existing record")
                    .method("GET")
                    .path("/saeids/NON_EXISTING")
                    .body("")
                .willRespondWith()
                    .status(404)
                    .body("")
                                                                                                            .uponReceiving("Update an existing record")
                    .method("PUT")
                    .path("/saeids/"+firstSaeid.getCustomerId())
                    .headers(headers)
                    .body(firstSaeidString)
                .willRespondWith()
                    .status(200)
                    .headers(headers)
                    //.body(firstSaeidString)
                .uponReceiving("Update an Non-existing record")
                    .method("PUT")
                    .path("/saeids/NON_EXISTING")
                    .headers(headers)
                    .body(firstSaeidString)
                .willRespondWith()
                    .status(404)
                    .body("")
                                                                .uponReceiving("Add a new record")
                    .method("POST")
                    .path("/saeids")
                    .headers(headers)
                    .body(firstSaeidString)
                .willRespondWith()
                    .status(200)
                    .headers(headers)
                    //.body(firstSaeidString)
                                                                                                                                              .uponReceiving("Delete Non-existing record")
                    .method("DELETE")
                    .path("/saeids/NON_EXISTING")
                .willRespondWith()
                    .status(404)
                                  .toFragment();
            
            } catch (JsonParseException e) {
                e.printStackTrace();
            } catch (JsonMappingException e) {
                e.printStackTrace();
            } catch (IOException e) {
                e.printStackTrace();
            }
            return null;
  }

  @Test
  @PactVerification("Pact_Provider")
  public void runTest() {

    ObjectMapper mapper = new ObjectMapper();
    List<Saeid> saeidList = new ArrayList<Saeid>();
    try {
        ConsumerAdapter consumer = new ConsumerAdapter("http://localhost:8899");
        InputStream inputStream = this.getClass().getResourceAsStream("/sampleData/Saeid.json");
        saeidList = mapper.readValue(inputStream, TypeFactory.defaultInstance().constructCollectionType(List.class, Saeid.class));
        String saeidListString =  mapper.writeValueAsString(saeidList);
        Saeid firstSaeid = saeidList.get(0);
        String firstSaeidString = mapper.writeValueAsString(firstSaeid);

        ConsumerResponse response = new ConsumerResponse();

                  response = consumer.getSaeids();
        assertEquals(200, response.getStatusCode());
                response = consumer.getSaeidById(String.valueOf(firstSaeid.getCustomerId()).replaceAll(" ", "%20"));
        assertEquals(200, response.getStatusCode());
        
        response = consumer.getSaeidById("NON_EXISTING");
        assertEquals(404, response.getStatusCode());
                                                              response = consumer.updateSaeid(String.valueOf(firstSaeid.getCustomerId()).replaceAll(" ", "%20"), firstSaeidString);
        assertEquals(200, response.getStatusCode());
        //assertEquals(firstSaeidString, response.getResponse());

        response = consumer.updateSaeid("NON_EXISTING", firstSaeidString);
        assertEquals(404, response.getStatusCode());
        assertEquals("", response.getResponse());
                                    response = consumer.addSaeid(firstSaeidString);
        assertEquals(200, response.getStatusCode());
        //assertEquals(firstSaeidString, response.getResponse());
                                                                                  response = consumer.deleteSaeid("NON_EXISTING");
        assertEquals(404, response.getStatusCode());
          
    } catch (JsonParseException e) {
        e.printStackTrace();
    } catch (JsonMappingException e) {
        e.printStackTrace();
    } catch (IOException e) {
        e.printStackTrace();
    }
  }
}
