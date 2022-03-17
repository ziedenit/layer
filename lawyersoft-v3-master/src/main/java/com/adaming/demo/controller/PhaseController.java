package com.adaming.demo.controller;

import java.security.Principal;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
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
@RequestMapping(value = "/phase")
public class PhaseController {

	@Autowired
	private IPhaseService phaseService;

	@RequestMapping(value = "/getphase", method = RequestMethod.GET)
	public List<Phase> findAll() {

		return phaseService.findAll();
	}

	@RequestMapping(value = "/addphase", method = RequestMethod.POST)
	public Phase save(@RequestBody Phase phase) {

		return phaseService.save(phase);

	}

	@RequestMapping(value = "/deletephase/{phaseid}", method = RequestMethod.DELETE)
	public void delete(@PathVariable("phaseid") long phaseid) {

		phaseService.delete(phaseid);

	}

	@RequestMapping(value = "/updatephase", method = RequestMethod.PUT)
	public Phase update(@RequestBody Phase phase) {

		return phaseService.update(phase);

	}

	@RequestMapping(value = "/findbyidphase/{phaseid}", method = RequestMethod.GET)
	public Phase findbyid(@PathVariable("phaseid") long phaseid) {

		return phaseService.findById(phaseid);

	}

	@RequestMapping(value = "/findbyidaffaire/{affaireid}", method = RequestMethod.GET)
	public List<Phase> findAllByAffaireId(@PathVariable("affaireid") Long id) {

		return phaseService.findAllByAffaireId(id);

	}
	
	@RequestMapping(value = "/currentphase/{affaire}", method = RequestMethod.GET)
	public Phase findByCurrentTrue(@PathVariable("affaire") Affaire affaire) {
		
		return phaseService.findByAffaireIdAndCurrentTrue(affaire);

	}

	
	@RequestMapping(value = "/phase/{idphase}", method = RequestMethod.GET)
	public Phase findByPhaseId(@PathVariable("idphase") Long idphase) {
		
		return phaseService.findByPhaseId(idphase);

	}
}
