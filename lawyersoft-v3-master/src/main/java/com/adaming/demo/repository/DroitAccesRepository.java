package com.adaming.demo.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.adaming.demo.entities.DroitAcces;

@Repository
public interface DroitAccesRepository extends JpaRepository<DroitAcces, Long>{
	List<DroitAcces> findAllByProfileIdProfil(Long idProfil);
}
