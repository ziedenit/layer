package com.adaming.demo.service;

import java.util.List;

import com.adaming.demo.entities.*;

public interface IIntervenantService {

	 Intervenant save(Intervenant intervenant);
	 
	 void delete(Long intervenantid);
	 
	 List<Intervenant> findAll();
	 
	 Intervenant findById(Long intervenantid);
	 
	 Intervenant update(Intervenant intervenant);
}
