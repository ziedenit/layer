package com.adaming.demo.entities;

import java.io.Serializable;
import java.util.Collection;
import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "TypeTribunal")
public class TypeTribunal implements Serializable {
	
	public TypeTribunal() {
		super();
		// TODO Auto-generated constructor stub
	}


	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "typetribunalid")
	private Long typetribunalId;
	@Column(name = "typetribunal")
	private String typetribunal;
	
	
	@OneToMany(mappedBy = "typetribunalId")
	private List<Tribunal> tribunals;


	public Long getTypetribunalId() {
		return typetribunalId;
	}


	public void setTypetribunalId(Long typetribunalId) {
		this.typetribunalId = typetribunalId;
	}


	public String getTypetribunal() {
		return typetribunal;
	}


	public void setTypetribunal(String typetribunal) {
		this.typetribunal = typetribunal;
	}

	@JsonIgnore /*boucle list */
	public List<Tribunal> getTribunal() {
		return tribunals;
	}


	public void setTribunal(List<Tribunal> tribunal) {
		this.tribunals = tribunal;
	}


	public TypeTribunal(Long typetribunalId, String typetribunal, List<Tribunal> tribunals) {
		super();
		this.typetribunalId = typetribunalId;
		this.typetribunal = typetribunal;
		this.tribunals = tribunals;
	}
	
	
}
