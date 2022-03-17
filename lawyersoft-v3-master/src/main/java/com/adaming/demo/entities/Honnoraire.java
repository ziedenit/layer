package com.adaming.demo.entities;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
@Entity
@Table(name = "Honnoraire")
public class Honnoraire implements Serializable{

	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "honnoraire_id")
	private Long honnoraireId ;
	@Column(name = "montant")
	private float montant;
	@Column(name = "reste")
	private float reste;
	@Column(name = "titre")
	private String titre;
	@Column(name = "date_honnoraire")
	@Temporal(TemporalType.DATE)
	private Date dateHonnoraire;
	@Column(name = "type")
	private String type;
	
	@ManyToOne
	@JoinColumn(name = "affaire_id")
	private Affaire affaireId;
	

	@ManyToOne
	@JoinColumn(name = "id_consultation")
	private Consultation consultationId;
	
	/*@ManyToOne
	@JoinColumn(name = "typehonnoraire_id")
	private TypeAuxiliaire typehonnoraireId;*/

	
	public Long getHonnoraireId() {
		return honnoraireId;
	}
	public void setHonnoraireId(Long honnoraireId) {
		this.honnoraireId = honnoraireId;
	}
	
	public Date getDateHonnoraire() {
		return dateHonnoraire;
	}
	
	public void setDateHonnoraire(Date dateHonnoraire) {
		this.dateHonnoraire = dateHonnoraire;
	}
	
	public String getTitre() {
		return titre;
	}
	
	public void setTitre(String titre) {
		this.titre = titre;
	}
	
	public float getMontant() {
		return montant;
	}
	public void setMontant(float montant) {
		this.montant = montant;
	}
	
	
	
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public Affaire getAffaireId() {
		return affaireId;
	}
	public void setAffaireId(Affaire affaireId) {
		this.affaireId = affaireId;
	}
	public Consultation getConsultationId() {
		return consultationId;
	}
	public void setConsultationId(Consultation consultationId) {
		this.consultationId = consultationId;
	}
	
	
	public float getReste() {
		return reste;
	}
	public void setReste(float reste) {
		this.reste = reste;
	}
	/*public TypeAuxiliaire getTypehonnoraireId() {
		return typehonnoraireId;
	}
	public void setTypehonnoraireId(TypeAuxiliaire typehonnoraireId) {
		this.typehonnoraireId = typehonnoraireId;
	}*/
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	

	
	
	public Honnoraire() {
		super();
		// TODO Auto-generated constructor stub
	}

	

	

	
	public Honnoraire(Long honnoraireId, float montant, float reste, String titre, Date dateHonnoraire, String type,
			Affaire affaireId, Consultation consultationId) {
		super();
		this.honnoraireId = honnoraireId;
		this.montant = montant;
		this.reste = reste;
		this.titre = titre;
		this.dateHonnoraire = dateHonnoraire;
		this.type = type;
		this.affaireId = affaireId;
		this.consultationId = consultationId;
	}
	
	@Override
	public String toString() {
		return "Honnoraire [honnoraireId=" + honnoraireId + ", montant=" + montant + ", reste=" + reste + ", titre="
				+ titre + ", dateHonnoraire=" + dateHonnoraire + ", type=" + type + ", affaireId=" + affaireId
				+ ", consultationId=" + consultationId + "]";
	}

	
	
	
	
	
}
