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
@RequestMapping(value="/auxiliaire")
@CrossOrigin
public class AuxiliaireController {
	
	    @Autowired
	    private IAuxiliaireService auxiliaireService;
	    
	     
	    @RequestMapping(value="/getauxiliaire", method=RequestMethod.GET )
	    public List<Auxiliaire> findAll(){
	    
	        return auxiliaireService.findAll();
	    }
	    
	    @RequestMapping(value="/addauxiliaire", method=RequestMethod.POST )
	    public Auxiliaire save(@RequestBody Auxiliaire auxiliaire){
	    	
	    	return auxiliaireService.save(auxiliaire);
	
	    }  
	    
	    @RequestMapping(value="/deleteauxiliaire/{auxiliaireid}", method=RequestMethod.DELETE )
	    public void delete(@PathVariable("auxiliaireid") long auxiliaireid)
	    {
	    	
	    	auxiliaireService.delete(auxiliaireid);

        }  
	    
	    @RequestMapping(value="/updateauxiliaire", method=RequestMethod.PUT )
	    public Auxiliaire update(@RequestBody Auxiliaire auxiliaire){
	    	
	    	return auxiliaireService.update(auxiliaire);
	
	    }  
	    
	    
	    @RequestMapping(value="/findbyidauxiliaire/{auxiliaireid}", method=RequestMethod.GET )
	    public Auxiliaire findbyid(@PathVariable("auxiliaireid") long auxiliaireid){
	    	
	    	return auxiliaireService.findById(auxiliaireid);
	
	    } 
	    
	    


}
