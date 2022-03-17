package com.adaming.demo.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Arrays;
import java.util.Date;

@Entity
@Table(name = "Lecteurjugement")
public class Lecteurjugement implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "Lecteurjugement_id")
	private Long LecteurjugementId;
	@Column(name = "description")
	private String description;
	@Column(name = "favorable")
	private Boolean favorable = false;
	@Temporal(TemporalType.DATE)
	@Column(name = "date")
	private Date date;

	@ManyToOne
	@JoinColumn(name = "phase_id")
	private Phase phaseId;

	private byte[] file;

	@Column(name = "fileName")
	private String fileName;
	@Column(name = "fileDownloadUri")
	private String fileDownloadUri;
	@Column(name = "fileType")
	private String fileType;
	@Column(name = "size")
	private Long size;

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public void setSize(Long size) {
		this.size = size;
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

	public Long getLecteurjugementId() {
		return LecteurjugementId;
	}

	public void setLecteurjugementId(Long lecteurjugementId) {
		LecteurjugementId = lecteurjugementId;
	}

	

	public Boolean getFavorable() {
		return favorable;
	}

	public void setFavorable(Boolean favorable) {
		this.favorable = favorable;
	}

	public Phase getPhaseId() {
		return phaseId;
	}

	public void setPhaseId(Phase phaseId) {
		this.phaseId = phaseId;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public Lecteurjugement() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Lecteurjugement(Long lecteurjugementId, String description, Boolean favorable, Date date, Phase phaseId,
			byte[] file, String fileName, String fileDownloadUri, String fileType, Long size) {
		super();
		LecteurjugementId = lecteurjugementId;
		this.description = description;
		this.favorable = favorable;
		this.date = date;
		this.phaseId = phaseId;
		this.file = file;
		this.fileName = fileName;
		this.fileDownloadUri = fileDownloadUri;
		this.fileType = fileType;
		this.size = size;
	}

	

  /* @Override
	public String toString() {
		return "Lecteurjugement [LecteurjugementId=" + LecteurjugementId + ", description=" + description
				+ ", favorable=" + favorable + ", date=" + date + ", phaseId=" + phaseId + ", file="
				+ Arrays.toString(file) + ", fileName=" + fileName + ", fileDownloadUri=" + fileDownloadUri
				+ ", fileType=" + fileType + ", size=" + size + "]";
	}*/

}
