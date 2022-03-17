package com.adaming.demo.dto;

import org.springframework.web.multipart.MultipartFile;

import com.adaming.demo.entities.Fichier;

public class FileUpload {
	private Fichier fichier;
	private MultipartFile file;

	public Fichier getFichier() {
		return fichier;
	}

	public void setFichier(Fichier fichier) {
		this.fichier = fichier;
	}

	public MultipartFile getFile() {
		return file;
	}

	public void setFile(MultipartFile file) {
		this.file = file;
	}

}
