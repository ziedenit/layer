package com.adaming.demo.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
@Entity
@Table(name = "Intervenant")
public class Intervenant implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "intervenant_id")
	private Long intervenantid;
	@Column(name = "nom")
	private String nom;
	@Column(name = "prenom")
	private String prenom;
	@Column(name = "cin")
	private String cin;
	@Column(name = "date_naissance")
	@Temporal(TemporalType.DATE)
	private Date dateNaissance;
	@Column(name = "email")
	private String email;
	@Column(name = "telephone")
	private String telephone;
	@Column(name = "ville")
	private String ville;
	@Column(name = "gouvernorat")
	private String gouvernorat;
	@Column(name = "profession")
	private String profession;
	@Column(name = "codePostal")
	private String codePostal;
	@Column(name = "adresse")
	private String adresse;
	

	@ManyToOne
	@JoinColumn(name = "typeintervenant_id")
	private TypeIntervenant typeintervenantId;
	
	@ManyToMany(mappedBy = "intervenant")
	@JsonIgnore
    private Set<Affaire> affaire = new HashSet<>();
	
	@ManyToMany( mappedBy = "intervenant")
	@JsonIgnore
    private Set<Consultation> consultation = new HashSet<>();

	
	public String getNom() {
		return nom;
	}
	public Long getIntervenantid() {
		return intervenantid;
	}
	public void setIntervenantid(Long intervenantid) {
		this.intervenantid = intervenantid;
	}
	public TypeIntervenant getTypeintervenantId() {
		return typeintervenantId;
	}
	public void setTypeintervenantId(TypeIntervenant typeintervenantId) {
		this.typeintervenantId = typeintervenantId;
	}
	public Set<Affaire> getAffaire() {
		return affaire;
	}
	public void setAffaire(Set<Affaire> affaire) {
		this.affaire = affaire;
	}
	public Set<Consultation> getConsultation() {
		return consultation;
	}
	public void setConsultation(Set<Consultation> consultation) {
		this.consultation = consultation;
	}
	public Date getDateNaissance() {
		return dateNaissance;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	
	
	public String getCin() {
		return cin;
	}
	public void setCin(String cin) {
		this.cin = cin;
	}
	
	
	
	public void setDateNaissance(Date dateNaissance) {
		this.dateNaissance = dateNaissance;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	

	public String getTelephone() {
		return telephone;
	}
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getVille() {
		return ville;
	}
	public void setVille(String ville) {
		this.ville = ville;
	}
	public String getGouvernorat() {
		return gouvernorat;
	}
	public void setGouvernorat(String gouvernorat) {
		this.gouvernorat = gouvernorat;
	}
	public String getProfession() {
		return profession;
	}
	public void setProfession(String profession) {
		this.profession = profession;
	}
	public String getCodePostal() {
		return codePostal;
	}
	public void setCodePostal(String codePostal) {
		this.codePostal = codePostal;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
/*	public List<Affaire> getAffaires() {
		return affaires;
	}
	public void setAffaires(List<Affaire> affaires) {
		this.affaires = affaires;
	}
	
	*/

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	
	public Intervenant(Long intervenantid, String nom, String prenom, String cin, Date dateNaissance, String email,
		String telephone, String ville, String gouvernorat, String profession, String codePostal, String adresse,
		TypeIntervenant typeintervenantId, Set<Affaire> affaire, Set<Consultation> consultation) {
	super();
	this.intervenantid = intervenantid;
	this.nom = nom;
	this.prenom = prenom;
	this.cin = cin;
	this.dateNaissance = dateNaissance;
	this.email = email;
	this.telephone = telephone;
	this.ville = ville;
	this.gouvernorat = gouvernorat;
	this.profession = profession;
	this.codePostal = codePostal;
	this.adresse = adresse;
	this.typeintervenantId = typeintervenantId;
	this.affaire = affaire;
	this.consultation = consultation;
}
	public Intervenant() {
		super();
		// TODO Auto-generated constructor stub
	}
	
/*	public List<Consultation> getConsultaions() {
		return consultaions;
	}
	public void setConsultaions(List<Consultation> consultaions) {
		this.consultaions = consultaions;
	}
	*/
		
}
