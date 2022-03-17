package com.adaming.demo.Implservice;

import java.util.List;
import java.util.Date;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import com.adaming.demo.service.*;


@Service
public class TacheServiceImpl implements ITacheService {

	@Autowired
    TacheRepository repository;

	@Override
	public Tache save(Tache tache) {
		
		return repository.save(tache);

	}

	@Override
	public void delete(Long tacheid) {
		if(repository.existsById(tacheid)) /*exists(objet)*/
		repository.deleteById(tacheid);
		else 
			System.out.print("inconnus");
		
	}

	@Override
	public List<Tache> findAll() {
		
		return repository.findAll();

	}

	@Override
	public Tache findById(Long tacheid) {
	
		if(repository.existsById(tacheid)) /*exists(objet)*/
		return repository.findById(tacheid).get();
		else 
			return null;
	}

	@Override
	public Tache update(Tache tache) {
		
		if(repository.existsById(tache.getIdTache())) /*exists(objet)*/
		return repository.save(tache);
		else 
		   return null;

	}

	@Override
	public List<Tache> findAllByPhaseId(Long id) {
		
		return repository.findAllByPhaseIdPhaseId(id);
	}

	
}



