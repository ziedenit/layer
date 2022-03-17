package com.adaming.demo.controller;

import java.security.Principal;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
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
@RequestMapping(value="/dossier")
public class DossierController {
	
	    @Autowired
	    private IDossierService dossierService;
	    
	     
	    @RequestMapping(value="/getdossier", method=RequestMethod.GET )
	    public List<Dossier> findAll(){
	    
	        return dossierService.findAll();
	    }
	    
	    @RequestMapping(value="/adddossier", method=RequestMethod.POST )
	    public Dossier save(@RequestBody Dossier dossier){
	    	
	    	return dossierService.save(dossier);
	
	    }  
	    
	    @RequestMapping(value="/deletedossier/{dossierid}", method=RequestMethod.DELETE )
	    public void delete(@PathVariable("dossierid") Long dossierid)
	    {
	    	
	    	dossierService.delete(dossierid);

        }  
	    
	    @RequestMapping(value="/updatedossier", method=RequestMethod.PUT )
	    public Dossier update(@RequestBody Dossier dossier){
	    	
	    	return dossierService.update(dossier);
	
	    }  
	    
	    
	    @RequestMapping(value="/findbyiddossier/{dossierid}", method=RequestMethod.GET )
	    public Dossier findbyid(@PathVariable("dossierid") Long dossierid){
	    	
	    	return dossierService.findById(dossierid);
	
	    } 
	    

	    @RequestMapping(value="/findbyidaffaire/{affaireid}", method=RequestMethod.GET )
		public List<Dossier> findAllByAffaire(@PathVariable("affaireid") Long id){
	    	
	    	return dossierService.findAllByAffaire(id);
	
	    } 


}
