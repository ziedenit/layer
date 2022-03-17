package com.adaming.demo.service;

import java.util.List;

import com.adaming.demo.entities.*;

public interface ITypeAuxiliaireService {
	
	
	 TypeAuxiliaire save(TypeAuxiliaire typeauxiliaire);
	 
	 void delete(Long typeauxiliaireid);
	 
	 List<TypeAuxiliaire> findAll();
	 
	 TypeAuxiliaire findById(Long typeauxiliaireid);
	 
	 TypeAuxiliaire update(TypeAuxiliaire typeauxiliaire);

}
