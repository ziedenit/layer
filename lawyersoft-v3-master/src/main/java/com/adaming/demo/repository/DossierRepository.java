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

import java.util.Date;
import java.util.List;


public interface DossierRepository extends JpaRepository<Dossier,Long> {

	@Query(value = "SELECT * FROM Dossier d,Affaire a WHERE d.affaire_id = :id AND  d.affaire_id = a.affaire_id", 
			 nativeQuery = true)
			public List<Dossier> findAllByAffaire(@Param("id") Long id);
	          
}