package com.adaming.demo.entities;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "TypeAffaire")
public class TypeAffaire {
	
	public TypeAffaire() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "typeaffaire_id")
	private Long typeaffaireId;
	@Column(name = "typeaffaire")
	private String typeaffaire;
	
	
	@OneToMany(mappedBy = "typeaffaireId")
	private List<Affaire> Affaires;
	
	public String getTypeaffaire() {
		return typeaffaire;
	}
	
	@JsonIgnore
	public List<Affaire> getAffaires() {
		return Affaires;
	}
	public void setAffaires(List<Affaire> affaires) {
		Affaires = affaires;
	}
	public void setTypeaffaire(String typeaffaire) {
		this.typeaffaire = typeaffaire;
	}
	public Long getTypeaffaireId() {
		return typeaffaireId;
	}
	public void setTypeaffaireId(Long typeaffaireId) {
		this.typeaffaireId = typeaffaireId;
	}
	public TypeAffaire(Long typeaffaireId, String typeaffaire) {
		super();
		this.typeaffaireId = typeaffaireId;
		this.typeaffaire = typeaffaire;
	}
	public void setTypeAffaire(String typeaffaire) {
		this.typeaffaire = typeaffaire;
	}

	
}
