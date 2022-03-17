package com.adaming.demo.Implservice;

import java.util.List;
import java.util.Date;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import com.adaming.demo.service.*;


@Service
public class ConsultationServiceImpl implements IConsultationService {

	
	@Autowired
    ConsultationRepository repository;

	@Override
	public Consultation save(Consultation consultation) {
		
		/*	if(repository.exists(tribunal))*//*exists(objet)*/
		return repository.save(consultation);
	}

	@Override
	public void delete(Long idconsultation) {

		if(repository.existsById(idconsultation)) /*exists(objet)*/
		repository.deleteById(idconsultation);
		else
			System.out.print("inconnus");		
	}

	@Override
	public List<Consultation> findAll() {
		
		return repository.findAll();		

	}
	@Override
	public List<Consultation> findAllByType(String type){
		return repository.findAllByType(type);
	}

	@Override
	public Consultation findById(Long idconsultation) {
	
		if(repository.existsById(idconsultation)) /*exists(objet)*/

			return repository.findById(idconsultation).get();
			else 
				return null;
	}

	@Override
	public Consultation update(Consultation consultation) {
		
		if(repository.existsById(consultation.getConsultationId())) /*exists(objet)*/
			return repository.save(consultation);
			else
				return null;
	}

	  }



