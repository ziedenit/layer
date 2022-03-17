package com.adaming.demo.service;

import java.util.List;

import com.adaming.demo.entities.*;

public interface ITypeAffaireService {
	
	
	 TypeAffaire save(TypeAffaire typeaffaire);
	 
	 void delete(Long typeaffaireid);
	 
	 List<TypeAffaire> findAll();
	 
	 TypeAffaire findById(Long typeaffaireid);
	 
	 TypeAffaire update(TypeAffaire typeaffaire);

}
