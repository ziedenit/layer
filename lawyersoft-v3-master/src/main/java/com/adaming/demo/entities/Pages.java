package com.adaming.demo.entities;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Pages {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	private String nom;

	@OneToMany(mappedBy = "page")
	@JsonIgnore
	private List<DroitAcces> droitAcces;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNom() {
		return nom;
	}

	public void setNom(String nom) {
		this.nom = nom;
	}

	public List<DroitAcces> getDroitAcces() {
		return droitAcces;
	}

	public void setDroitAcces(List<DroitAcces> droitAcces) {
		this.droitAcces = droitAcces;
	}

}
