package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "sveikinimai")
public class Sveikinimas {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "paveiksliukas")
	private String paveiksliukas;
	
	@Column(name = "tekstas")
	private String tekstas;
	
	@Column(name = "audio")
	private String audio;	
	
	@Column(name = "vardas")
	private String vardas;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPaveiksliukas() {
		return paveiksliukas;
	}

	public void setPaveiksliukas(String paveiksliukas) {
		this.paveiksliukas = paveiksliukas;
	}

	public String getTekstas() {
		return tekstas;
	}

	public void setTekstas(String tekstas) {
		this.tekstas = tekstas;
	}

	public String getAudio() {
		return audio;
	}

	public void setAudio(String audio) {
		this.audio = audio;
	}

	public String getVardas() {
		return vardas;
	}

	public void setVardas(String vardas) {
		this.vardas = vardas;
	}

	public Sveikinimas(String paveiksliukas, String tekstas, String audio, String vardas) {
		super();
		this.paveiksliukas = paveiksliukas;
		this.tekstas = tekstas;
		this.audio = audio;
		this.vardas = vardas;
	}

	public Sveikinimas() {
	
	}
	
	
	
}
