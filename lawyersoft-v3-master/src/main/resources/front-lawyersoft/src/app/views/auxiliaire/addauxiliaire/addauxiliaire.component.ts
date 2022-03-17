import { Router } from '@angular/router';
import { MessageService, MenuItem } from 'primeng/api';
import { AuxiliaireService } from './../../../services/auxiliaire.service';
import { TypeauxiliaireService } from './../../../services/typeauxiliaire.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addauxiliaire',
  templateUrl: './addauxiliaire.component.html',
  styleUrls: ['./addauxiliaire.component.css']
})
export class AddauxiliaireComponent implements OnInit {

  submitted = false;
  listTypeAuxiliaire: [];
  items: MenuItem[];
  home: MenuItem;

  auxiliaireForm = new FormGroup({
    nom: new FormControl(null, Validators.required),
    prenom: new FormControl(null, Validators.required),
    email: new FormControl(null, [Validators.required, Validators.email]),
    gouvernorat: new FormControl(null, Validators.required),
    ville: new FormControl(null, Validators.required),
    adresse: new FormControl(null, Validators.required),
    telephone: new FormControl(null, [Validators.required, Validators.max(99999999)]),
    typeauxiliaireId: new FormControl(null, Validators.required)
  });

  constructor(private typeauxiliaireService: TypeauxiliaireService, private auxiliaireService: AuxiliaireService,
              private messageService: MessageService, private router: Router) { }

  ngOnInit(): void {
    this.typeauxiliaireService.getListTypeAuxiliaire().subscribe((typeAux: []) => {
      this.listTypeAuxiliaire = typeAux;
    });

    this.items = [
      {label:'Auxiliaire'},
      {label:'Ajouter'},
  ];

    this.home = {icon: 'pi pi-home'};
  }

  resetAuxiliaireForm() {
    this.auxiliaireForm.reset();
    this.submitted = false;

  }
  addAuxiliaire(): void {
    this.submitted = true;
    if (this.auxiliaireForm.valid) {
      console.log(this.auxiliaireForm.value);
      this.auxiliaireService.addAuxiliaire(this.auxiliaireForm.value).subscribe(data => {
        this.showSuccess();
        this.router.navigateByUrl('/auxiliaire');
        console.log(data);
      });
    }
  }

  get f() { return this.auxiliaireForm.controls; }
  showSuccess() {
    this.messageService.add({ severity: 'success', summary: 'Message', detail: 'Auxiliaire ajouté avec succès' });
  }

}
