package com.adaming.demo.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Size;

import java.io.Serializable;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Table(name = "User")
public class User implements Serializable {
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_user")
	private Long idUser;
	private String nom;
	private String prenom;
	/*private String token;*/
	private String login;
	//@Size(min = 5, max = 60,message = "{password.size}")
	private String password;
	private String email;
	private String rib;
	private Boolean etat;
	
	
	@ManyToMany(mappedBy = "user")
	@JsonIgnore
    private Set<Affaire> affaire = new HashSet<>();
	
	
	@ManyToMany(mappedBy = "user")
	@JsonIgnore
    private Set<Consultation> consultation = new HashSet<>();
	
	
	@ManyToOne
	@JoinColumn(name = "idprofil")
	private Profil idProfil;
	
	/*@OneToMany(mappedBy = "userId",fetch = FetchType.LAZY)
	@JsonIgnore
	private List<Honnoraire> honnoraires;
*/

	/*public List<Tache> getTaches() {
		return taches;
	}
	public void setTaches(List<Tache> taches) {
		this.taches = taches;
	}
	*/
	public Long getIdUser() {
		return idUser;
	}
	public void setIdUser(Long idUser) {
		this.idUser = idUser;
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

	public Set<Consultation> getConsultation() {
		return consultation;
	}
	public void setConsultation(Set<Consultation> consultation) {
		this.consultation = consultation;
	}
	/*public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}*/
	public String getLogin() {
		return login;
	}
	public void setLogin(String login) {
		this.login = login;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Boolean getEtat() {
		return etat;
	}
	public void setEtat(Boolean etat) {
		this.etat = etat;
	}
/*
	public Profil getProfils() {
		return profils;
	}
	public void setProfils(Profil profils) {
		this.profils = profils;
	}

*/
	public User() {
		super();
	}

	/*public List<Consultation> getConsultaions() {
		return consultaions;
	}
	public void setConsultaions(List<Consultation> consultaions) {
		this.consultaions = consultaions;
	}

	public List<Honnoraire> getHonnoraires() {
		return honnoraires;
	}

	public void setHonnoraires(List<Honnoraire> honnoraires) {
		this.honnoraires = honnoraires;
	}*/



	public Set<Affaire> getAffaire() {
		return affaire;
	}
	public void setAffaire(Set<Affaire> affaire) {
		this.affaire = affaire;
	}

	public Profil getIdProfil() {
		return idProfil;
	}
	public void setIdProfil(Profil idProfil) {
		this.idProfil = idProfil;
	}
	public String getRib() {
		return rib;
	}
	public void setRib(String rib) {
		this.rib = rib;
	}
	/*public User(Long idUser, String nom, String prenom, String login, String password, String email, String rib,
			Boolean etat) {
		super();
		this.idUser = idUser;
		this.nom = nom;
		this.prenom = prenom;
		this.login = login;
		this.password = password;
		this.email = email;
		this.rib = rib;
		this.etat = etat;
	}*/
	public User(Long idUser, String nom, String prenom, String login, String password, String email, String rib,
			Boolean etat, Set<Affaire> affaire, Set<Consultation> consultation, Profil idProfil) {
		super();
		this.idUser = idUser;
		this.nom = nom;
		this.prenom = prenom;
		this.login = login;
		this.password = password;
		this.email = email;
		this.rib = rib;
		this.etat = etat;
		this.affaire = affaire;
		this.consultation = consultation;
		this.idProfil = idProfil;
	}
	
	

	
}
