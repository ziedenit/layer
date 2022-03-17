package com.adaming.demo.Implservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adaming.demo.entities.DroitAcces;
import com.adaming.demo.repository.DroitAccesRepository;
import com.adaming.demo.service.IDroitAccesService;
@Service
public class DroitAccesService implements IDroitAccesService{
	@Autowired
	DroitAccesRepository droitAccesRepository;
	@Override
	public DroitAcces addDroitAcces(DroitAcces droitAcces) {
		// TODO Auto-generated method stub
		return droitAccesRepository.save(droitAcces);
	}

	@Override
	public DroitAcces updateDroitAcces(DroitAcces droitAcces) {
		// TODO Auto-generated method stub
		return droitAccesRepository.save(droitAcces);
	}

	@Override
	public List<DroitAcces> getListDroitAcces() {
		// TODO Auto-generated method stub
		return droitAccesRepository.findAll();
	}

	@Override
	public List<DroitAcces> addAllDroitAcces(List<DroitAcces> droitsAcces) {
		// TODO Auto-generated method stub
		return droitAccesRepository.saveAll(droitsAcces);
	}

	@Override
	public List<DroitAcces> getListDroitAccesByProfilId(Long idProfil) {
		// TODO Auto-generated method stub
		return droitAccesRepository.findAllByProfileIdProfil(idProfil);
	}

	@Override
	public void deleteDroitAcces(Long idDroit) {
		droitAccesRepository.deleteById(idDroit);
		
	}

}
