package com.adaming.demo.entities;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnore;

import java.io.Serializable;
import java.util.List;
@Entity
@Table(name = "Tribunal")
public class Tribunal implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "tribunal_id")
	private Long tribunalId;
	private String gouvernorat;
	private String ville;
	private String adresse;
	private String telephone;
	private String nom;

		

	public String getNom() {
		return nom;
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	@OneToMany(mappedBy = "tribunalId")
	private List<Phase> phases;
	
	@ManyToOne
	@JoinColumn(name = "typetribunalid")
	private TypeTribunal typetribunalId;
	
	public Tribunal() {
		super();
		// TODO Auto-generated constructor stub
	}
	public String getGouvernorat() {
		return gouvernorat;
	}
	public void setGouvernorat(String gouvernorat) {
		this.gouvernorat = gouvernorat;
	}
	public String getVille() {
		return ville;
	}
	public void setVille(String ville) {
		this.ville = ville;
	}
	
	/*@OneToMany(mappedBy = "tribunalId")
	private List<Tache> taches;*/

	public Long getTribunalId() {
		return tribunalId;
	}
	public void setTribunalId(Long tribunalId) {
		this.tribunalId = tribunalId;
	}

	
	public String getAdresse() {
		return adresse;
	}
	public void setAdresse(String adresse) {
		this.adresse = adresse;
	}
	
	public String getTelephone() {
		return telephone;
	}
	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}
	public Tribunal(Long tribunalId, String gouvernorat, String ville, String adresse,
			String telephone) {
		super();
		this.tribunalId = tribunalId;
		this.gouvernorat = gouvernorat;
		this.ville = ville;
		this.adresse = adresse;
		this.telephone = telephone;
	}
	
	@JsonIgnore
	public List<Phase> getPhases() {
		return phases;
	}
	public void setPhases(List<Phase> phases) {
		this.phases = phases;
	}
	public TypeTribunal getTypetribunalId() {
		return typetribunalId;
	}
	public void setTypetribunalId(TypeTribunal typetribunalId) {
		this.typetribunalId = typetribunalId;
	}
	

	/*public List<Tache> getTaches() {
		return taches;
	}
	public void setTaches(List<Tache> taches) {
		this.taches = taches;
	}
*/
	/*public List<Phase> getPhases() {
		return phases;
	}
	public void setPhases(List<Phase> phases) {
		this.phases = phases;
	}*/
		
}

