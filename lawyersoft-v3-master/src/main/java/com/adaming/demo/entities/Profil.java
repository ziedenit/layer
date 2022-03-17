package com.adaming.demo.entities;

import java.util.List;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Profil")
public class Profil {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "idprofil")
	private Long idProfil;
	@Column(name = "name_profil")
	private String nameProfil;

	@OneToMany(mappedBy = "idProfil")
	private List<User> useres;

	@OneToMany(mappedBy = "profile")
	private List<DroitAcces> droitsAcces;

	public Long getIdProfil() {
		return idProfil;
	}

	public Profil() {
		super();
		// TODO Auto-generated constructor stub
	}

	public void setIdProfil(Long idProfil) {
		this.idProfil = idProfil;
	}

	public List<DroitAcces> getDroitsAcces() {
		return droitsAcces;
	}

	public void setDroitsAcces(List<DroitAcces> droitsAcces) {
		this.droitsAcces = droitsAcces;
	}

	@JsonIgnore
	public List<User> getUseres() {
		return useres;
	}

	public void setUseres(List<User> useres) {
		this.useres = useres;
	}

	public String getNameProfil() {
		return nameProfil;
	}

	public void setNameProfil(String nameProfil) {
		this.nameProfil = nameProfil;
	}

	@Override
	public String toString() {
		return "Profil{" + "idProfil=" + idProfil + ", nameProfil='" + nameProfil + '}';
	}
}
