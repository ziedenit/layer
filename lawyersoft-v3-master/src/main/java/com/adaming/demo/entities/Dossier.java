package com.adaming.demo.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.Collection;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "Dossier")
public class Dossier implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "dossier_id")
	private Long dossierId;
	@Column(name = "nom")
	private String nom;
	@Column(name = "description")
	private String description;
	@Temporal(TemporalType.DATE)
	@Column(name = "date_creation")
	private Date dateCreation;
	
	@OneToMany(mappedBy = "dossierId")
	private List<Fichier> fichiers;

	
	@ManyToOne
	@JoinColumn(name = "affaire_id")
	private Affaire affaireId;

	
	@JsonIgnore
	public List<Fichier> getFichiers() {
		return fichiers;
	}
	public void setFichiers(List<Fichier> fichiers) {
		this.fichiers = fichiers;
	}
	public Affaire getAffaireId() {
		return affaireId;
	}
	public void setAffaireId(Affaire affaireId) {
		this.affaireId = affaireId;
	}
	public void setDossierId(Long dossierId) {
		this.dossierId = dossierId;
	}
	
	public Long getDossierId() {
		return dossierId;
	}
	public void setDossiertId(Long dossierId) {
		this.dossierId = dossierId;
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
	public Date getDateCreation() {
		return dateCreation;
	}
	public void setDateCreation(Date dateCreation) {
		this.dateCreation = dateCreation;
	}

	public Dossier() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public Dossier(Long dossierId, String nom, String description, Date dateCreation, List<Fichier> fichiers,
			Affaire affaireId) {
		super();
		this.dossierId = dossierId;
		this.nom = nom;
		this.description = description;
		this.dateCreation = dateCreation;
		this.fichiers = fichiers;
		this.affaireId = affaireId;
	}
	
	
/*	public Collection<Fichier> getFichiers() {
		return fichiers;
	}
	public void setFichiers(List<Fichier> fichiers) {
		this.fichiers = fichiers;
	}
	public Affaire getAffaireId() {
		return affaireId;
	}
	public void setAffaireId(Affaire affaireId) {
		this.affaireId = affaireId;
	}*/
	
	

}
