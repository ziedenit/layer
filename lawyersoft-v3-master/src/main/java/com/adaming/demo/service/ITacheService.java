package com.adaming.demo.service;

import java.util.List;

import com.adaming.demo.entities.*;

public interface ITacheService {
	
	 Tache save(Tache tache);
	 
	 void delete(Long tacheid);
	 
	 List<Tache> findAll();
	 
	 Tache findById(Long tacheid);
	 
	 Tache update(Tache tache);
	 
     List<Tache> findAllByPhaseId(Long id);

	
}
