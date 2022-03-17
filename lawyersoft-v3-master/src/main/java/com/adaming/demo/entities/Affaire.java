package com.adaming.demo.entities;

import javax.persistence.*;

import com.adaming.demo.entities.*;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "Affaire")
public class Affaire  {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "affaire_id")
	private Long affaireId;
	@Column(name = "titre")
	private String titre;
	@Column(name = "reference",unique=true)
	private String reference;
	@Column(name = "description")
	private String description;
	@Temporal(TemporalType.DATE)
	@Column(name = "datecreation")
	private Date dateCreation;
	@Temporal(TemporalType.DATE)
	@Column(name = "datecloture")
	private Date dateCloture;
	@Column(name = "etat")
	private String etat;	
	@Column(name = "etatavant")
	private String etatavant;	


	

	@ManyToMany
    @JoinTable(name = "affaire_auxiliaire",
            joinColumns = { @JoinColumn(name = "affaire_id") },
            inverseJoinColumns = { @JoinColumn(name = "auxiliaire_id") })
    private Set<Auxiliaire> auxiliaire = new HashSet<>();
	
	@ManyToMany
    @JoinTable(name = "user_affaire",
            joinColumns = { @JoinColumn(name = "affaire_id") },
            inverseJoinColumns = { @JoinColumn(name = "user_id") })
    private Set<User> user = new HashSet<>();
	
	@ManyToMany
    @JoinTable(name = "intervenant_affaire",
            joinColumns = { @JoinColumn(name = "affaire_id") },
            inverseJoinColumns = { @JoinColumn(name = "intervenant_id") })
    private Set<Intervenant> intervenant = new HashSet<>();
	
    
	@OneToMany(mappedBy = "affaireId")
	@JsonIgnore
	private List<Dossier> dossiers;
	
	@OneToMany(mappedBy = "affaireId")
	@JsonIgnore
	private List<Phase> phases;
	
	@OneToMany(mappedBy = "affaireId")
	@JsonIgnore
	private List<Honnoraire> Honnoraires;
	
	
	@ManyToOne
	@JoinColumn(name = "typeaffaire_id")
	private TypeAffaire typeaffaireId;
	


	

	public Affaire(Long affaireId, String titre, String reference, String description, Date dateCreation,
			Date dateCloture, String etat, String etatavant, Set<Auxiliaire> auxiliaire, Set<User> user,
			Set<Intervenant> intervenant, List<Dossier> dossiers, List<Phase> phases, List<Honnoraire> honnoraires,
			TypeAffaire typeaffaireId) {
		super();
		this.affaireId = affaireId;
		this.titre = titre;
		this.reference = reference;
		this.description = description;
		this.dateCreation = dateCreation;
		this.dateCloture = dateCloture;
		this.etat = etat;
		this.etatavant = etatavant;
		this.auxiliaire = auxiliaire;
		this.user = user;
		this.intervenant = intervenant;
		this.dossiers = dossiers;
		this.phases = phases;
		Honnoraires = honnoraires;
		this.typeaffaireId = typeaffaireId;
	}

	public Long getAffaireId() {
		return affaireId;
	}

	public void setAffaireId(Long affaireId) {
		this.affaireId = affaireId;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}

	public String getReference() {
		return reference;
	}

	public void setReference(String reference) {
		this.reference = reference;
	}


	public String getEtat() {
		return etat;
	}

	public void setEtat(String etat) {
		this.etat = etat;
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

	public Date getDateCloture() {
		return dateCloture;
	}

	public void setDateCloture(Date dateCloture) {
		this.dateCloture = dateCloture;
	}
	
	
	public Set<Auxiliaire> getAuxiliaire() {
		return auxiliaire;
	}

	public void setAuxiliaire(Set<Auxiliaire> auxiliaire) {
		this.auxiliaire = auxiliaire;
	}

	@JsonIgnore
	public List<Dossier> getDossiers() {
		return dossiers;
	}

	public void setDossiers(List<Dossier> dossiers) {
		this.dossiers = dossiers;
	}

	@JsonIgnore
	public List<Phase> getPhases() {
		return phases;
	}

	public void setPhases(List<Phase> phases) {
		this.phases = phases;
	}
	
	@JsonIgnore
	public List<Honnoraire> getHonnoraires() {
		return Honnoraires;
	}

	public void setHonnoraires(List<Honnoraire> honnoraires) {
		Honnoraires = honnoraires;
	}

	public TypeAffaire getTypeaffaireId() {
		return typeaffaireId;
	}

	public void setTypeaffaireId(TypeAffaire typeaffaireId) {
		this.typeaffaireId = typeaffaireId;
	}

	public Set<User> getUser() {
		return user;
	}

	public void setUser(Set<User> user) {
		this.user = user;
	}

	public Set<Intervenant> getIntervenant() {
		return intervenant;
	}

	public void setIntervenant(Set<Intervenant> intervenant) {
		this.intervenant = intervenant;
	}

	public Affaire() {
		super();
		// TODO Auto-generated constructor stub
	}


	public String getEtatavant() {
		return etatavant;
	}

	public void setEtatavant(String etatavant) {
		this.etatavant = etatavant;
	}

	@Override
	public String toString() {
		return "Affaire [affaireId=" + affaireId + ", titre=" + titre + ", reference=" + reference + ", description="
				+ description + ", dateCreation=" + dateCreation + ", dateCloture=" + dateCloture + ", etat=" + etat
				+ ", etatavant=" + etatavant + ", typeaffaireId=" + typeaffaireId + "]";
	}
	
	


}