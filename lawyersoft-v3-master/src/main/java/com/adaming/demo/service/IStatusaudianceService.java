package com.adaming.demo.service;

import java.util.List;

import com.adaming.demo.entities.*;

public interface IStatusaudianceService {
	
	
	 Statusaudiance save(Statusaudiance statusaudiance);
	 
	 void delete(Long statusaudianceid);
	 
	 List<Statusaudiance> findAll();
	 
	 Statusaudiance findById(Long statusaudianceid);
	 
	 Statusaudiance update(Statusaudiance statusaudiance);

}
