package com.adaming.demo.service;

import java.util.List;

import com.adaming.demo.entities.*;

public interface IAuxiliaireService {
	

	 Auxiliaire save(Auxiliaire auxiliaire);
	 
	 void delete(Long idauxiliaire);
	 
	 List<Auxiliaire> findAll();
	 
	 Auxiliaire findById(Long idauxiliaire);
	 
	 Auxiliaire update(Auxiliaire auxiliaire);
}
