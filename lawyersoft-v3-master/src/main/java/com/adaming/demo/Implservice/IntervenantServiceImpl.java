package com.adaming.demo.Implservice;

import java.util.List;
import java.util.Date;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import com.adaming.demo.service.*;


@Service
public class IntervenantServiceImpl implements IIntervenantService {

	@Autowired
    IntervenantRepository repository;

	@Override
	public Intervenant save(Intervenant intervenant) {
	
		/*	if(repository.exists(tribunal))*//*exists(objet)*/
		return repository.save(intervenant);
	}

	@Override
	public void delete(Long intervenantid) {


		if(repository.existsById(intervenantid)) /*exists(objet)*/
		repository.deleteById(intervenantid);
		else
			System.out.print("inconnus");
	}

	@Override
	public List<Intervenant> findAll() {
		
		return repository.findAll();		

	}

	@Override
	public Intervenant findById(Long intervenantid) {
		

		if(repository.existsById(intervenantid)) /*exists(objet)*/

		return repository.findById(intervenantid).get();
		else 
			return null;

	}

	@Override
	public Intervenant update(Intervenant intervenant) {
		
		if(repository.existsById(intervenant.getIntervenantid())) /*exists(objet)*/
			return repository.save(intervenant);
			else
				return null;
	}

    
}



