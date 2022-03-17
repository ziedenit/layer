package com.adaming.demo.Implservice;

import java.util.List;
import java.util.Date;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Service;

import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import com.adaming.demo.service.*;


@Service
public class TypeTribunalServiceImpl implements ITypeTribunalService {

	@Autowired
    TypeTribunalRepository repository;

	@Override
	public TypeTribunal save(TypeTribunal typetribunal) {
		
		/*if(repository.exists(example))*/ /*exists(objet)*/

		return repository.save(typetribunal);
	
	}

	@Override
	public void delete(Long typetribunalid) {
		if(repository.existsById(typetribunalid))
		repository.deleteById(typetribunalid);
		else 
			System.out.print("inconnus");
		
	}

	@Override
	public List<TypeTribunal> findAll() {
		
		return repository.findAll();		

	}

	@Override
	public TypeTribunal findById(Long typetribunalid) {
	
		if(repository.existsById(typetribunalid))
		return repository.findById(typetribunalid).get();
		else 
			return null;

	}

	@Override
	public TypeTribunal update(TypeTribunal typetribunal) {
	
		if(repository.existsById(typetribunal.getTypetribunalId())) /*exists(objet)*/

		return repository.save(typetribunal);
		else 
			return null;
	}

  }



