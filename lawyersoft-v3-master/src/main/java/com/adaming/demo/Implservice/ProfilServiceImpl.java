package com.adaming.demo.Implservice;

import java.util.List;
import java.util.Date;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import com.adaming.demo.service.*;


@Service
public class ProfilServiceImpl implements IProfilService {

	@Autowired
    ProfilRepository repository;
	
	@Override
	public Profil save(Profil profil) {

		return repository.save(profil);
	}

	@Override
	public void delete(Long profilid) {
       
		if(repository.existsById(profilid)) /*exists(objet)*/

		repository.deleteById(profilid);		
		else 
			System.out.print("inconnus");
	}

	@Override
	public List<Profil> findAll() {

		return repository.findAll();		

	}

	@Override
	public Profil findById(Long profilid) {
		if(repository.existsById(profilid)) /*exists(objet)*/

		return repository.findById(profilid).get();
		else 
			return null;

	}

	@Override
	public Profil update(Profil profil) {
		
		if(repository.existsById(profil.getIdProfil())) /*exists(objet)*/

		return repository.save(profil);
		else 
			return null;

	}

	@Override
	public Profil findByName(String name) {
		// TODO Auto-generated method stub
		return repository.findByNameProfil(name);
	}

	
    
}



