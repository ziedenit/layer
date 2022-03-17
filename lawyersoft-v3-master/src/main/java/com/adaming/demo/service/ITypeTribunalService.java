package com.adaming.demo.service;

import java.util.List;

import com.adaming.demo.entities.*;

public interface ITypeTribunalService {
	
	
	 TypeTribunal save(TypeTribunal typetribunal);
	 
	 void delete(Long typetribunalid);
	 
	 List<TypeTribunal> findAll();
	 
	 TypeTribunal findById(Long typetribunalid);
	 
	 TypeTribunal update(TypeTribunal typetribunal);

}
