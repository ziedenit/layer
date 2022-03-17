package com.adaming.demo.Implservice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.adaming.demo.entities.Pages;
import com.adaming.demo.repository.PagesRepository;
import com.adaming.demo.service.IPagesService;
@Service
public class PagesService implements IPagesService{
	@Autowired
	PagesRepository pagesRepository;
	@Override
	public List<Pages> getListPages() {
		// TODO Auto-generated method stub
		return pagesRepository.findAll();
	}

	@Override
	public Pages addPage(Pages page) {
		// TODO Auto-generated method stub
		return pagesRepository.save(page);
	}

	@Override
	public Pages findByNom(String nom) {
		// TODO Auto-generated method stub
		return pagesRepository.findByNom(nom);
	}

}
