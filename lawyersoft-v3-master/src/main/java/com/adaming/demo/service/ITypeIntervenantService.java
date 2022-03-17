package com.adaming.demo.service;

import java.util.List;

import com.adaming.demo.entities.*;

public interface ITypeIntervenantService {
	
	
	TypeIntervenant save(TypeIntervenant typeintervenant);
	 
	 void delete(Long typeintervenantid);
	 
	 List<TypeIntervenant> findAll();
	 
	 TypeIntervenant findById(Long typeintervenantid);
	 
	 TypeIntervenant update(TypeIntervenant typeintervenant);


}
