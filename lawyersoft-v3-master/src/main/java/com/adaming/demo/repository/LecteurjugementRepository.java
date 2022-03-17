package com.adaming.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.adaming.demo.entities.Lecteurjugement;

import java.util.Date;
import java.util.List;


public interface LecteurjugementRepository extends JpaRepository<Lecteurjugement,Long> {

	       
	public List<Lecteurjugement> findAllByFavorable(boolean favorable);
	
	//public List<Fichier> findAllByDossierIdDossierId(Long id);
	          
}