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
@RequestMapping(value="/typeintervenant")
public class TypeintervenantController {
	
	    @Autowired
	    private ITypeIntervenantService intervenantService;
	    
	     
	    
	    @RequestMapping(value="/gettypeinterv", method=RequestMethod.GET )
	    public List<TypeIntervenant> findAll(){
	    
	        return intervenantService.findAll();
	    }
	    
	    @RequestMapping(value="/addtypeinterv", method=RequestMethod.POST )
	    public TypeIntervenant save(@RequestBody TypeIntervenant typeintervenant){
	    	
	    	return intervenantService.save(typeintervenant);
	
	    }  
	    
	    @RequestMapping(value="/deletetypeinterv/{typeintervenantid}", method=RequestMethod.DELETE )
	    public void delete(@PathVariable("typeintervenantid") long typeintervenantid)
	    {
	    	
	    	intervenantService.delete(typeintervenantid);

        }  
	    
	    @RequestMapping(value="/updatetypeinterv", method=RequestMethod.PUT )
	    public TypeIntervenant update(@RequestBody TypeIntervenant typeintervenant){
	    	
	    	return intervenantService.update(typeintervenant);
	
	    }  
	    
	    
	    @RequestMapping(value="/findbyidtypeinterv/{typeintervenantid}", method=RequestMethod.GET )
	    public TypeIntervenant findbyid(@PathVariable("typeintervenantid") long typeintervenantid){
	    	
	    	return intervenantService.findById(typeintervenantid);
	
	    } 


}
