package com.adaming.demo.entities;

import java.io.Serializable;
import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "Auxiliaire")
public class Auxiliaire {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "auxiliaire_id")
	private Long auxiliaireId;
	@Column(name = "adresse")
	private String adresse;
	@Column(name = "nom")
	private String nom;
	@Column(name = "prenom")
	private String prenom;
	@Column(name = "email")
	private String email;
	@Column(name = "telephone")
	private String telephone;
	@Column(name = "gouvernorat")
	private String gouvernorat;
	@Column(name = "ville")
	private String ville;
	
	
	@ManyToOne
	@JoinColumn(name = "typeauxiliaire_id")
	private TypeAuxiliaire typeauxiliaireId;
	
	@ManyToMany(mappedBy = "auxiliaire")
	@JsonIgnore
    private Set<Affaire> affaire = new HashSet<>();

	public Auxiliaire() {
		super();
		// TODO Auto-generated constructor stub
	}
	

	
	public Auxiliaire(Long auxiliaireId, String adresse, String nom, String prenom, String email, String telephone,
			String gouvernorat, String departement, String ville, String specialite) {
		super();
		this.auxiliaireId = auxiliaireId;
		this.adresse = adresse;
		this.nom = nom;
		this.prenom = prenom;
		this.email = email;
		this.telephone = telephone;
		this.gouvernorat = gouvernorat;
		this.ville = ville;
	}
	
	public Set<Affaire> getAffaire() {
		return affaire;
	}

	public void setAffaire(Set<Affaire> affaire) {
		this.affaire = affaire;
	}

	public TypeAuxiliaire getTypeauxiliaireId() {
		return typeauxiliaireId;
	}

	public void setTypeauxiliaireId(TypeAuxiliaire typeauxiliaireId) {
		this.typeauxiliaireId = typeauxiliaireId;
	}

	public Long getAuxiliaireId() {
		return auxiliaireId;
	}
	public void setAuxiliaireId(Long auxiliaireId) {
		this.auxiliaireId = auxiliaireId;
	}
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	public String getNom() {
		return nom;
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
	
	public String getGouvernorat() {
		return gouvernorat;
	}
	public void setGouvernorat(String gouvernorat) {
		this.gouvernorat = gouvernorat;
	}
	
	public String getVille() {
		return ville;
	}
	
	public void setVille(String ville) {
		this.ville = ville;
	}
	

}
