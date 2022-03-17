package com.adaming.demo.service;

import java.util.List;

import com.adaming.demo.entities.*;

public interface IProfilService {
	
	 Profil save(Profil profil);
	 
	 void delete(Long idprofil);
	 
	 List<Profil> findAll();
	 
	 Profil findById(Long idprofil);
	 
	 Profil update(Profil profil);
	  
	 Profil findByName(String name);
}
