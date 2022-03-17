package com.adaming.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.adaming.demo.entities.Affaire;
import java.util.List;


public interface AffaireRepository extends JpaRepository<Affaire,Long> {
	
	
	  @Query(value = "SELECT * FROM Affaire a WHERE a.etat = :etat", 
			 nativeQuery = true)
			public List<Affaire> findAllByEtat(@Param("etat") String etat);
	 
		
}