package com.adaming.demo.Implservice;

import java.util.ArrayList;
import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.adaming.demo.entities.User;
import com.adaming.demo.service.IUserService;
@Service
public class UserDetailsServiceImpl implements UserDetailsService {
	@Autowired
	IUserService userService;
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		User user=userService.findUserByLogin(username);
		if(user==null)
			throw new UsernameNotFoundException(username);
		if (user.getEtat()) {
			Collection<GrantedAuthority> authorities = new ArrayList<>();
//			List<Profile> listProfil = profileService.findListProfilofUserLogin(username);
//			for (int i = 0; i < listProfil.size(); i++) {
//				authorities.add(new SimpleGrantedAuthority(listProfil.get(i).getId().getRoleId()));
//			}
			authorities.add(new SimpleGrantedAuthority(user.getIdProfil().getNameProfil()));
		return new org.springframework.security.core.userdetails.User(user.getLogin(), user.getPassword(), authorities);
		} else {
			 System.out.println("User " + username + " was not activated");
			 return null;
		}

	}

}
