package com.adaming.demo.Implservice;

import java.util.List;
import java.util.Date;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import com.adaming.demo.service.*;


@Service
public class UserServiceImpl implements IUserService {

	
	@Autowired
    UserRepository repository;
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;

	@Override
	public User save(User user) {
		user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
		/*	if(repository.exists(user))*//*exists(objet)*/
		return repository.save(user);
	}

	@Override
	public void delete(Long iduser) {

		if(repository.existsById(iduser)) /*exists(objet)*/
		repository.deleteById(iduser);
		else
			System.out.print("inconnus");		
	}

	@Override
	public List<User> findAll() {
		
		return repository.findAll();		

	}

	@Override
	public User findById(Long iduser) {
	
		if(repository.existsById(iduser)) /*exists(objet)*/

			return repository.findById(iduser).get();
			else 
				return null;
	}

	@Override
	public User update(User user) {
		
		if(repository.existsById(user.getIdUser())) /*exists(objet)*/{
			user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
			return repository.save(user);
		}else {
				return null;
		}
	}
	@Override
	public User findUserByLogin(String login) {
		return repository.findByLogin(login);
	}
	
}



