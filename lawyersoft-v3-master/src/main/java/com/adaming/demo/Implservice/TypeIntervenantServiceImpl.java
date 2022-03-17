package com.adaming.demo.Implservice;

import java.util.List;
import java.util.Date;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import com.adaming.demo.service.*;


@Service
public class TypeIntervenantServiceImpl implements ITypeIntervenantService {

	@Autowired
    TypeIntervenantRepository repository;

	@Override
	public TypeIntervenant save(TypeIntervenant typeintervenant) {
		return repository.save(typeintervenant);

}

	@Override
	public void delete(Long typeintervenantid) {
		
		if(repository.existsById(typeintervenantid)) /*exists(objet)*/

		repository.deleteById(typeintervenantid);
		else 
			System.out.print("inconnus");
	}
	
	@Override
	public List<TypeIntervenant> findAll() {
		return repository.findAll();
	}

	@Override
	public TypeIntervenant findById(Long typeintervenantid) {
		
		if(repository.existsById(typeintervenantid)) /*exists(objet)*/

		return repository.findById(typeintervenantid).get();
		else 
			return null;

	}

	@Override
	public TypeIntervenant update(TypeIntervenant typeintervenant) {
		
		if(repository.existsById(typeintervenant.getTypeintervenantId())) /*exists(objet)*/
		return repository.save(typeintervenant);
		else 
			return null;

	}
	

    
  }



