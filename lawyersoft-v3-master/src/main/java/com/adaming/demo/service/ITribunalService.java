package com.adaming.demo.service;

import java.util.List;

import com.adaming.demo.entities.*;

public interface ITribunalService {
	
	 Tribunal save(Tribunal tribunal);
	 
	 void delete(Long tribunalid);
	 
	 List<Tribunal> findAll();
	 
	 Tribunal findById(Long tribunalid);
	 
	 Tribunal update(Tribunal tribunal);
}
