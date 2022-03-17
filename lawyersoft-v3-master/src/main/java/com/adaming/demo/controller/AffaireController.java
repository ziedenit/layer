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
import com.adaming.demo.dto.AffaireDto;
import com.adaming.demo.service.*;


@RestController
@RequestMapping(value="/affaire")
public class AffaireController {
	
	@Autowired
    private IAffaireService affaireService;
	@Autowired
    private IPhaseService   phaseService;
	@Autowired
    private IHonnoraireService honnoraireService;

    
	
	@RequestMapping(value="/getaffairebyettat/{etat}", method=RequestMethod.GET )
	public List<Affaire> findAllByEtat(@PathVariable("etat")String etat){
	    
	    return affaireService.findAllByEtat(etat);
	}
     
    @RequestMapping(value="/getaffaire", method=RequestMethod.GET )
    public List<Affaire> findAll(){
    
        return affaireService.findAll();
    }
    
    @RequestMapping(value="/addaffaire", method=RequestMethod.POST )
    public Affaire save(@RequestBody AffaireDto affairedto){
    	//System.out.println(affairedto.getAffaire());
    	//System.out.println(affairedto.getPhase());
    	Affaire affaireSaved=affaireService.save(affairedto.getAffaire());
    	System.out.println(affaireSaved);

    	affairedto.getPhase().setAffaireId(affaireSaved);
    	phaseService.save(affairedto.getPhase());
    	System.out.println(affairedto.getPhase());
    	
    	
    	Honnoraire honnoraire=new Honnoraire();
    	honnoraire.setAffaireId(affaireSaved);
    	honnoraire.setDateHonnoraire(new Date());
    	honnoraire.setMontant(0);
    	honnoraire.setTitre("honnoraire Total");
    	//affairedto.getHonnoraire().setAffaireId(affaireSaved);
    	honnoraireService.save(honnoraire);
    	//System.out.println(affairedto.getHonnoraire());

    	
    	return affaireSaved;

    }  
    
    @RequestMapping(value="/deleteaffaire/{affaireid}", method=RequestMethod.DELETE )
    public void delete(@PathVariable("affaireid") long affaireid)
    {
    	
    	affaireService.delete(affaireid);
    	
    }  
    @CrossOrigin("*")
    @RequestMapping(value="/updateaffaire", method=RequestMethod.PUT)
    public Affaire update(@RequestBody Affaire affaire){
    	
    	return affaireService.update(affaire);
    }  
    
    
    @RequestMapping(value="/findbyidaffaire/{affaireid}", method=RequestMethod.GET )
    public Affaire findbyid(@PathVariable("affaireid") long affaireid){
    	
    	return affaireService.findById(affaireid);

    } 
    
}
