package com.adaming.demo.service;

import java.util.List;

import com.adaming.demo.entities.Pages;

public interface IPagesService {
	List<Pages> getListPages();

	Pages addPage(Pages page);
	Pages findByNom(String nom);
}
