package com.adaming.demo;

import java.util.Date;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Primary;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.adaming.demo.controller.ConsultationController;
import com.adaming.demo.entities.Pages;
import com.adaming.demo.entities.Profil;
import com.adaming.demo.entities.User;
import com.adaming.demo.service.IPagesService;
import com.adaming.demo.service.IProfilService;
import com.adaming.demo.service.IUserService;

@SpringBootApplication
public class LawyersoftApplication implements CommandLineRunner{
	@Autowired
	IPagesService pageService;
	@Autowired
	IProfilService profilService;
	@Autowired
	IUserService userService;
	public static void main(String[] args) {
		SpringApplication.run(LawyersoftApplication.class, args);
		int date = new Date().getMonth() +1;
	     System.out.print(date);
	}
	@Bean
	@Primary
	public BCryptPasswordEncoder getpce()
	{
		return new BCryptPasswordEncoder();
	}
	@Override
	public void run(String... args) throws Exception {
		
		List<String> allPages=new ArrayList<String>();
		allPages.addAll(Arrays.asList("Tribunaux","Intervenants","Honoraires","Calenderier","Accueil","Affaires","Auxiliaires",
				"Consultations","Utilisateurs","Configuration"));
		allPages.forEach(page->{
			if(!pageExist(page)) {
				Pages p=new Pages();
				p.setNom(page);
				pageService.addPage(p);
			}
		});
		Profil adminProfil=profilService.findByName("ADMINSTRATEUR LAWYER");
		if(adminProfil==null) {
			Profil profil=new Profil();
			profil.setNameProfil("ADMINSTRATEUR LAWYER");
			adminProfil=profilService.save(profil);
		}
		User adminUser=userService.findUserByLogin("ADMINSTRATEUR LAWYER");
		if(adminUser==null) {
			User user=new User(null, "administrateur", "lawyer", "ADMINSTRATEUR LAWYER", "ADMINSTRATEUR LAWYER", 
					"ADMINSTRATEUR.LAWYER@gmail.com", null, true, null, null, adminProfil);
			adminUser=userService.save(user);
		}
	}
	boolean pageExist(String nom) {
		if(pageService.findByNom(nom)!=null)
			return true;
		return false;
	}
}
