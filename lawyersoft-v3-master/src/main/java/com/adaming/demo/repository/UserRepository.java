package com.adaming.demo.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.adaming.demo.entities.User;


@Repository
public interface UserRepository extends JpaRepository<User,Long> {
	User findByLogin(String login);
	
	       
	          
}