package com.adaming.demo.Implservice;

import java.util.List;
import java.util.Date;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import com.adaming.demo.service.*;


@Service
public class AffaireServiceImpl implements IAffaireService {

	
	@Autowired
    AffaireRepository repository;
	
	@Override
	public Affaire save(Affaire affaire) {
		
		return repository.save(affaire);
	}

	@Override
	public void delete(Long idaffaire) {

		if(repository.existsById(idaffaire)) /*exists(objet)*/
		repository.deleteById(idaffaire);
		else
			System.out.print("inconnus");		
	}

	@Override
	public List<Affaire> findAll() {
		
		return repository.findAll();		

	}

	@Override
	public Affaire findById(Long idaffaire) {

		if(repository.existsById(idaffaire)) /*exists(objet)*/

		return repository.findById(idaffaire).get();
		else 
			return null;
	}

	@Override
	public Affaire update(Affaire affaire) {
		 {
				if(repository.existsById(affaire.getAffaireId())) /*exists(objet)*/
				return repository.save(affaire);
				else
					return null;

			}
	}

	
	@Override
	public List<Affaire> findAllByEtat(String etat){
		
		return repository.findAllByEtat(etat);		

	}

	
    
  }



