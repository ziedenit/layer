package com.adaming.demo.Implservice;

import java.util.List;
import java.util.Date;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import com.adaming.demo.service.*;


@Service
public class DossierServiceImpl implements IDossierService {

	@Autowired
	DossierRepository repository;
	
	@Override
	public Dossier save(Dossier dossier) {

		return repository.save(dossier);
	}

	@Override
	public void delete(Long dossierid) {
       
		if(repository.existsById(dossierid)) /*exists(objet)*/

		repository.deleteById(dossierid);		
		else 
			System.out.print("inconnus");
	}

	@Override
	public List<Dossier> findAll() {

		return repository.findAll();		

	}

	@Override
	public Dossier findById(Long dossierid) {
		if(repository.existsById(dossierid)) /*exists(objet)*/

		return repository.findById(dossierid).get();
		else 
			return null;

	}

	@Override
	public Dossier update(Dossier dossier) {
		
		if(repository.existsById(dossier.getDossierId())) /*exists(objet)*/

		return repository.save(dossier);
		else 
			return null;

	}
	

	@Override
	public List<Dossier> findAllByAffaire(Long id) {
		
		return repository.findAllByAffaire(id);
		
	}

}



