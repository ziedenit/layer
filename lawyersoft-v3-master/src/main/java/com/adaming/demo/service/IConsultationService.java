package com.adaming.demo.service;

import java.util.List;

import com.adaming.demo.entities.*;

public interface IConsultationService {
	

	 Consultation save(Consultation consultation);
	 
	 void delete(Long idconsultation);
	 
	 List<Consultation> findAll();
	 
	 Consultation findById(Long idconsultation);
	 
	 Consultation update(Consultation consultation);

	 List<Consultation> findAllByType(String type);


}