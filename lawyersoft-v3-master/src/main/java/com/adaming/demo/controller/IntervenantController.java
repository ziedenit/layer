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
@RequestMapping(value="/intervenant")
public class IntervenantController {
	
	@Autowired
    private IIntervenantService intervenantService;
    
     
    @RequestMapping(value="/getintervenant", method=RequestMethod.GET )
    public List<Intervenant> findAll(){
    
        return intervenantService.findAll();
    }
    
    @RequestMapping(value="/addintervenant", method=RequestMethod.POST )
    public Intervenant save(@RequestBody Intervenant intervenant){
    	
    	return intervenantService.save(intervenant);

    }  
    
    @RequestMapping(value="/deleteintervenant/{intervenantid}", method=RequestMethod.DELETE )
    public void delete(@PathVariable("intervenantid") long intervenantid)
    {
    	
    	intervenantService.delete(intervenantid);
    	
    }  
    
    @RequestMapping(value="/updateintervenant", method=RequestMethod.PUT )
    public Intervenant update(@RequestBody Intervenant intervenant){
    	
    	return intervenantService.update(intervenant);

    }  
    
    
    @RequestMapping(value="/findbyidintervenant/{intervenantid}", method=RequestMethod.GET )
    public Intervenant findbyid(@PathVariable("intervenantid") long intervenantid){
    	
    	return intervenantService.findById(intervenantid);

    } 
    
	
}
