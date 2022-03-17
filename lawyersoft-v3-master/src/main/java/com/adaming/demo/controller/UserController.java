package com.adaming.demo.controller;

import java.security.Principal;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
 
import com.adaming.demo.entities.*;
import com.adaming.demo.repository.*;
import com.adaming.demo.Implservice.*;
import com.adaming.demo.service.*;


@RestController
@CrossOrigin
@RequestMapping(value="/user")
public class UserController {
	
	    @Autowired
	    private IUserService userService;
	     
	    @RequestMapping(value="/getuser", method=RequestMethod.GET )
	    public List<User> findAll(){
	    
	        return userService.findAll();
	    }
	    
	    @RequestMapping(value="/adduser", method=RequestMethod.POST )
	    public User save(@RequestBody User user){
	    	
	    	
	    	return userService.save(user);
	
	    }  
	    
	    @RequestMapping(value="/deleteuser/{userid}", method=RequestMethod.DELETE )
	    public void delete(@PathVariable("userid") long userid)
	    {
	    	
	    	userService.delete(userid);

        }  
	    
	    @RequestMapping(value="/updateuser", method=RequestMethod.PUT )
	    public User update(@RequestBody User user){
	    	
	    	return userService.update(user);
	
	    }  
	    
	    
	    @RequestMapping(value="/findbyiduser/{userid}", method=RequestMethod.GET )
	    public User findbyid(@PathVariable("userid") long userid){
	    	
	    	return userService.findById(userid);
	
	    } 
	    
	    @GetMapping(value = "/userByLogin/{login}")
		public User getByLogin(@PathVariable String login) {
			return userService.findUserByLogin(login);
		}
	    @RequestMapping(value="/getCurrentUser", method = RequestMethod.GET)
		public String getCurrentUser() {
			Authentication loggedInUser = SecurityContextHolder.getContext().getAuthentication();
			//String username = loggedInUser.getName();
			return loggedInUser.getName();
		}


	    
	   
}
