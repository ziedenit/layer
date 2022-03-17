package com.adaming.demo.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.adaming.demo.entities.*;

public interface ILecteurjugementService {
	
	 Lecteurjugement save(Lecteurjugement lecteurjugement, MultipartFile file)throws IOException;
	
	 void delete(Long lecteurjugementid);
	 
	 List<Lecteurjugement> findAll();
	 
	 Lecteurjugement findById(Long lecteurjugementid);
	 
	 Lecteurjugement update(Lecteurjugement lecteurjugement);
	 
	 List<Lecteurjugement> findAllByFavorable(boolean favorable);

	 
    // List<Lecteurjugement> findAllByDossier(Long id);

	
}
