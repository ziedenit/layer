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
@RequestMapping(value="/consultation")
public class ConsultationController {
	
	@Autowired
    private IConsultationService consultationService;
	@RequestMapping(value="/getconsultation/{type}", method=RequestMethod.GET )
    public List<Consultation> findAllByType(@PathVariable("type") String type){
    
        return consultationService.findAllByType(type);
    }
     
    @RequestMapping(value="/getconsultation", method=RequestMethod.GET )
    public List<Consultation> findAll(){
    
        return consultationService.findAll();
    }
    
    @RequestMapping(value="/addconsultation", method=RequestMethod.POST )
    public Consultation save(@RequestBody Consultation consultation){
    	consultation.setEtat("En cours");

    	return consultationService.save(consultation);

    }  
    
    @RequestMapping(value="/deleteconsultation/{consultationid}", method=RequestMethod.DELETE )
    public void delete(@PathVariable("consultationid") long consultationid)
    {
    	
    	consultationService.delete(consultationid);
    	
    }  
    
    @RequestMapping(value="/updateconsultation", method=RequestMethod.PUT )
    public Consultation update(@RequestBody Consultation consultation){
    	
    	return consultationService.update(consultation);

    }  
    
    
    @RequestMapping(value="/findbyidconsultation/{consultationid}", method=RequestMethod.GET )
    public Consultation findbyid(@PathVariable("consultationid") long consultationid){
    	
    	return consultationService.findById(consultationid);

    } 
    
	

}
