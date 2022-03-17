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
import com.adaming.demo.entities.Phase;

import java.util.Date;
import java.util.List;


public interface PhaseRepository extends JpaRepository<Phase,Long> {

	 public List<Phase>  findAllByAffaireIdAffaireId(Long id);
	 public Phase findByAffaireIdAffaireIdAndCurrentTrue(Affaire affaire);
     public Phase findByPhaseId(Long phaseid);
	          
}