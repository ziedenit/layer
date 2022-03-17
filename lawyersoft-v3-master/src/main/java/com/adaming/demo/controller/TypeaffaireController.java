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
@RequestMapping(value="/typeaffaire")
public class TypeaffaireController {
	
	    @Autowired
	    private ITypeAffaireService affaireService;
	    
	     
	    @RequestMapping(value="/gettypeaffaire", method=RequestMethod.GET )
	    public List<TypeAffaire> findAll(){
	    
	        return affaireService.findAll();
	    }
	    
	    @RequestMapping(value="/addtypeaffaire", method=RequestMethod.POST )
	    public TypeAffaire save(@RequestBody TypeAffaire typeaffaire){
	    	
	    	return affaireService.save(typeaffaire);
	
	    }  
	    
	    @RequestMapping(value="/deletetypeaffaire/{typeaffaireid}", method=RequestMethod.DELETE )
	    public void delete(@PathVariable("typeaffaireid") long typeaffaireid)
	    {
	    	
	    	affaireService.delete(typeaffaireid);

        }  
	    
	    @RequestMapping(value="/updatetypeaffaire", method=RequestMethod.PUT )
	    public TypeAffaire update(@RequestBody TypeAffaire typeaffaire){
	    	
	    	return affaireService.update(typeaffaire);
	
	    }  
	    
	    
	    @RequestMapping(value="/findbyidtypeaffaire/{typeaffaireid}", method=RequestMethod.GET )
	    public TypeAffaire findbyid(@PathVariable("typeaffaireid") long typeaffaireid){
	    	
	    	return affaireService.findById(typeaffaireid);
	
	    } 
	    
	    

}
