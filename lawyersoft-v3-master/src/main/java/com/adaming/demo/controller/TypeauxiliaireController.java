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
@RequestMapping(value="/typeauxiliaire")
@CrossOrigin
public class TypeauxiliaireController {
	
	    @Autowired
	    private ITypeAuxiliaireService auxiliaireService;
	    
	     
	    @RequestMapping(value="/gettypeaux", method=RequestMethod.GET )
	    public List<TypeAuxiliaire> findAll(){
	    
	        return auxiliaireService.findAll();
	    }
	    
	    @RequestMapping(value="/addtypeaux", method=RequestMethod.POST )
	    public TypeAuxiliaire save(@RequestBody TypeAuxiliaire typeauxiliaire){
	    	
	    	return auxiliaireService.save(typeauxiliaire);
	
	    }  
	    
	    @RequestMapping(value="/deletetypeaux/{typeauxiliaireid}", method=RequestMethod.DELETE )
	    public void delete(@PathVariable("typeauxiliaireid") long typeauxiliaireid)
	    {
	    	
	    	auxiliaireService.delete(typeauxiliaireid);

        }  
	    
	    @RequestMapping(value="/updatetypeaux", method=RequestMethod.PUT )
	    public TypeAuxiliaire update(@RequestBody TypeAuxiliaire typeauxiliaire){
	    	
	    	return auxiliaireService.update(typeauxiliaire);
	
	    }  
	    
	    
	    @RequestMapping(value="/findbyidtypeaux/{typeauxiliaireid}", method=RequestMethod.GET )
	    public TypeAuxiliaire findbyid(@PathVariable("typeauxiliaireid") long typeauxiliaireid){
	    	
	    	return auxiliaireService.findById(typeauxiliaireid);
	
	    } 
	    
	    


}
