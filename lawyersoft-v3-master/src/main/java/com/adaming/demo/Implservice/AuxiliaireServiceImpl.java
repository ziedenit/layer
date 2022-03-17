package com.adaming.demo.Implservice;

import java.util.List;
import java.util.Date;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import com.adaming.demo.service.*;


@Service
public class AuxiliaireServiceImpl implements IAuxiliaireService {

	@Autowired
    AuxiliaireRepository repository;
	
	@Override
	public Auxiliaire save(Auxiliaire auxiliaire) {

		return repository.save(auxiliaire);
	}

	@Override
	public void delete(Long auxiliaireid) {
       
		if(repository.existsById(auxiliaireid)) /*exists(objet)*/

		repository.deleteById(auxiliaireid);		
		else 
			System.out.print("inconnus");
	}

	@Override
	public List<Auxiliaire> findAll() {

		return repository.findAll();		

	}

	@Override
	public Auxiliaire findById(Long auxiliaireid) {
		if(repository.existsById(auxiliaireid)) /*exists(objet)*/

		return repository.findById(auxiliaireid).get();
		else 
			return null;

	}

	@Override
	public Auxiliaire update(Auxiliaire auxiliaire) {
		
		if(repository.existsById(auxiliaire.getAuxiliaireId())) /*exists(objet)*/

		return repository.save(auxiliaire);
		else 
			return null;

	}

	
    
}



