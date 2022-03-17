package com.adaming.demo.service;

import java.util.List;

import com.adaming.demo.entities.*;

public interface IAudianceService {
	
	 Audiance save(Audiance audiance);
	 
	 void delete(Long audianceid);
	 
	 List<Audiance> findAll();
	 
	 Audiance findById(Long audianceid);
	 
	 Audiance update(Audiance audiance);

     List<Audiance> findAllByPhaseId(Long id);

}
