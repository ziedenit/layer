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
@Table(name = "Audiance")
public class Audiance implements Serializable{ 


	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "id_audiance")
	private Long idAudiance;	
	@Column(name = "titre",unique=true)
	private String titre;	
	@Column(name = "dateaudiance")
	private Date dateAudiance;
	@Column(name = "etat")
	private String etat;
	
	@ManyToOne
	@JoinColumn(name = "status_id")
	private Statusaudiance statusId;
	
	
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

    public Long getIdAudiance() {
		return idAudiance;
	}


	public static long getSerialversionuid() {
		return serialVersionUID;
	}


	public void setIdAudiance(Long idAudiance) {
		this.idAudiance = idAudiance;
	}


	public String getTitre() {
		return titre;
	}


	public void setTitre(String titre) {
		this.titre = titre;
	}


	public Date getDateAudiance() {
		return dateAudiance;
	}


	public void setDateAudiance(Date dateAudiance) {
		this.dateAudiance = dateAudiance;
	}



	public String getEtat() {
		return etat;
	}


	public void setEtat(String etat) {
		this.etat = etat;
	}

	
	public Phase getPhaseId() {
		return phaseId;
	}


	public void setPhaseId(Phase phaseId) {
		this.phaseId = phaseId;
	}
	
	
	
	public Statusaudiance getStatusId() {
		return statusId;
	}


	public void setStatusId(Statusaudiance statusId) {
		this.statusId = statusId;
	}


	public Audiance(Long idAudiance, String statut, String titre, Date dateAudiance, String etat,
			Statusaudiance statusId, Phase phaseId) {
		super();
		this.idAudiance = idAudiance;
		this.titre = titre;
		this.dateAudiance = dateAudiance;
		this.etat = etat;
		this.statusId = statusId;
		this.phaseId = phaseId;
	}


	public Audiance() {
		super();
		// TODO Auto-generated constructor stub
	}

}
