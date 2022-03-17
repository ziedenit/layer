package com.adaming.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.adaming.demo.entities.Pages;
import java.lang.String;

@Repository
public interface PagesRepository extends JpaRepository<Pages, Long> {
	Pages findByNom(String nom);

}
