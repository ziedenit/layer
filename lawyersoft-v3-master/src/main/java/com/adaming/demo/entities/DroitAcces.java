package com.adaming.demo.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "droit_acces")
public class DroitAcces {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long idDroitAcces;

	private Boolean ajout;

	private Boolean modif;
	private Boolean supprime;
	private Boolean showPage;
	private Boolean archiver;
	private Boolean suiviPhase;
	@ManyToOne
	@JoinColumn(name = "pageId")
	private Pages page;

	@ManyToOne
	@JoinColumn(name = "profileId")
	@JsonIgnore
	private Profil profile;

	public Profil getProfile() {
		return profile;
	}

	public void setProfile(Profil profile) {
		this.profile = profile;
	}

	public Long getIdDroitAcces() {
		return idDroitAcces;
	}

	public void setIdDroitAcces(Long idDroitAcces) {
		this.idDroitAcces = idDroitAcces;
	}

	public Boolean getAjout() {
		return ajout;
	}

	public void setAjout(Boolean ajout) {
		this.ajout = ajout;
	}

	public Boolean getModif() {
		return modif;
	}

	public void setModif(Boolean modif) {
		this.modif = modif;
	}

	public Boolean getSupprime() {
		return supprime;
	}

	public void setSupprime(Boolean supprime) {
		this.supprime = supprime;
	}

	public Boolean getShowPage() {
		return showPage;
	}

	public void setShowPage(Boolean showPage) {
		this.showPage = showPage;
	}

	public Boolean getArchiver() {
		return archiver;
	}

	public void setArchiver(Boolean archiver) {
		this.archiver = archiver;
	}

	public Boolean getSuiviPhase() {
		return suiviPhase;
	}

	public void setSuiviPhase(Boolean suiviPhase) {
		this.suiviPhase = suiviPhase;
	}

	@Override
	public String toString() {
		return "DroitAcces [idDroitAcces=" + idDroitAcces + ", ajout=" + ajout + ", modif=" + modif + ", supprime="
				+ supprime + ", showPage=" + showPage + ", archiver=" + archiver + ", suiviPhase=" + suiviPhase + "]";
	}

	public Pages getPage() {
		return page;
	}

	public void setPage(Pages page) {
		this.page = page;
	}

}
