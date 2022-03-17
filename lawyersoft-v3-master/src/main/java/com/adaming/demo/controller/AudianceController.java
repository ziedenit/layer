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
@RequestMapping(value="/audiance")
public class AudianceController {
	
	    @Autowired
	    private IAudianceService audianceService;
	    
	     
	    
	    @RequestMapping(value="/getaudiance", method=RequestMethod.GET )
	    public List<Audiance> findAll(){
	    
	        return audianceService.findAll();
	    }
	    
	    @RequestMapping(value="/addaudiance", method=RequestMethod.POST )
	    public Audiance save(@RequestBody Audiance audiance){
	    	
	    	audiance.setEtat("En cours");
	    	return audianceService.save(audiance);
	
	    }  
	    
	    @RequestMapping(value="/deleteaudiance/{audianceid}", method=RequestMethod.DELETE )
	    public void delete(@PathVariable("audianceid") Long audianceid)
	    {
	    	
	    	audianceService.delete(audianceid);

        }  
	    
	    @RequestMapping(value="/updateaudiance", method=RequestMethod.PUT )
	    public Audiance update(@RequestBody Audiance audiance){
	    	
	    	return audianceService.update(audiance);
	
	    }  
	    
	    
	    @RequestMapping(value="/findbyidaudiance/{audianceid}", method=RequestMethod.GET )
	    public Audiance findbyid(@PathVariable("audianceid") Long audianceid){
	    	
	    	return audianceService.findById(audianceid);
	
	    } 
	    

		@RequestMapping(value = "/findbyidphase/{phaseid}", method = RequestMethod.GET)
		public List<Audiance> findAllByPhaseId(@PathVariable("phaseid") Long id) {

			return audianceService.findAllByPhaseId(id);

		}

}
