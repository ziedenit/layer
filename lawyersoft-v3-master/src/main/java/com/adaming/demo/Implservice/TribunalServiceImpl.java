package com.adaming.demo.Implservice;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;

import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import com.adaming.demo.service.*;


@Service
public class TribunalServiceImpl implements ITribunalService {

	
	@Autowired
    TribunalRepository repository;
	
	@Override
	public Tribunal save(Tribunal tribunal) {
		
		return repository.save(tribunal);
	    
	}

	@Override
	public void delete(Long tribunalid) {

		if(repository.existsById(tribunalid)) /*exists(objet)*/
		repository.deleteById(tribunalid);
		else
			System.out.print("inconnus");

	}

	@Override
	public List<Tribunal> findAll() {
		
		return repository.findAll();		

	}

	@Override
	public Tribunal findById(Long tribunalid) {
		
		if(repository.existsById(tribunalid)) /*exists(objet)*/

		return repository.findById(tribunalid).get();
		else 
			return null;

	}

	@Override
	public Tribunal update(Tribunal tribunal) {
		if(repository.existsById(tribunal.getTribunalId())) /*exists(objet)*/
		return repository.save(tribunal);
		else
			return null;

	}

    
}



