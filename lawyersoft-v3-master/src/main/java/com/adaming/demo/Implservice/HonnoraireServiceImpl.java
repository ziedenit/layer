package com.adaming.demo.Implservice;

import java.util.List;
import java.util.Date;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import com.adaming.demo.service.*;


@Service
public class HonnoraireServiceImpl implements IHonnoraireService {

	@Autowired
	HonnoraireRepository repository;

	@Override
	public Honnoraire save(Honnoraire honnoraire) {
		
		return repository.save(honnoraire);

	}

	@Override
	public void delete(Long honnoraireid) {
		if(repository.existsById(honnoraireid)) /*exists(objet)*/

			repository.deleteById(honnoraireid);		
			else 
				System.out.print("inconnus");		
	}

	@Override
	public List<Honnoraire> findAll() {
		
		return repository.findAll();		

	}

	@Override
	public Honnoraire findById(Long honnoraireid) {
		if(repository.existsById(honnoraireid)) /*exists(objet)*/

			return repository.findById(honnoraireid).get();
			else 
				return null;
	}

	@Override
	public Honnoraire update(Honnoraire honnoraire) {
		if(repository.existsById(honnoraire.getHonnoraireId())) /*exists(objet)*/

			return repository.save(honnoraire);
			else 
				return null;
	}

	@Override
	public List<Honnoraire> findAllByAffaireId(Long id) {
		
		return repository.findAllByAffaireIdAffaireId(id);
	}

	@Override
	public List<Honnoraire> findAllByaffairetype(Long idaffaire, String type) {
		return repository.findAllByAffaireIdAffaireIdAndType(idaffaire, type);
	}

	@Override
	public List<Honnoraire> findAllBytype(String type) {
		
		return repository.findAllByType(type);

	}

	@Override
	public Honnoraire findByTypeAndAffaireId(String type, Long id) {

		return repository.findByTypeAndAffaireIdAffaireId(type,id);

	}

}



