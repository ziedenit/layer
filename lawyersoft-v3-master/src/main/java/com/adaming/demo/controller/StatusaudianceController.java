package com.adaming.demo.controller;

import java.security.Principal;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
 
import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import com.adaming.demo.Implservice.*;
import com.adaming.demo.service.*;


@RestController
@CrossOrigin
@RequestMapping(value="/statusadiance")
public class StatusaudianceController {
	
	    @Autowired
	    private IStatusaudianceService statusaudianceService;
	    
	     
	   @RequestMapping(value="/getstatus", method=RequestMethod.GET )
	    public List<Statusaudiance> findAll(){
	    
	        return statusaudianceService.findAll();
	    }
	    
	    @RequestMapping(value="/addstatus", method=RequestMethod.POST )
	    public Statusaudiance save(@RequestBody Statusaudiance statusaudiance){
	    	
	    	return statusaudianceService.save(statusaudiance);
	
	    }  
	    
	    @RequestMapping(value="/deletestatus/{statusaudianceid}", method=RequestMethod.DELETE )
	    public void delete(@PathVariable("statusaudianceid") long statusaudianceid)
	    {
	    	
	    	statusaudianceService.delete(statusaudianceid);

        }  
	    
	    @RequestMapping(value="/updatestatus", method=RequestMethod.PUT )
	    public Statusaudiance update(@RequestBody Statusaudiance statusaudiance){
	    	
	    	return statusaudianceService.update(statusaudiance);
	
	    }  
	    
	    
	    @RequestMapping(value="/findbyidstatus/{statusaudianceid}", method=RequestMethod.GET )
	    public Statusaudiance findbyid(@PathVariable("statusaudianceid") long statusaudianceid){
	    	
	    	return statusaudianceService.findById(statusaudianceid);
	
	    } 
	    
	    


}
