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
@RequestMapping(value = "/rendezvous")
public class RendezvousController {

	@Autowired
	private IRendezVousService rendezvousService;

	@RequestMapping(value = "/getrdv", method = RequestMethod.GET)
	public List<RendezVous> findAll() {

		return rendezvousService.findAll();
	}

	@RequestMapping(value = "/addrdv", method = RequestMethod.POST)
	public RendezVous save(@RequestBody RendezVous rendezvous) {
		rendezvous.setEtat("En cours");
		return rendezvousService.save(rendezvous);

	}

	@RequestMapping(value = "/deleterdv/{rdvid}", method = RequestMethod.DELETE)
	public void delete(@PathVariable("rdvid") Long rdvid) {

		rendezvousService.delete(rdvid);

	}

	@RequestMapping(value = "/updaterdv", method = RequestMethod.PUT)
	public RendezVous update(@RequestBody RendezVous rdv) {

		return rendezvousService.update(rdv);

	}

	@RequestMapping(value = "/findbyidrdv/{rdvid}", method = RequestMethod.GET)
	public RendezVous findbyid(@PathVariable("rdvid") Long rdvid) {

		return rendezvousService.findById(rdvid);

	}

	@RequestMapping(value = "/findbyidphase/{phaseid}", method = RequestMethod.GET)
	public List<RendezVous> findAllByPhaseId(@PathVariable("phaseid") Long id) {

		return rendezvousService.findAllByPhaseId(id);

	}

}
