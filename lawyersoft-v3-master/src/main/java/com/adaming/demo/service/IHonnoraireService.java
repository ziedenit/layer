package com.adaming.demo.service;

import java.util.List;

import com.adaming.demo.entities.*;

public interface IHonnoraireService {

	Honnoraire save(Honnoraire honnoraire);

	void delete(Long honnoraireid);

	List<Honnoraire> findAll();

	Honnoraire findById(Long honnoraireid);

	Honnoraire update(Honnoraire honnoraire);

	List<Honnoraire> findAllByAffaireId(Long id);
	
    List<Honnoraire> findAllByaffairetype(Long idaffaire, String type);
    
    List<Honnoraire> findAllBytype(String type);
    
    Honnoraire findByTypeAndAffaireId(String type,Long id);



}
