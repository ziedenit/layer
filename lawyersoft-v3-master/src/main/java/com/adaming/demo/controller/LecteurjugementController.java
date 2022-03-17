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
@RequestMapping(value = "/lecteurjugement")
public class LecteurjugementController {

	@Autowired
	private ILecteurjugementService lecteurjugementservice;
	@Autowired
	private IPhaseService phaseService;
	@Autowired
	private IAffaireService affaireService;

	@RequestMapping(value = "/getlecteurjugement", method = RequestMethod.GET)
	public List<Lecteurjugement> findAll() {

		return lecteurjugementservice.findAll();
	}


	@RequestMapping(value = "/addlecteurjugement/{description}/{favorable}/{id}", method = RequestMethod.POST)
	public Lecteurjugement save(@RequestParam(value = "file") MultipartFile file,
			@PathVariable(value="favorable", required = false ) Boolean favorable, @PathVariable("description") String description,
			@PathVariable("id") Phase phaseId) throws IOException {

		Lecteurjugement lecteurjugement = new Lecteurjugement();

		lecteurjugement.setFileName(file.getOriginalFilename());
		lecteurjugement.setSize(file.getSize());
		lecteurjugement.setDate(new Date());
		lecteurjugement.setFileType(file.getContentType());
		lecteurjugement.setDescription(description);
		lecteurjugement.setFavorable(favorable);
		lecteurjugement.setPhaseId(phaseId);
		
		return lecteurjugementservice.save(lecteurjugement, file);

	}
	
	/*@RequestMapping(value = "/deletelecteurjugement/{lecteurjugementid}", method = RequestMethod.DELETE)
	public void delete(@PathVariable("lecteurjugementid") Long lecteurjugementid) {

		lecteurjugementservice.delete(lecteurjugementid);

	}

	@RequestMapping(value = "/updatelecteurjugement", method = RequestMethod.PUT)
	public Lecteurjugement update(@RequestBody Lecteurjugement lecteurjugement) {

		return lecteurjugementservice.update(lecteurjugement);

	}*/

	/*
	 * @RequestMapping(value = "/CVPDF/{id}") public void
	 * getDownload(HttpServletResponse response,@PathVariable Long id,Fichier
	 * fichier) throws IOException { System.out.println("kdfkjfkdj"); fichier =
	 * fichierService.findById(id);
	 * System.out.println(fichierService.findById(id));
	 * 
	 * InputStream myStream =
	 * AlfrescoOpenCmis.findDocument(fichier.getFileDownloadUri()).
	 * getContentStream().getStream(); String fileName =
	 * AlfrescoOpenCmis.findDocument(fichier.getFileDownloadUri()).getName();
	 * response.addHeader("Content-disposition", "attachment;" + fileName);
	 * response.setContentType("pdf/plain"); IOUtils.copy(myStream,
	 * response.getOutputStream()); response.flushBuffer(); }
	 */

	/*@RequestMapping(value = "/findbyidlecteurjugement/{lecteurjugementid}", method = RequestMethod.GET)
	public Lecteurjugement findbyid(@PathVariable("lecteurjugementid") Long lecteurjugementid) {

		return lecteurjugementservice.findById(lecteurjugementid);

	}*/

	@RequestMapping(value = "/findbyfavorable/{favorable}", method = RequestMethod.GET)
	public List<Lecteurjugement> findAllByFavorable(@PathVariable("favorable") boolean favorable) {

		return lecteurjugementservice.findAllByFavorable(favorable);

	}

}
