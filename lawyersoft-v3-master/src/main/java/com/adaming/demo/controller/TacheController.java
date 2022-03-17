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
@RequestMapping(value="/tache")
public class TacheController {
	
	    @Autowired
	    private ITacheService tacheService;
	    
	     
	    
	    @RequestMapping(value="/gettache", method=RequestMethod.GET )
	    public List<Tache> findAll(){
	    
	        return tacheService.findAll();
	    }
	    
	    @RequestMapping(value="/addtache", method=RequestMethod.POST )
	    public Tache save(@RequestBody Tache tache){
	    	tache.setEtat("En cours");

	    	return tacheService.save(tache);
	
	    }  
	    
	    @RequestMapping(value="/deletetache/{tacheid}", method=RequestMethod.DELETE )
	    public void delete(@PathVariable("tacheid") Long tacheid)
	    {
	    	
	    	tacheService.delete(tacheid);

        }  
	    
	    @RequestMapping(value="/updatetache", method=RequestMethod.PUT )
	    public Tache update(@RequestBody Tache tache){
	    	
	    	return tacheService.update(tache);
	
	    }  
	    
	    
	    @RequestMapping(value="/findbyidtache/{tacheid}", method=RequestMethod.GET )
	    public Tache findbyid(@PathVariable("tacheid") Long tacheid){
	    	
	    	return tacheService.findById(tacheid);
	
	    } 
	    
	    @RequestMapping(value = "/findbyidphase/{phaseid}", method = RequestMethod.GET)
		public List<Tache> findAllByPhaseId(@PathVariable("phaseid") Long id) {

			return tacheService.findAllByPhaseId(id);

		}

}
