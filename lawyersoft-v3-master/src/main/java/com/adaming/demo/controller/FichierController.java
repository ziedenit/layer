package com.adaming.demo.controller;

import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.security.Principal;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.apache.chemistry.opencmis.client.api.Folder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.apache.chemistry.opencmis.commons.impl.IOUtils;


import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.servlet.http.HttpServletResponse;
import com.adaming.demo.Implservice.*;
import com.adaming.demo.dto.FileUpload;
import com.adaming.demo.service.*;
import com.adaming.demo.utils.AlfrescoOpenCmis;
import com.adaming.demo.utils.Utilitaire;

import org.springframework.util.StringUtils;

@RestController
@CrossOrigin

@RequestMapping(value = "/fichier")
public class FichierController {

	@Autowired
	private IFichierService fichierService;

	@RequestMapping(value = "/getfichier", method = RequestMethod.GET)
	public List<Fichier> findAll() {

		return fichierService.findAll();
	}

	@RequestMapping(value = "/addfichier/{nom}/{description}/{id}", method = RequestMethod.POST)
	public Fichier save(@RequestParam(value = "file") MultipartFile file, @PathVariable("nom") String nom,
			@PathVariable("description") String description, @PathVariable("id") Dossier dossierId) throws IOException {

		Fichier fichier = new Fichier();

		fichier.setFileName(file.getOriginalFilename());
		fichier.setSize(file.getSize());
		fichier.setDateCreation(new Date());
		fichier.setFileType(file.getContentType());
		fichier.setDescription(description);
		fichier.setNom(nom);
		fichier.setDossierId(dossierId);

		return fichierService.save(fichier, file);

	}
	

	@RequestMapping(value = "/deletefichier/{fichierid}", method = RequestMethod.DELETE)
	public void delete(@PathVariable("fichierid") Long fichierid) {

		fichierService.delete(fichierid);

	}

	@RequestMapping(value = "/updatefichier", method = RequestMethod.PUT)
	public Fichier update(@RequestBody Fichier fichier) {

		return fichierService.update(fichier);

	}
	
	
/*	@RequestMapping(value = "/CVPDF/{id}")
	public void getDownload(HttpServletResponse response,@PathVariable Long id,Fichier fichier)
			throws IOException {
    	System.out.println("kdfkjfkdj");
    	 fichier = fichierService.findById(id);
    	System.out.println(fichierService.findById(id));

		InputStream myStream = AlfrescoOpenCmis.findDocument(fichier.getFileDownloadUri()).getContentStream().getStream();
		String fileName = AlfrescoOpenCmis.findDocument(fichier.getFileDownloadUri()).getName();
		response.addHeader("Content-disposition", "attachment;" + fileName);
		response.setContentType("pdf/plain");
		IOUtils.copy(myStream, response.getOutputStream());
		response.flushBuffer();
	}*/
    

	@RequestMapping(value = "/findbyidfichier/{fichierid}", method = RequestMethod.GET)
	public Fichier findbyid(@PathVariable("fichierid") Long fichierid) {

		return fichierService.findById(fichierid);

	}

	@RequestMapping(value = "/findbyiddossier/{dossierid}", method = RequestMethod.GET)
	public List<Fichier> findAllByDossier(@PathVariable("dossierid") Long id) {

		return fichierService.findAllByDossier(id);

	}

}
