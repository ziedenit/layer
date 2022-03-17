package com.adaming.demo.Implservice;

import java.util.List;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import com.adaming.demo.service.*;

@Service
public class PhaseServiceImpl implements IPhaseService {

	@Autowired
	PhaseRepository repository;

	@Override
	public Phase save(Phase phase) {

		return repository.save(phase);
	}

	@Override
	public void delete(Long phaseid) {

		if (repository.existsById(phaseid)) /* exists(objet) */

			repository.deleteById(phaseid);
		else
			System.out.print("inconnus");
	}

	@Override
	public List<Phase> findAll() {

		return repository.findAll();

	}

	@Override
	public Phase findById(Long phaseid) {
		if (repository.existsById(phaseid)) /* exists(objet) */

			return repository.findById(phaseid).get();
		else
			return null;

	}

	@Override
	public Phase update(Phase phase) {

		if (repository.existsById(phase.getPhaseId())) /* exists(objet) */

			return repository.save(phase);
		else
			return null;
	}

	@Override
	public List<Phase> findAllByAffaireId(Long id) {

		return repository.findAllByAffaireIdAffaireId(id);
	}

	@Override
	public Phase findByAffaireIdAndCurrentTrue(Affaire affaire) {
		
		return repository.findByAffaireIdAffaireIdAndCurrentTrue(affaire);

	}

	@Override
	public Phase findByPhaseId(Long phaseid) {
		
		return repository.findByPhaseId(phaseid);

	}

}
