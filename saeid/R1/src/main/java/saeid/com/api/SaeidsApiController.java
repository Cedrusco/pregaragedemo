package saeid.com.api;

import saeid.com.model.*;
import io.swagger.annotations.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.fasterxml.jackson.core.JsonParseException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.type.TypeFactory;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import java.io.OutputStream;
import java.io.FileOutputStream;
import java.io.PrintStream;
import java.net.URISyntaxException;
import java.net.URL;

@javax.annotation.Generated(value = "saeid.com.languages.SpringCodegen", date = "2017-01-25T13:29:39.620Z")

@Controller
public class SaeidsApiController implements SaeidsApi {
                  
        public ResponseEntity<List<Saeid>> getSaeid() {
    	List<Saeid> saeidList = new ArrayList<Saeid>();
            	ObjectMapper mapper = new ObjectMapper();
      	try {
          InputStream inputStream = this.getClass().getResourceAsStream("/sampleData/Saeid.json");
          saeidList = mapper.readValue(inputStream, TypeFactory.defaultInstance().constructCollectionType(List.class, Saeid.class));
          return new ResponseEntity<List<Saeid>>(saeidList, HttpStatus.OK);

  		} catch (JsonParseException e) {
  			e.printStackTrace();
            return new ResponseEntity<List<Saeid>>(HttpStatus.INTERNAL_SERVER_ERROR);
  		} catch (JsonMappingException e) {
  			e.printStackTrace();
              return new ResponseEntity<List<Saeid>>(HttpStatus.INTERNAL_SERVER_ERROR);
  		} catch (IOException e) {
  			e.printStackTrace();
              return new ResponseEntity<List<Saeid>>(HttpStatus.INTERNAL_SERVER_ERROR);
  		}
          }

        public ResponseEntity<Saeid> getSaeidById(@ApiParam(value = "Path Parameter",required=true) @PathVariable("customerId") String customerId) {
    	List<Saeid> saeidList = new ArrayList<Saeid>();
            	ObjectMapper mapper = new ObjectMapper();
      	try {
          InputStream inputStream = this.getClass().getResourceAsStream("/sampleData/Saeid.json");
          saeidList = mapper.readValue(inputStream, TypeFactory.defaultInstance().constructCollectionType(List.class, Saeid.class));
          Saeid neededRecord = new Saeid();
          Boolean found = false;
          for (Saeid temp : saeidList) {
            if(customerId.equals(String.valueOf(temp.getCustomerId()))) {
              neededRecord = temp;
              found = true;
              break;
            }
          }
          if(found==true) {
            return new ResponseEntity<Saeid>(neededRecord,HttpStatus.OK);
          }
          else {
            return new ResponseEntity<Saeid>(HttpStatus.NOT_FOUND);
          }

  		} catch (JsonParseException e) {
  			e.printStackTrace();
            return new ResponseEntity<Saeid>(HttpStatus.INTERNAL_SERVER_ERROR);
  		} catch (JsonMappingException e) {
  			e.printStackTrace();
              return new ResponseEntity<Saeid>(HttpStatus.INTERNAL_SERVER_ERROR);
  		} catch (IOException e) {
  			e.printStackTrace();
              return new ResponseEntity<Saeid>(HttpStatus.INTERNAL_SERVER_ERROR);
  		}
        }
                              public ResponseEntity<Saeid> putSaeid(@ApiParam(value = "Path Parameter",required=true) @PathVariable("customerId") String customerId, @ApiParam(value = ""  ) @RequestBody Saeid saeid) {
    	List<Saeid> saeidList = new ArrayList<Saeid>();
            	ObjectMapper mapper = new ObjectMapper();
      	try {
          InputStream inputStream = this.getClass().getResourceAsStream("/sampleData/Saeid.json");
          saeidList = mapper.readValue(inputStream, TypeFactory.defaultInstance().constructCollectionType(List.class, Saeid.class));
          Boolean found = false;
          for (int j = saeidList.size()-1; j >= 0; j--) {
            if(customerId.equals(String.valueOf(saeidList.get(j).getCustomerId()))) {
                saeidList.remove(j);
              found = true;
              break;
            }
          }
          if(found==true) {
            saeidList.add(saeid);
            String jsonString =  mapper.writeValueAsString(saeidList);
            URL resourceUrl = getClass().getResource("/sampleData/Saeid.json");
            File file = new File(resourceUrl.toURI());
            OutputStream output = new FileOutputStream(file);
            PrintStream printStream = new PrintStream(output);
            printStream.print(jsonString);
            printStream.close();
            return new ResponseEntity<Saeid>(saeid,HttpStatus.OK);
          }
          else {
            return new ResponseEntity<Saeid>(HttpStatus.NOT_FOUND);
          }

  		} catch (JsonParseException e) {
  			e.printStackTrace();
            return new ResponseEntity<Saeid>(HttpStatus.INTERNAL_SERVER_ERROR);
  		} catch (JsonMappingException e) {
  			e.printStackTrace();
              return new ResponseEntity<Saeid>(HttpStatus.INTERNAL_SERVER_ERROR);
  		} catch (IOException e) {
  			e.printStackTrace();
              return new ResponseEntity<Saeid>(HttpStatus.INTERNAL_SERVER_ERROR);
  		}
          catch (URISyntaxException e) {
            e.printStackTrace();
            return new ResponseEntity<Saeid>(HttpStatus.INTERNAL_SERVER_ERROR);
          }

        }
    
