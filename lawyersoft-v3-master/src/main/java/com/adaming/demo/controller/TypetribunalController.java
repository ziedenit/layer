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
@RequestMapping(value="/typetribunal")
public class TypetribunalController {
	
	    @Autowired
	    private ITypeTribunalService tribunalService;
	    
	     
	    @RequestMapping(value="/gettypetribunal", method=RequestMethod.GET )
	    public List<TypeTribunal> findAll(){
	    
	        return tribunalService.findAll();
	    }
	    
	    @RequestMapping(value="/addtypetribunal", method=RequestMethod.POST )
	    public TypeTribunal save(@RequestBody TypeTribunal typetribunal){
	    	
	    	return tribunalService.save(typetribunal);
	
	    }  
	    
	    @RequestMapping(value="/deletetypetribunal/{typetribunalid}", method=RequestMethod.DELETE )
	    public void delete(@PathVariable("typetribunalid") long typetribunalid)
	    {
	    	
	    	tribunalService.delete(typetribunalid);

        }  
	    
	    @RequestMapping(value="/updatetypetribunal", method=RequestMethod.PUT )
	    public TypeTribunal update(@RequestBody TypeTribunal typetribunal){
	    	
	    	return tribunalService.update(typetribunal);
	
	    }  
	    
	    
	    @RequestMapping(value="/findbyidtypetribunal/{typetribunalid}", method=RequestMethod.GET )
	    public TypeTribunal findbyid(@PathVariable("typetribunalid") long typetribunalid){
	    	
	    	return tribunalService.findById(typetribunalid);
	
	    } 
	    
	    


}
