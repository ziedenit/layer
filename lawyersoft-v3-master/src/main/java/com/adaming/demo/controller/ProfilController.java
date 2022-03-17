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
@RequestMapping(value="/profil")
public class ProfilController {
	
	    @Autowired
	    private IProfilService profilService;
	    
	     
	    @RequestMapping(value="/getprofil", method=RequestMethod.GET )
	    public List<Profil> findAll(){
	    
	        return profilService.findAll();
	    }
	    
	    @RequestMapping(value="/addprofil", method=RequestMethod.POST )
	    public Profil save(@RequestBody Profil profil){
	    	
	    	return profilService.save(profil);
	
	    }  
	    
	    @RequestMapping(value="/deleteprofil/{profilid}", method=RequestMethod.DELETE )
	    public void delete(@PathVariable("profilid") long profilid)
	    {
	    	
	    	profilService.delete(profilid);

        }  
	    
	    @RequestMapping(value="/updateprofil", method=RequestMethod.PUT )
	    public Profil update(@RequestBody Profil profil){
	    	
	    	return profilService.update(profil);
	
	    }  
	    
	    
	    @RequestMapping(value="/findbyidprofil/{profilid}", method=RequestMethod.GET )
	    public Profil findbyid(@PathVariable("profilid") long profilid){
	    	
	    	return profilService.findById(profilid);
	
	    } 
	    
	   
}
