package com.adaming.demo.service;

import java.util.Date;
import java.util.List;

import org.springframework.data.repository.query.Param;

import com.adaming.demo.entities.*;

public interface IAffaireService {

	Affaire save(Affaire affaire);
	 
	 void delete(Long idaffaire);
	 
	 List<Affaire> findAll();
	 
	 Affaire findById(Long idaffaire);
	 
	 Affaire update(Affaire affaire);
	 
	 List<Affaire> findAllByEtat(String etat);
	 
	 
}
