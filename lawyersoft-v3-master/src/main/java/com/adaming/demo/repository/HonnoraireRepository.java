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
import com.adaming.demo.entities.Honnoraire;

import java.util.Date;
import java.util.List;


public interface HonnoraireRepository extends JpaRepository<Honnoraire,Long> {

	       List<Honnoraire> findAllByAffaireIdAffaireId(Long id);
	       List<Honnoraire> findAllByAffaireIdAffaireIdAndType(Long idaffaire,String type);
	       List<Honnoraire> findAllByType(String type);
	       Honnoraire findByTypeAndAffaireIdAffaireId(String type,Long id);

	          
}