package com.adaming.demo.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Arrays;
import java.util.Date;

@Entity
@Table(name = "Fichier")
public class Fichier implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "fichier_id")
	private Long fichierId;
	@Column(name = "nom")
	private String nom;
	@Column(name = "description")
	private String description;
	@Temporal(TemporalType.DATE)
	@Column(name = "date_creation")
	private Date dateCreation;
	
    private byte[] file;
	
	@Column(name = "fileName")
	private String fileName;
	@Column(name = "fileDownloadUri")
	private String fileDownloadUri;
	@Column(name = "fileType")
	private String fileType;
	@Column(name = "size")
	private Long size;

	
	

	@ManyToOne
	@JoinColumn(name = "dossier_id")
	private Dossier dossierId;
	

	public Long getFichierId() {
		return fichierId;
	}
	public void setFichierId(Long fichierId) {
		this.fichierId = fichierId;
	}
	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}

	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}


	
	public void setSize(Long size) {
		this.size = size;
	}
	public Fichier() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Date getDateCreation() {
		return dateCreation;
	}
	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}
	public Dossier getDossierId() {
		return dossierId;
	}
	public void setDossierId(Dossier dossierId) {
		this.dossierId = dossierId;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	

	public byte[] getFile() {
		return file;
	}
	public void setFile(byte[] file) {
		this.file = file;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	public String getFileDownloadUri() {
		return fileDownloadUri;
	}
	public void setFileDownloadUri(String fileDownloadUri) {
		this.fileDownloadUri = fileDownloadUri;
	}
	public String getFileType() {
		return fileType;
	}
	public void setFileType(String fileType) {
		this.fileType = fileType;
	}
	public Long getSize() {
		return size;
	}
	public void setSize(long l) {
		this.size = l;
	}
	
	public Fichier(Long fichierId, String nom, String description, Date dateCreation, byte[] file, String fileName,
			String fileDownloadUri, String fileType, Long size, Dossier dossierId) {
		super();
		this.fichierId = fichierId;
		this.nom = nom;
		this.description = description;
		this.dateCreation = dateCreation;
		this.file = file;
		this.fileName = fileName;
		this.fileDownloadUri = fileDownloadUri;
		this.fileType = fileType;
		this.size = size;
		this.dossierId = dossierId;
	}

	@Override
	public String toString() {
		return "Fichier [fichierId=" + fichierId + ", nom=" + nom + ", description=" + description + ", dateCreation="
				+ dateCreation + ", file=" + Arrays.toString(file) + ", fileName=" + fileName + ", fileDownloadUri="
				+ fileDownloadUri + ", fileType=" + fileType + ", size=" + size + "]";
	}
	
}
