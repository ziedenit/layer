package com.adaming.demo.Implservice;

import java.util.List;
import java.util.Date;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import com.adaming.demo.service.*;


@Service
public class TypeAuxiliaireServiceImpl implements ITypeAuxiliaireService {

	@Autowired
    TypeAuxiliaireRepository repository;
	
	@Override
	public TypeAuxiliaire save(TypeAuxiliaire typeauxiliaire) {

		return repository.save(typeauxiliaire);
	}

	@Override
	public void delete(Long typeauxiliaireid) {
       
		if(repository.existsById(typeauxiliaireid)) /*exists(objet)*/

		repository.deleteById(typeauxiliaireid);		
		else 
			System.out.print("inconnus");
	}

	@Override
	public List<TypeAuxiliaire> findAll() {

		return repository.findAll();		

	}

	@Override
	public TypeAuxiliaire findById(Long typeauxiliaireid) {
		if(repository.existsById(typeauxiliaireid)) /*exists(objet)*/

		return repository.findById(typeauxiliaireid).get();
		else 
			return null;

	}

	@Override
	public TypeAuxiliaire update(TypeAuxiliaire typeauxiliaire) {
		
		if(repository.existsById(typeauxiliaire.getTypeauxiliaireId())) /*exists(objet)*/

		return repository.save(typeauxiliaire);
		else 
			return null;

	}

	
    
}



