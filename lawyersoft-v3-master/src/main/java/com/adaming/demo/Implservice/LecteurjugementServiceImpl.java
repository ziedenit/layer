package com.adaming.demo.Implservice;

import java.util.List;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.Date;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.adaming.demo.controller.FichierController;
import com.adaming.demo.controller.LecteurjugementController;
import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import com.adaming.demo.service.*;
import com.adaming.demo.utils.AlfrescoOpenCmis;
import com.adaming.demo.utils.Utilitaire;

@Service
public class LecteurjugementServiceImpl implements ILecteurjugementService{

	@Autowired
	LecteurjugementRepository repository;

	/* alfresco upload file */
	private static final Logger LOGGER = LoggerFactory.getLogger(LecteurjugementController.class);
	private static final String CONTEXT = "context";

	private Boolean creerCv(Lecteurjugement lecteurjugement) {
		String realPath = "C:\\fichier\\";
		FileInputStream fileInputStream = null;
		String mime = "application/pdf";
		try {
			if (mime.equals("application/msword")) {
				fileInputStream = new FileInputStream(realPath + lecteurjugement.getFileName().replace(".doc", ".pdf"));
				lecteurjugement.setFileName(lecteurjugement.getFileName().replace(".doc", ".pdf"));
			} else if (mime.equals("application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
				fileInputStream = new FileInputStream(realPath + lecteurjugement.getFileName().replace(".docx", ".pdf"));
				lecteurjugement.setFileName(lecteurjugement.getFileName().replace(".docx", ".pdf"));
			} else {
				fileInputStream = new FileInputStream(realPath + lecteurjugement.getFileName().replace(".PDF", ".pdf"));
				lecteurjugement.setFileName(lecteurjugement.getFileName().replace(".PDF", ".pdf"));

			}
			org.apache.chemistry.opencmis.client.api.Document cvAlfresco = AlfrescoOpenCmis.createCv(fileInputStream,
					lecteurjugement.getFileName(), fileInputStream.getChannel().size(), mime);
			lecteurjugement.setFileDownloadUri(cvAlfresco.getId());
			return true;
		} catch (IOException e) {
			return false;
		} finally {
			if (fileInputStream != null)
				try {
					fileInputStream.close();
				} catch (IOException e) {
				}
		}

	}

	@Override
	public Lecteurjugement save(Lecteurjugement lecteurjugement, MultipartFile file) throws IOException {

		lecteurjugement.setFileName(file.getOriginalFilename());

		lecteurjugement.setFileDownloadUri(Utilitaire.addFileAlfresco(file, "test", null));
		this.creerCv(lecteurjugement);
		
		//Lecteurjugement lecteur = repository.save(lecteurjugement);
		//System.out.println(lecteur);

		return repository.save(lecteurjugement);
	}

	@Override
	public void delete(Long lecteurjugementid) {

		if (repository.existsById(lecteurjugementid)) /* exists(objet) */

			repository.deleteById(lecteurjugementid);
		else
			System.out.print("inconnus");
	}

	@Override
	public List<Lecteurjugement> findAll() {

		return repository.findAll();

	}

	@Override
	public Lecteurjugement findById(Long lecteurjugementid) {
		if (repository.existsById(lecteurjugementid)) /* exists(objet) */

			return repository.findById(lecteurjugementid).get();
		else
			return null;

	}

	@Override
	public Lecteurjugement update(Lecteurjugement lecteurjugement) {

		if (repository.existsById(lecteurjugement.getLecteurjugementId())) /* exists(objet) */

			return repository.save(lecteurjugement);
		else
			return null;

	}

	@Override
	public List<Lecteurjugement> findAllByFavorable(boolean favorable) {
	
		return repository.findAllByFavorable(favorable);
	}

	/*@Override
	public List<Lecteurjugement> findAllByDossier(Long id) {

		return repository.findAllByDossierIdDossierId(id);
	}*/

}
