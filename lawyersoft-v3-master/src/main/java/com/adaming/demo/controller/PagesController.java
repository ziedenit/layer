package com.adaming.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.adaming.demo.entities.Pages;
import com.adaming.demo.service.IPagesService;

@RestController
@RequestMapping(value="/pages")
public class PagesController {
	@Autowired
	IPagesService pagesService;
	@RequestMapping(value="/getAllPages", method=RequestMethod.GET )
    public List<Pages> findAllPages(){
        return pagesService.getListPages();
    }
}
