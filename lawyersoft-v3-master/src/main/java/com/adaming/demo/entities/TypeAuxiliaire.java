package com.adaming.demo.entities;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "TypeAuxiliaire")
public class TypeAuxiliaire {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "typeauxiliaire_id")
	private Long typeauxiliaireId;
	@Column(name = "typeauxiliaire")
	private String typeauxiliaire;
	
	@OneToMany(mappedBy = "typeauxiliaireId")
	private List<Auxiliaire> auxiliaires;
	
	
	@JsonIgnore
	public List<Auxiliaire> getAuxiliaires() {
		return auxiliaires;
	}
	public void setAuxiliaires(List<Auxiliaire> auxiliaires) {
		this.auxiliaires = auxiliaires;
	}
	public TypeAuxiliaire() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getTypeauxiliaire() {
		return typeauxiliaire;
	}
	public void setTypeauxiliaire(String typeauxiliaire) {
		this.typeauxiliaire = typeauxiliaire;
	}
	public Long getTypeauxiliaireId() {
		return typeauxiliaireId;
	}
	public void setTypeauxiliaireId(Long typeauxiliaireId) {
		this.typeauxiliaireId = typeauxiliaireId;
	}

	public TypeAuxiliaire(Long typeauxiliaireId, String typeauxiliaire) {
		super();
		this.typeauxiliaireId = typeauxiliaireId;
		this.typeauxiliaire = typeauxiliaire;
	}
	

}
