package com.adaming.demo.controller;

import java.io.IOException;
import java.io.StringWriter;
import java.io.Writer;
import java.security.Principal;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

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

import freemarker.core.ParseException;
import freemarker.template.Configuration;
import freemarker.template.MalformedTemplateNameException;
import freemarker.template.Template;
import freemarker.template.TemplateException;
import freemarker.template.TemplateNotFoundException;

@RestController
@CrossOrigin
@RequestMapping(value = "/honoraire")
public class HonnoraireController {

	@Autowired
	private IHonnoraireService honnoraireService;

	static String DATE_FORMAT = "dd/MM/yyyy";

	
	/* use template*/
	private String useTamplate(Configuration cfg /*String reportType, String lang*/, Map<String, Object> input)
			throws TemplateNotFoundException, MalformedTemplateNameException, ParseException, IOException,
			TemplateException {
		Template template;
	/*	if (reportType.equals("A")) {
			if (lang.equals("ar"))*/
				//template = cfg.getTemplate("rapportA_ar.ftl");
		/*	else
				template = cfg.getTemplate("rapportH_fr.ftl");
		

	/*	} else {
			if (lang.equals("ar"))*/
			//	template = cfg.getTemplate("rapportH_ar.ftl");
			/*else*/
				template = cfg.getTemplate("rapportH_fr.ftl");
	/*	}*/
				
		Writer writer = new StringWriter();
		// put values in the template
		template.process(input, writer);
		String StringHtml = writer.toString();
		StringHtml.replaceAll("\\s+", "");
		return StringHtml;
	}

	/*freemarker*/
	@RequestMapping(value = "/rapporthonoraire/{idhonoraire}", method = RequestMethod.POST)
	public String generateHonnoraireReport(@PathVariable("idhonoraire")Long idhonoraire /*String lang*/) throws Exception {
		
		Configuration cfg = new Configuration(Configuration.VERSION_2_3_25);
		cfg.setEncoding(Locale.getDefault(), "utf-8");
		cfg.setClassForTemplateLoading(this.getClass(), "/templates/");
		Map<String, Object> input = new HashMap<String, Object>();
		Date date = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat(DATE_FORMAT);
		/*List<Auxiliaire> listAux = auxiliaireService
				.getAllAxiliaireNotAvocatByAffaire(new Long(affaire.getAffaireId()));
		List<Auxiliaire> listConfrere = auxiliaireService
				.getAllAxiliaireAvocatByAffaire(new Long(affaire.getAffaireId()));*/

		Honnoraire honoraire = honnoraireService.findById(idhonoraire);
		
		System.out.print(honoraire);
		
		input.put("affaire", honoraire);
		input.put("titreHonnoraire", honoraire.getAffaireId().getTitre());
		input.put("refA", honoraire.getAffaireId().getReference());
		input.put("typeAff", honoraire.getAffaireId().getTypeaffaireId().getTypeaffaire());
		input.put("currentDate", date);
	/*	input.put("nomprenomClient", constrcutName(affaire, "client"));
		input.put("listCol", constrcutListCol(affaire.getAffaireId()));
		input.put("listAux", constrcutListAux(listAux));
		input.put("listConfrere", constrcutListAux(listConfrere));
		insertValuesinTable(input, affaire);
		constructDepenseVersemntTable(input, affaire, sdf, "depense");
		constructDepenseVersemntTable(input, affaire, sdf, "versement");*/
		System.out.print("titre"+ honoraire.getAffaireId().getTitre());
		return useTamplate(cfg, /*"H", lang,*/ input);
		
	}
	
	
	
	@RequestMapping(value = "/gethonoraire", method = RequestMethod.GET)
	public List<Honnoraire> findAll() {

		return honnoraireService.findAll();
	}

	@RequestMapping(value = "/addhonoraire", method = RequestMethod.POST)
	public Honnoraire save(@RequestBody Honnoraire honoraire) {

		
		return honnoraireService.save(honoraire);

	}

	@RequestMapping(value = "/deletehonoraire/{honoraireid}", method = RequestMethod.DELETE)
	public void delete(@PathVariable("honoraireid") long honoraireid) {

		honnoraireService.delete(honoraireid);

	}

	@RequestMapping(value = "/updatehonoraire", method = RequestMethod.PUT)
	public Honnoraire update(@RequestBody Honnoraire honoraire) {

		return honnoraireService.update(honoraire);

	}

	@RequestMapping(value = "/findbyidhonoraire/honoraireid}", method = RequestMethod.GET)
	public Honnoraire findbyid(@PathVariable("honoraireid") long honoraireid) {

		return honnoraireService.findById(honoraireid);

	}

	@RequestMapping(value = "/findbyidaffaire/{affaireid}", method = RequestMethod.GET)
	public List<Honnoraire> findAllByAffaireId(@PathVariable("affaireid") Long id) {

		return honnoraireService.findAllByAffaireId(id);

	}
	
	@RequestMapping(value = "/findbyaffairetype/{idaffaire}/{type}", method = RequestMethod.GET)
	public List<Honnoraire> findAllByaffairetype(@PathVariable("idaffaire") Long idaffaire,@PathVariable("type") String type) {

		return honnoraireService.findAllByaffairetype(idaffaire, type);

	}

	
	@RequestMapping(value = "/findbytype", method = RequestMethod.GET)
	public List<Honnoraire> findAllBytype() {

		return honnoraireService.findAllBytype(null);

	}


	@RequestMapping(value = "/findbyaffairetypenull/{idaffaire}", method = RequestMethod.GET)
	public Honnoraire findByaffairetype(@PathVariable("idaffaire") Long idaffaire) {

		return honnoraireService.findByTypeAndAffaireId(null, idaffaire);

	}
}
