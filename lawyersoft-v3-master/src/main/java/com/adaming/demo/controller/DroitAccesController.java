package com.adaming.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.adaming.demo.entities.DroitAcces;
import com.adaming.demo.entities.Profil;
import com.adaming.demo.service.IDroitAccesService;
import com.adaming.demo.service.IProfilService;

@RestController
@CrossOrigin
@RequestMapping(value="/droitacces")
public class DroitAccesController {
	@Autowired
	IDroitAccesService droitAccesService;
	@Autowired
	IProfilService profilService;
	@RequestMapping(value="/addAllDroitAcces/{idProfil}", method=RequestMethod.POST )
    public List<DroitAcces> saveAllDroitAcces(@RequestBody List<DroitAcces> droitsAcces,@PathVariable("idProfil") Long idProfil){
    	Profil profile=profilService.findById(idProfil);
		droitsAcces.forEach(droit->{
    		droit.setProfile(profile);
    	});
    	return droitAccesService.addAllDroitAcces(droitsAcces);

    }  
	@RequestMapping(value="/addDroitAcces/{idProfil}", method=RequestMethod.POST )
    public DroitAcces saveDroitAcces(@RequestBody DroitAcces droitAcces,@PathVariable("idProfil") Long idProfil){
    	Profil profile=profilService.findById(idProfil);
		droitAcces.setProfile(profile);
    	
    	return droitAccesService.addDroitAcces(droitAcces);

    }  
	@RequestMapping(value="/updateDroitAcces/{idProfil}", method=RequestMethod.PUT )
    public DroitAcces updateDroitAcces(@RequestBody DroitAcces droitAcces,@PathVariable("idProfil") Long idProfil){
    	Profil profile=profilService.findById(idProfil);
		droitAcces.setProfile(profile);
    	
    	return droitAccesService.updateDroitAcces(droitAcces);

    }  
	@RequestMapping(value="/deleteDroitAcces/{idDroit}", method=RequestMethod.DELETE )
    public void deleteDroitAcces(@PathVariable("idDroit") Long idDroit){
    	 droitAccesService.deleteDroitAcces(idDroit);
    }  
	@RequestMapping(value="/getAllDroitAccesByProfilId/{idProfil}", method=RequestMethod.GET )
    public List<DroitAcces> getAllDroitAccesByProfilId(@PathVariable("idProfil") Long idProfil){
    	
    	return droitAccesService.getListDroitAccesByProfilId(idProfil);

    }

}
