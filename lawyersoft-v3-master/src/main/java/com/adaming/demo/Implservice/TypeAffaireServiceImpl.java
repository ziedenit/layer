package com.adaming.demo.Implservice;

import java.util.List;
import java.util.Date;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import com.adaming.demo.service.*;


@Service
public class TypeAffaireServiceImpl implements ITypeAffaireService {

	@Autowired
    TypeAffaireRepository repository;

	@Override
	public TypeAffaire save(TypeAffaire typeaffaire) {
		
		return repository.save(typeaffaire);

	}

	@Override
	public void delete(Long typeaffaireid) {

		if(repository.existsById(typeaffaireid)) /*exists(objet)*/

		repository.deleteById(typeaffaireid);	
		else 
			System.out.print("inconnus");

	}

	@Override
	public List<TypeAffaire> findAll() {
		
		return repository.findAll();	
	}

	@Override
	public TypeAffaire findById(Long typeaffaireid) {
		
		if(repository.existsById(typeaffaireid)) /*exists(objet)*/

		return repository.findById(typeaffaireid).get();
		else return null;

	}

	@Override
	public TypeAffaire update(TypeAffaire typeaffaire) {
		
		if(repository.existsById(typeaffaire.getTypeaffaireId())) /*exists(objet)*/
		return repository.save(typeaffaire);
		else 
			return null;
		
		}
	
	
    
}



