package com.adaming.demo.service;

import java.util.List;

import com.adaming.demo.entities.DroitAcces;

public interface IDroitAccesService {
	DroitAcces addDroitAcces(DroitAcces droitAcces);
	List<DroitAcces> addAllDroitAcces(List<DroitAcces> droitsAcces);

	DroitAcces updateDroitAcces(DroitAcces droitAcces);

	List<DroitAcces> getListDroitAcces();
	
	List<DroitAcces> getListDroitAccesByProfilId(Long idProfil);
	
	void deleteDroitAcces(Long idDroit);
	

}
