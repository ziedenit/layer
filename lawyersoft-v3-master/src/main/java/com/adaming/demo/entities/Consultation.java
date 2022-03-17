package com.adaming.demo.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
@Entity
@Table(name = "Consultation")
public class Consultation implements Serializable {
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_consultation")
	private Long consultationId; 
	
	@Column(name = "titre")
	private String titre;
	
	@Column(name = "date_Debut")
	private Date dateDebut;
	
	/*@Temporal(TemporalType.DATE)
	@Column(name = "date_fin")
	private Date dateFin;
	*/
	
	/*@Column(name = "heure_debut")
	private Date heureDebut;
	
	@Column(name = "heure_fin")
	private Date heureFin;*/
	
	@Column(name = "description")
	private String description;
	
	/**
	 * en cours/cloturé/annuler/reporter
	 */
	@Column(name = "etat")
	private String etat;
	
	/**
	 * RDV OU Travaille à faire(TAF)
	 */
	private String type;

	
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	@Column(name = "adresse")
	private String adresse;
	
	
	
	
	/*
	 * public TypeConsultation getTypeconsultationId() { return typeconsultationId;
	 * } public void setTypeconsultationId(TypeConsultation typeconsultationId) {
	 * this.typeconsultationId = typeconsultationId; }
	 */
	
	
	@ManyToMany
    @JoinTable(name = "user_consultation",
            joinColumns = { @JoinColumn(name = "id_consultation") },
            inverseJoinColumns = { @JoinColumn(name = "user_id") })
    private Set<User> user = new HashSet<>();
	
	@ManyToMany
    @JoinTable(name = "intervenant_consultation",
            joinColumns = { @JoinColumn(name = "id_consultation") },
            inverseJoinColumns = { @JoinColumn(name = "intervenant_id") })
    private Set<Intervenant> intervenant = new HashSet<>();
	
	
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	
	@OneToMany(mappedBy = "consultationId")
	@JsonIgnore
	private List<Honnoraire> Honnoraires;
	

	/*
	 * @ManyToOne
	 * 
	 * @JoinColumn(name = "typeconsultationId") private TypeConsultation
	 * typeconsultationId;
	 */
	
/*	@ManyToMany(mappedBy = "consultaions")
	private  List<User> users;
	@ManyToMany
	private  List<Contact> contacts;
*/
	public Long getConsultationId() {
		return consultationId;
	}
	public void setConsultationId(Long consultationId) {
		this.consultationId = consultationId;
	}
	public String getTitre() {
		return titre;
	}
	public void setTitre(String titre) {
		this.titre = titre;
	}

	public Date getDateDebut() {
		return dateDebut;
	}
	public void setDateDebut(Date dateDebut) {
		this.dateDebut = dateDebut;
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
	public List<Honnoraire> getHonnoraires() {
		return Honnoraires;
	}
	public void setHonnoraires(List<Honnoraire> honnoraires) {
		Honnoraires = honnoraires;
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
	
	/*public List<Contact> getContacts() {
		return contacts;
	}
	public void setContacts(List<Contact> contacts) {
		this.contacts = contacts;
	}*/
	
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Consultation() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Consultation(Long consultationId, String titre, Date dateDebut, String description, String etat, String type,
			String adresse, Set<User> user, Set<Intervenant> intervenant, List<Honnoraire> honnoraires) {
		super();
		this.consultationId = consultationId;
		this.titre = titre;
		this.dateDebut = dateDebut;
		this.description = description;
		this.etat = etat;
		this.type = type;
		this.adresse = adresse;
		this.user = user;
		this.intervenant = intervenant;
		Honnoraires = honnoraires;
	}
	
	

	

	
}

