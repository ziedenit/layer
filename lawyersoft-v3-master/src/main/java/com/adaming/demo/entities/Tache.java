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
@Table(name = "Tache")
public class Tache implements Serializable{ 


	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_tache")
	private Long idTache;
	@Column(name = "titre")
	private String titre;	
	@Column(name = "date_debut")
	private Date dateDebut;
	@Column(name = "etat")
	private String etat;
	


	@ManyToOne
	@JoinColumn(name = "phase_id")
	private Phase phaseId;
	

	public String getEtat() {
		return etat;
	}

	/*@ManyToOne
	@JoinColumn(name = "tribunal_id")
	private Tribunal tribunalId;
	@ManyToOne
	@JoinColumn(name = "phase_id")
	private Phase phaseId;
	@Column(name = "texte_jugement")
	*/
	/*
	public List<User> getUsers() {
		return users;
	}
	public void setUsers(List<User> users) {
		this.users = users;
	}
*/
	public Date getDateDebut() {
		return dateDebut;
	}

	public void setDateDebut(Date dateDebut) {
		this.dateDebut = dateDebut;
	}

	public void setEtat(String etat) {
		this.etat = etat;
	}

	public Long getIdTache() {
		return idTache;
	}

	public void setIdTache(Long idTache) {
		this.idTache = idTache;
	}

	public String getTitre() {
		return titre;
	}

	public void setTitre(String titre) {
		this.titre = titre;
	}
	

	public Phase getPhaseId() {
		return phaseId;
	}
	
	

	public Tache(Long idTache, String titre, Date dateDebut, String etat, Phase phaseId) {
		super();
		this.idTache = idTache;
		this.titre = titre;
		this.dateDebut = dateDebut;
		this.etat = etat;
		this.phaseId = phaseId;
	}

	public void setPhaseId(Phase phaseId) {
		this.phaseId = phaseId;
	}

	public Tache() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
