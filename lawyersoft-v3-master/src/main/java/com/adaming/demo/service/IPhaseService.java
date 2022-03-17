package com.adaming.demo.service;

import java.util.List;

import com.adaming.demo.entities.*;

public interface IPhaseService {
	
	
	 Phase save(Phase phase);
	 
	 void delete(Long phaseid);
	 
	 List<Phase> findAll();
	 
	 Phase findById(Long phaseid);
	 
	 Phase update(Phase phase);
	
     List<Phase> findAllByAffaireId(Long id);
     
	 Phase findByAffaireIdAndCurrentTrue(Affaire affaire);

     Phase findByPhaseId(Long phaseid);


}
