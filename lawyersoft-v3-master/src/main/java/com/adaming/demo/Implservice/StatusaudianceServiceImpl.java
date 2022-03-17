package com.adaming.demo.Implservice;

import java.util.List;
import java.util.Date;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import com.adaming.demo.service.*;


@Service
public class StatusaudianceServiceImpl implements IStatusaudianceService {

	@Autowired
	StatusaudianceRepository repository;

	@Override
	public Statusaudiance save(Statusaudiance statusaudiance) {
		
		return repository.save(statusaudiance);

	}

	@Override
	public void delete(Long statusaudianceid) {
	
		if(repository.existsById(statusaudianceid)) /*exists(objet)*/
		repository.deleteById(statusaudianceid);	
		else 
			System.out.print("inconnnus");

		
	}

	@Override
	public List<Statusaudiance> findAll() {
		return repository.findAll();		

	}

	@Override
	public Statusaudiance findById(Long statusaudianceid) {
		
		if(repository.existsById(statusaudianceid))

		return repository.findById(statusaudianceid).get();
		else 
			return null;

	}

	@Override
	public Statusaudiance update(Statusaudiance statusaudiance) {
		
		if(repository.existsById(statusaudiance.getStatusId())) /*exists(objet)*/
		return repository.save(statusaudiance);
		else 
			return null;

	}
	   
}