                      public ResponseEntity<Saeid> postSaeid(@ApiParam(value = ""  ) @RequestBody Saeid saeid) {
    	List<Saeid> saeidList = new ArrayList<Saeid>();
            	ObjectMapper mapper = new ObjectMapper();
      	try {
          InputStream inputStream = this.getClass().getResourceAsStream("/sampleData/Saeid.json");
          saeidList = mapper.readValue(inputStream, TypeFactory.defaultInstance().constructCollectionType(List.class, Saeid.class));
          saeidList.add(saeid);
        String jsonString =  mapper.writeValueAsString(saeidList);
        URL resourceUrl = getClass().getResource("/sampleData/Saeid.json");
        File file = new File(resourceUrl.toURI());
        OutputStream output = new FileOutputStream(file);
        PrintStream printStream = new PrintStream(output);
        printStream.print(jsonString);
        printStream.close();
        return new ResponseEntity<Saeid>(saeid,HttpStatus.OK);

  		} catch (JsonParseException e) {
  			e.printStackTrace();
            return new ResponseEntity<Saeid>(HttpStatus.INTERNAL_SERVER_ERROR);
  		} catch (JsonMappingException e) {
  			e.printStackTrace();
              return new ResponseEntity<Saeid>(HttpStatus.INTERNAL_SERVER_ERROR);
  		} catch (IOException e) {
  			e.printStackTrace();
              return new ResponseEntity<Saeid>(HttpStatus.INTERNAL_SERVER_ERROR);
  		}
          catch (URISyntaxException e) {
            e.printStackTrace();
            return new ResponseEntity<Saeid>(HttpStatus.INTERNAL_SERVER_ERROR);
          }

        }
        
                  public ResponseEntity<Saeid> patchSaeid(@ApiParam(value = "Path Parameter",required=true) @PathVariable("customerId") String customerId, @ApiParam(value = ""  ) @RequestBody Patchsaeid saeid) {
    	List<Saeid> saeidList = new ArrayList<Saeid>();
            	ObjectMapper mapper = new ObjectMapper();
      	try {
          InputStream inputStream = this.getClass().getResourceAsStream("/sampleData/Saeid.json");
          saeidList = mapper.readValue(inputStream, TypeFactory.defaultInstance().constructCollectionType(List.class, Saeid.class));
          Saeid neededRecord = new Saeid();
          Boolean found = false;
          for (Saeid temp : saeidList) {
            if(customerId.equals(String.valueOf(temp.getCustomerId()))) {
              neededRecord = temp;
              found = true;
              break;
            }
          }
          if(found==true) {
            String jsonString =  mapper.writeValueAsString(saeidList);
            URL resourceUrl = getClass().getResource("/sampleData/Saeid.json");
            File file = new File(resourceUrl.toURI());
            OutputStream output = new FileOutputStream(file);
            PrintStream printStream = new PrintStream(output);
            printStream.print(jsonString);
            printStream.close();
            return new ResponseEntity<Saeid>(neededRecord,HttpStatus.OK);
          }
          else {
            return new ResponseEntity<Saeid>(HttpStatus.NOT_FOUND);
          }

  		} catch (JsonParseException e) {
  			e.printStackTrace();
            return new ResponseEntity<Saeid>(HttpStatus.INTERNAL_SERVER_ERROR);
  		} catch (JsonMappingException e) {
  			e.printStackTrace();
              return new ResponseEntity<Saeid>(HttpStatus.INTERNAL_SERVER_ERROR);
  		} catch (IOException e) {
  			e.printStackTrace();
              return new ResponseEntity<Saeid>(HttpStatus.INTERNAL_SERVER_ERROR);
  		}
          catch (URISyntaxException e) {
            e.printStackTrace();
            return new ResponseEntity<Saeid>(HttpStatus.INTERNAL_SERVER_ERROR);
          }

        }
            
              public ResponseEntity<Saeid> deleteSaeid(@ApiParam(value = "Path Parameter",required=true) @PathVariable("customerId") String customerId) {
    	List<Saeid> saeidList = new ArrayList<Saeid>();
            	ObjectMapper mapper = new ObjectMapper();
      	try {
          InputStream inputStream = this.getClass().getResourceAsStream("/sampleData/Saeid.json");
          saeidList = mapper.readValue(inputStream, TypeFactory.defaultInstance().constructCollectionType(List.class, Saeid.class));
          Boolean found = false;
          for (int j = saeidList.size()-1; j >= 0; j--) {
            if(customerId.equals(String.valueOf(saeidList.get(j).getCustomerId()))) {
                saeidList.remove(j);
              found = true;
              break;
            }
          }
          if(found==true) {
            String jsonString =  mapper.writeValueAsString(saeidList);
            URL resourceUrl = getClass().getResource("/sampleData/Saeid.json");
            File file = new File(resourceUrl.toURI());
            OutputStream output = new FileOutputStream(file);
            PrintStream printStream = new PrintStream(output);
            printStream.print(jsonString);
            printStream.close();
            return new ResponseEntity<Saeid>(HttpStatus.OK);
          }
          else {
            return new ResponseEntity<Saeid>(HttpStatus.NOT_FOUND);
          }

  		} catch (JsonParseException e) {
  			e.printStackTrace();
            return new ResponseEntity<Saeid>(HttpStatus.INTERNAL_SERVER_ERROR);
  		} catch (JsonMappingException e) {
  			e.printStackTrace();
              return new ResponseEntity<Saeid>(HttpStatus.INTERNAL_SERVER_ERROR);
  		} catch (IOException e) {
  			e.printStackTrace();
              return new ResponseEntity<Saeid>(HttpStatus.INTERNAL_SERVER_ERROR);
  		}
          catch (URISyntaxException e) {
            e.printStackTrace();
            return new ResponseEntity<Saeid>(HttpStatus.INTERNAL_SERVER_ERROR);
          }

            
    }
                
        

}
