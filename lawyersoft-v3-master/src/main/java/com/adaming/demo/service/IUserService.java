package com.adaming.demo.service;

import java.util.List;

import com.adaming.demo.entities.*;

public interface IUserService {
	
	 User save(User user);
	 
	 void delete(Long userid);
	 
	 List<User> findAll();
	 
	 User findById(Long userid);
	 
	 User update(User user);

	User findUserByLogin(String login);
	
}
