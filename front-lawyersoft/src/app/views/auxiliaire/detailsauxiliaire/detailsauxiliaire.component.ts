import { Auxiliaire } from './../../../entitie/Auxiliaire';
import { AuxiliaireService } from './../../../services/auxiliaire.service';
import { TypeauxiliaireService } from './../../../services/typeauxiliaire.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MessageService, MenuItem } from 'primeng/api';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updateauxiliaire',
  templateUrl: './detailsauxiliaire.component.html',
  styleUrls: ['./detailsauxiliaire.component.css']
})

export class DetailsauxiliaireComponent implements OnInit {

  submitted = false;
  listTypeAuxiliaire: [];
  idAuxiliaire: any;
  items: MenuItem[];
  home: MenuItem;

  auxiliaireForm = new FormGroup({
    auxiliaireId: new FormControl(null),
    nom: new FormControl(),
    prenom: new FormControl(),
    email: new FormControl(),
    gouvernorat: new FormControl(),
    ville: new FormControl(),
    adresse: new FormControl(),
    telephone: new FormControl(),
    typeauxiliaireId: new FormControl()
  });

  auxiliaire: Auxiliaire;

  constructor(private typeauxiliaireService: TypeauxiliaireService, private auxiliaireService: AuxiliaireService,
              private messageService: MessageService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.typeauxiliaireService.getListTypeAuxiliaire().subscribe((typeAux: []) => {

      this.listTypeAuxiliaire = typeAux;
    });

    this.idAuxiliaire = this.route.snapshot.paramMap.get('id');

    this.auxiliaireService.getAuxiliairebyid(this.idAuxiliaire).subscribe(auxiliaire => {
      console.log('aux', auxiliaire);
      this.auxiliaire = auxiliaire;
      this.auxiliaireForm.setValue(auxiliaire);
    });

    this.items = [
      {label:'Auxiliaire'},
      {label:'Détails'},
  ];

    this.home = {icon: 'pi pi-home'};
  }

  get f() { return this.auxiliaireForm.controls; }


}
