package com.adaming.demo.service;

import java.util.List;

import com.adaming.demo.entities.*;

public interface IRendezVousService {
	
	RendezVous save(RendezVous rendezvous);
	 
	 void delete(Long rendezvousid);
	 
	 List<RendezVous> findAll();
	 
	 RendezVous findById(Long rendezvousid);
	 
	 RendezVous update(RendezVous rendezvous);
	 
     List<RendezVous> findAllByPhaseId(Long id);

}
