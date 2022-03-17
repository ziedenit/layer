package com.adaming.demo.service;

import java.util.List;

import org.springframework.data.repository.query.Param;

import com.adaming.demo.entities.*;

public interface IDossierService {
	

	 Dossier save(Dossier dossier);
	 
	 void delete(Long dossierid);
	 
	 List<Dossier> findAll();
	 
	 Dossier findById(Long dossierid);
	 
	 Dossier update(Dossier dossier);
	 
     List<Dossier> findAllByAffaire(Long id);

}
