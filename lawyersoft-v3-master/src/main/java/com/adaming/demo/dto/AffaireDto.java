package com.adaming.demo.dto;

import com.adaming.demo.entities.Affaire;
import com.adaming.demo.entities.Honnoraire;
import com.adaming.demo.entities.Phase;

public class AffaireDto {
	private Affaire affaire;
	private Phase phase;
	private Honnoraire honnoraire;

	public Affaire getAffaire() {
		return affaire;
	}

	public void setAffaire(Affaire affaire) {
		this.affaire = affaire;
	}

	public Phase getPhase() {
		return phase;
	}

	public void setPhase(Phase phase) {
		this.phase = phase;
	}

	public Honnoraire getHonnoraire() {
		return honnoraire;
	}

	public void setHonnoraire(Honnoraire honnoraire) {
		this.honnoraire = honnoraire;
	}
	

}
