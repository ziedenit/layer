package com.adaming.demo.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.adaming.demo.entities.Affaire;
import com.adaming.demo.entities.Dossier;
import com.adaming.demo.entities.Fichier;

import java.util.Date;
import java.util.List;


public interface FichierRepository extends JpaRepository<Fichier,Long> {

	       
	/*@Query(value = "SELECT * FROM Fichier f,Dossier d WHERE f.dossier_id = :id AND  f.dossier_id = d.dossier_id", 
			 nativeQuery = true)
			public List<Fichier> findAllByDossier(@Param("id") Long id);*/
	public List<Fichier> findAllByDossierIdDossierId(Long id);
	          
}