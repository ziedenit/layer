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
import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import com.adaming.demo.service.*;
import com.adaming.demo.utils.AlfrescoOpenCmis;
import com.adaming.demo.utils.Utilitaire;

@Service
public class FichierServiceImpl implements IFichierService {

	@Autowired
	FichierRepository repository;

	/* alfresco upload file */
	private static final Logger LOGGER = LoggerFactory.getLogger(FichierController.class);
	private static final String CONTEXT = "context";

	private Boolean creerCv(Fichier fichier) {
		String realPath = "C:\\fichier\\";
		FileInputStream fileInputStream = null;
		String mime = "application/pdf";
		try {
			if (mime.equals("application/msword")) {
				fileInputStream = new FileInputStream(realPath + fichier.getFileName().replace(".doc", ".pdf"));
				fichier.setFileName(fichier.getFileName().replace(".doc", ".pdf"));
			} else if (mime.equals("application/vnd.openxmlformats-officedocument.wordprocessingml.document")) {
				fileInputStream = new FileInputStream(realPath + fichier.getFileName().replace(".docx", ".pdf"));
				fichier.setFileName(fichier.getFileName().replace(".docx", ".pdf"));
			} else {
				fileInputStream = new FileInputStream(realPath + fichier.getFileName().replace(".PDF", ".pdf"));
				fichier.setFileName(fichier.getFileName().replace(".PDF", ".pdf"));

			}
			org.apache.chemistry.opencmis.client.api.Document cvAlfresco = AlfrescoOpenCmis.createCv(fileInputStream,
					fichier.getFileName(), fileInputStream.getChannel().size(), mime);
			fichier.setFileDownloadUri(cvAlfresco.getId());
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
	public Fichier save(Fichier fichier, MultipartFile file) throws IOException {

		fichier.setFileName(file.getOriginalFilename());

		fichier.setFileDownloadUri(Utilitaire.addFileAlfresco(file, "test", null));
		this.creerCv(fichier);
		
		Fichier fich = repository.save(fichier);
		System.out.println(fich);

		return fich;
	}

	@Override
	public void delete(Long fichierid) {

		if (repository.existsById(fichierid)) /* exists(objet) */

			repository.deleteById(fichierid);
		else
			System.out.print("inconnus");
	}

	@Override
	public List<Fichier> findAll() {

		return repository.findAll();

	}

	@Override
	public Fichier findById(Long fichierid) {
		if (repository.existsById(fichierid)) /* exists(objet) */

			return repository.findById(fichierid).get();
		else
			return null;

	}

	@Override
	public Fichier update(Fichier fichier) {

		if (repository.existsById(fichier.getFichierId())) /* exists(objet) */

			return repository.save(fichier);
		else
			return null;

	}

	@Override
	public List<Fichier> findAllByDossier(Long id) {

		return repository.findAllByDossierIdDossierId(id);
	}

}
