package com.adaming.demo.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.adaming.demo.entities.*;

public interface IFichierService {
	
	 Fichier save(Fichier fichier, MultipartFile file)throws IOException;
	
	 void delete(Long fichierid);
	 
	 List<Fichier> findAll();
	 
	 Fichier findById(Long fichierid);
	 
	 Fichier update(Fichier fichier);
	 
     List<Fichier> findAllByDossier(Long id);

	
}
