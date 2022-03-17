package com.adaming.demo.Implservice;

import java.util.List;
import java.util.Date;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import com.adaming.demo.service.*;


@Service
public class AudianceServiceImpl implements IAudianceService {

	@Autowired
	AudianceRepository repository;
	
	@Override
	public Audiance save(Audiance audiance) {

		return repository.save(audiance);
	}

	@Override
	public void delete(Long audianceid) {
       
		if(repository.existsById(audianceid)) /*exists(objet)*/

		repository.deleteById(audianceid);		
		else 
			System.out.print("inconnus");
	}

	@Override
	public List<Audiance> findAll() {

		return repository.findAll();		

	}

	@Override
	public Audiance findById(Long audianceid) {
		if(repository.existsById(audianceid)) /*exists(objet)*/

		return repository.findById(audianceid).get();
		else 
			return null;

	}

	@Override
	public Audiance update(Audiance audiance) {
		
		if(repository.existsById(audiance.getIdAudiance())) /*exists(objet)*/

		return repository.save(audiance);
		else 
			return null;

	}

	@Override
	public List<Audiance> findAllByPhaseId(Long id) {
	
		return repository.findAllByPhaseIdPhaseId(id);
	}

	
    
}



