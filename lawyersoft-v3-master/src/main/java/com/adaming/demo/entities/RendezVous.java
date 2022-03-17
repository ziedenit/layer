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
@Table(name = "RendezVous")
public class RendezVous implements Serializable{ 


	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_rendezvous")
	private Long idrendezvous;
	@Column(name = "daterendezvous")
	private Date daterendezvous;
	@Column(name = "description")
	private String description;
	@Column(name = "etat")
	private String etat;

	@ManyToOne
	@JoinColumn(name = "phase_id")
	private Phase phaseId;

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

   


	public String getEtat() {
		return etat;
	}

	public void setEtat(String etat) {
		this.etat = etat;
	}

	public Long getIdrendezvous() {
		return idrendezvous;
	}

	public void setIdrendezvous(Long idrendezvous) {
		this.idrendezvous = idrendezvous;
	}

	public Date getDaterendezvous() {
		return daterendezvous;
	}

	public void setDaterendezvous(Date daterendezvous) {
		this.daterendezvous = daterendezvous;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	


	public Phase getPhaseId() {
		return phaseId;
	}

	public void setPhaseId(Phase phaseId) {
		this.phaseId = phaseId;
	}
	

	public RendezVous(Long idrendezvous, Date daterendezvous, String description, String etat, Phase phaseId) {
		super();
		this.idrendezvous = idrendezvous;
		this.daterendezvous = daterendezvous;
		this.description = description;
		this.etat = etat;
		this.phaseId = phaseId;
	}

	public RendezVous() {
		super();
		// TODO Auto-generated constructor stub
	}

}
