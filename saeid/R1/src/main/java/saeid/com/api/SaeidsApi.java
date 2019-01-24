package saeid.com.api;

import saeid.com.model.*;

import io.swagger.annotations.*;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.multipart.MultipartFile;

import javax.validation.Valid;

import java.util.List;
import javax.validation.constraints.*;
@javax.annotation.Generated(value = "saeid.com.languages.SpringCodegen", date = "2017-01-25T13:29:39.620Z")

@Api(value = "Saeids", description = "the Saeids API")
public interface SaeidsApi {
      @ApiOperation(value = "", notes = "Gets all saeids from the system that the user has access to", response = Saeid.class, responseContainer = "List", tags={ "Saeid", })
    @ApiResponses(value = {
        @ApiResponse(code = 200, message = "saeid response", response = Saeid.class),
        @ApiResponse(code = 404, message = "saeid response", response = Saeid.class),
        @ApiResponse(code = 500, message = "saeid response", response = Saeid.class) })
    @RequestMapping(value = "/saeids",
        produces = { "application/json" },
        method = RequestMethod.GET)
    ResponseEntity<List<Saeid>> getSaeid();
    
  @ApiOperation(value = "", notes = "Gets all saeids from the system that the user has access to", response = Saeid.class, tags={ "Saeid", })
    @ApiResponses(value = { 
        @ApiResponse(code = 200, message = "saeid response", response = Saeid.class),
        @ApiResponse(code = 404, message = "saeid response", response = Object.class),
        @ApiResponse(code = 500, message = "saeid response", response = Object.class) })
    @RequestMapping(value = "/saeids/{customerId}",
        produces = { "application/json" }, 
        method = RequestMethod.GET)
    ResponseEntity<Saeid> getSaeidById(@ApiParam(value = "Path Parameter",required=true) @PathVariable("customerId") String customerId);

                        @ApiOperation(value = "", notes = "Puts all saeids from the system that the user has access to", response = Saeid.class, responseContainer = "List", tags={ "Saeid", })
  @ApiResponses(value = {
      @ApiResponse(code = 204, message = "saeid response", response = Saeid.class),
      @ApiResponse(code = 404, message = "saeid response", response = Saeid.class),
      @ApiResponse(code = 500, message = "saeid response", response = Saeid.class) })
  @RequestMapping(value = "/saeids/{customerId}",
      produces = { "application/json" },
      consumes = { "application/json" },
      method = RequestMethod.PUT)
  ResponseEntity<Saeid> putSaeid(@ApiParam(value = "Path Parameter",required=true) @PathVariable("customerId") String customerId, @ApiParam(value = ""  )  @Valid @RequestBody Saeid saeids);
            @ApiOperation(value = "", notes = "Posts all saeids from the system that the user has access to", response = Saeid.class, responseContainer = "List", tags={ "Saeid", })
  @ApiResponses(value = {
      @ApiResponse(code = 204, message = "saeid response", response = Saeid.class),
      @ApiResponse(code = 404, message = "saeid response", response = Saeid.class),
      @ApiResponse(code = 500, message = "saeid response", response = Saeid.class) })
  @RequestMapping(value = "/saeids",
      produces = { "application/json" },
      consumes = { "application/json" },
      method = RequestMethod.POST)
  ResponseEntity<Saeid> postSaeid(@ApiParam(value = ""  ) @RequestBody Saeid saeid);
            @ApiOperation(value = "", notes = "Patchs all saeids from the system that the user has access to", response = Saeid.class, responseContainer = "List", tags={ "Saeid", })
  @ApiResponses(value = {
      @ApiResponse(code = 204, message = "saeid response", response = Saeid.class),
      @ApiResponse(code = 404, message = "saeid response", response = Saeid.class),
      @ApiResponse(code = 500, message = "saeid response", response = Saeid.class) })
  @RequestMapping(value = "/saeids/{customerId}",
      produces = { "application/json" },
      consumes = { "application/json" },
      method = RequestMethod.PATCH)
  ResponseEntity<Saeid> patchSaeid(@ApiParam(value = "Path Parameter",required=true) @PathVariable("customerId") String customerId, @ApiParam(value = ""  )  @Valid @RequestBody Patchsaeid saeids);
          @ApiOperation(value = "", notes = "Deletes all saeids from the system that the user has access to", response = Saeid.class, responseContainer = "List", tags={ "Saeid", })
  @ApiResponses(value = {
      @ApiResponse(code = 204, message = "saeid response", response = Saeid.class),
      @ApiResponse(code = 404, message = "saeid response", response = Saeid.class),
      @ApiResponse(code = 500, message = "saeid response", response = Saeid.class) })
  @RequestMapping(value = "/saeids/{customerId}",
      produces = { "application/json" },
      method = RequestMethod.DELETE)
  ResponseEntity<Saeid> deleteSaeid(@ApiParam(value = "Path Parameter",required=true) @PathVariable("customerId") String customerId);
          }
