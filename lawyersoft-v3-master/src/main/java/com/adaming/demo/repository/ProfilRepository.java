package com.adaming.demo.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.adaming.demo.entities.Affaire;
import com.adaming.demo.entities.Profil;

import java.util.Date;
import java.util.List;
import java.lang.String;


public interface ProfilRepository extends JpaRepository<Profil,Long> {

	 Profil findByNameProfil(String nameprofil);
	          
}