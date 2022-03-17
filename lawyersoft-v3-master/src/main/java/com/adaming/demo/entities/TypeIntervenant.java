package com.adaming.demo.entities;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "TypeIntervenant")
public class TypeIntervenant {
	
	public TypeIntervenant() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "typeintervenant_id")
	private Long typeintervenantId;
	@Column(name = "typeintervenant")
	private String typeintervenant;
	
	@OneToMany(mappedBy = "typeintervenantId")
	private List<Intervenant> intervenants;
	
	@JsonIgnore
	public List<Intervenant> getIntervenants() {
		return intervenants;
	}
	public void setIntervenants(List<Intervenant> intervenants) {
		this.intervenants = intervenants;
	}
	public Long getTypeintervenantId() {
		return typeintervenantId;
	}
	public void setTypeintervenantId(Long typeintervenantId) {
		this.typeintervenantId = typeintervenantId;
	}
	public String getTypeintervenant() {
		return typeintervenant;
	}
	public void setTypeintervenant(String typeintervenant) {
		this.typeintervenant = typeintervenant;
	}
	public TypeIntervenant(Long typeintervenantId, String typeintervenant) {
		super();
		this.typeintervenantId = typeintervenantId;
		this.typeintervenant = typeintervenant;
	}
		
}
