package com.adaming.demo.Implservice;

import java.util.List;
import java.util.Date;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import com.adaming.demo.service.*;


@Service
public class RendezvousServiceImpl implements IRendezVousService {

	@Autowired
	RendezvousRepository repository;
	
	@Override
	public RendezVous save(RendezVous rendezvous) {

		return repository.save(rendezvous);
	}

	@Override
	public void delete(Long rendezvousid) {
       
		if(repository.existsById(rendezvousid)) /*exists(objet)*/

		repository.deleteById(rendezvousid);		
		else 
			System.out.print("inconnus");
	}

	@Override
	public List<RendezVous> findAll() {

		return repository.findAll();		

	}

	@Override
	public RendezVous findById(Long rendezvousid) {
		if(repository.existsById(rendezvousid)) /*exists(objet)*/

		return repository.findById(rendezvousid).get();
		else 
			return null;

	}

	@Override
	public RendezVous update(RendezVous rendezvous) {
		
		if(repository.existsById(rendezvous.getIdrendezvous())) /*exists(objet)*/

		return repository.save(rendezvous);
		else 
			return null;

	}

	@Override
	public List<RendezVous> findAllByPhaseId(Long id) {
		
		return repository.findAllByPhaseIdPhaseId(id);
	}

	
    
}



