package com.adaming.demo.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "Phase")
public class Phase implements Serializable {

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "phase_id")
	private Long phaseId;
	private String nom;
	@Column(name = "date_debut")
	@Temporal(TemporalType.DATE)
	private Date dateDebut;
	@Column(name = "date_fin")
	@Temporal(TemporalType.DATE)
	private Date dateFin;
	@Column(name = "reference_tribunal")
	private String referenceTribunal;
	@Column(name = "current")
	private Boolean current = true;

	public Phase() {
		super();
		// TODO Auto-generated constructor stub
	}

	@ManyToOne
	@JoinColumn(name = "affaire_id")
	private Affaire affaireId;

	@OneToMany(mappedBy = "phaseId")
	@JsonIgnore
	private List<RendezVous> RendezVous;

	@OneToMany(mappedBy = "phaseId")
	@JsonIgnore
	private List<Audiance> Audiance;

	@OneToMany(mappedBy = "phaseId")
	@JsonIgnore
	private List<Lecteurjugement> Lecteurjugement;

	@OneToMany(mappedBy = "phaseId")
	@JsonIgnore
	private List<Tache> Tache;

	@OneToOne
	@JoinColumn(name = "tribunal_id")
	private Tribunal tribunalId;

	public Long getPhaseId() {
		return phaseId;
	}

	public void setPhaseId(Long phaseId) {
		this.phaseId = phaseId;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public Date getDateDebut() {
		return dateDebut;
	}

	public void setDateDebut(Date dateDebut) {
		this.dateDebut = dateDebut;
	}

	public Date getDateFin() {
		return dateFin;
	}

	public void setDateFin(Date dateFin) {
		this.dateFin = dateFin;
	}

	/*
	 * public List<Tache> getTaches() { return taches; } public void
	 * setTaches(List<Tache> taches) { this.taches = taches; }
	 */
	public String getReferenceTribunal() {
		return referenceTribunal;
	}

	public void setReferenceTribunal(String referenceTribunal) {
		this.referenceTribunal = referenceTribunal;
	}

	public Affaire getAffaireId() {
		return affaireId;
	}

	public void setAffaireId(Affaire affaireId) {
		this.affaireId = affaireId;
	}

	public Tribunal getTribunalId() {
		return tribunalId;
	}

	public void setTribunalId(Tribunal tribunalId) {
		this.tribunalId = tribunalId;
	}

	@JsonIgnore
	public List<Lecteurjugement> getLecteurjugement() {
		return Lecteurjugement;
	}

	public void setLecteurjugement(List<Lecteurjugement> lecteurjugement) {
		Lecteurjugement = lecteurjugement;
	}

	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	/*
	 * public Tribunal getTribunal() { return tribunal; } public void
	 * setTribunal(Tribunal tribunal) { this.tribunal = tribunal; }
	 */


	public Boolean getCurrent() {
		return current;
	}

	public void setCurrent(Boolean current) {
		this.current = current;
	}

	@JsonIgnore
	public List<RendezVous> getRendezVous() {
		return RendezVous;
	}

	public void setRendezVous(List<RendezVous> rendezVous) {
		RendezVous = rendezVous;
	}

	@JsonIgnore
	public List<Audiance> getAudiance() {
		return Audiance;
	}

	public void setAudiance(List<Audiance> audiance) {
		Audiance = audiance;
	}

	@JsonIgnore
	public List<Tache> getTache() {
		return Tache;
	}

	public void setTache(List<Tache> tache) {
		Tache = tache;
	}
	

	public Phase(Long phaseId, String nom, Date dateDebut, Date dateFin, String referenceTribunal, Boolean current,
			Affaire affaireId, List<com.adaming.demo.entities.RendezVous> rendezVous,
			List<com.adaming.demo.entities.Audiance> audiance,
			List<com.adaming.demo.entities.Lecteurjugement> lecteurjugement,
			List<com.adaming.demo.entities.Tache> tache, Tribunal tribunalId) {
		super();
		this.phaseId = phaseId;
		this.nom = nom;
		this.dateDebut = dateDebut;
		this.dateFin = dateFin;
		this.referenceTribunal = referenceTribunal;
		this.current = current;
		this.affaireId = affaireId;
		RendezVous = rendezVous;
		Audiance = audiance;
		Lecteurjugement = lecteurjugement;
		Tache = tache;
		this.tribunalId = tribunalId;
	}

	@Override
	public String toString() {
		return "Phase [phaseId=" + phaseId + ", nom=" + nom + ", dateDebut=" + dateDebut + ", dateFin=" + dateFin
				+ ", referenceTribunal=" + referenceTribunal + ", current=" + current + ", affaireId=" + affaireId
				+ ", RendezVous=" + RendezVous + ", Audiance=" + Audiance + ", Lecteurjugement=" + Lecteurjugement
				+ ", Tache=" + Tache + ", tribunalId=" + tribunalId + "]";
	}

 
}
