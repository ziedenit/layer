package com.adaming.demo.entities;

import java.io.Serializable;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Statusaudiance")
public class Statusaudiance implements Serializable {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "status_id")
	private Long statusId;
	@Column(name = "status")
	private String status;

	@OneToMany(mappedBy = "statusId")
	@JsonIgnore
	private List<Audiance> audiances;

	public Long getStatusId() {
		return statusId;
	}

	public void setStatusId(Long statusId) {
		this.statusId = statusId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@JsonIgnore
	public List<Audiance> getAudiances() {
		return audiances;
	}

	public void setAudiances(List<Audiance> audiances) {
		this.audiances = audiances;
	}

	public Statusaudiance(Long statusId, String status, List<Audiance> audiances) {
		super();
		this.statusId = statusId;
		this.status = status;
		this.audiances = audiances;
	}

	public Statusaudiance() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	
}
