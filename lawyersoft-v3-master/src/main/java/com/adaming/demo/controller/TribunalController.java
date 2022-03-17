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
@RequestMapping(value="/tribunal")
public class TribunalController {
	@Autowired
    private ITribunalService tribunalService;
    
     
    @RequestMapping(value="/gettribunal", method=RequestMethod.GET )
    public List<Tribunal> findAll(){
    
        return tribunalService.findAll();
    }
    
    @RequestMapping(value="/addtribunal", method=RequestMethod.POST )
    public Tribunal save(@RequestBody Tribunal tribunal){
    	
    	return tribunalService.save(tribunal);

    }  
    
    @RequestMapping(value="/deletetribunal/{tribunalid}", method=RequestMethod.DELETE )
    public void delete(@PathVariable("tribunalid") long tribunalid)
    {
    	
    	tribunalService.delete(tribunalid);
    	
    }  
    
    @RequestMapping(value="/updatetribunal", method=RequestMethod.PUT )
    public Tribunal update(@RequestBody Tribunal tribunal){
    	
    	return tribunalService.update(tribunal);
    }  
    
    
    @RequestMapping(value="/findbyidtribunal/{tribunalid}", method=RequestMethod.GET )
    public Tribunal findbyid(@PathVariable("tribunalid") long tribunalid){
    	
    	return tribunalService.findById(tribunalid);

    } 
    
	

}
